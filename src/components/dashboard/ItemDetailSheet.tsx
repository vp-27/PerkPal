import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  QrCode,
  CreditCard,
  Sparkles,
  AlertTriangle,
  Receipt,
  Trash2,
} from "lucide-react";
import { BrandIcon } from "@/components/common/BrandLogos";
import {
  RewardProgram,
  GiftCard,
  WarrantyItem,
  RewardsStore,
} from "@/lib/rewardsData";
import { useToast } from "@/hooks/use-toast";

export type VaultItem =
  | { type: "reward"; data: RewardProgram }
  | { type: "giftcard"; data: GiftCard }
  | { type: "warranty"; data: WarrantyItem };

interface ItemDetailSheetProps {
  item: VaultItem | null;
  isOpen: boolean;
  onClose: () => void;
  onItemUpdated?: () => void;
}

export const ItemDetailSheet: React.FC<ItemDetailSheetProps> = ({
  item,
  isOpen,
  onClose,
  onItemUpdated,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [spendAmount, setSpendAmount] = useState<string>("");
  const [isSpending, setIsSpending] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();

  if (!item) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast({
      title: "Copied to Clipboard",
      description: text,
    });
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSpend = (giftCardId: string) => {
    const amt = parseFloat(spendAmount);
    if (isNaN(amt) || amt <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid dollar amount to spend.",
        variant: "destructive",
      });
      return;
    }
    const success = RewardsStore.spendGiftCard(giftCardId, amt);
    if (success) {
      toast({
        title: "Balance Deducted",
        description: `Successfully logged $${amt.toFixed(2)} purchase.`,
      });
      setSpendAmount("");
      setIsSpending(false);
      onItemUpdated?.();
      onClose();
    } else {
      toast({
        title: "Insufficient Balance",
        description: "Spend amount exceeds available gift card balance.",
        variant: "destructive",
      });
    }
  };

  const handleSync = async (programId: string, name: string) => {
    setIsSyncing(true);
    toast({
      title: "Syncing Account",
      description: `Checking updated balance for ${name}...`,
    });
    await RewardsStore.syncProgram(programId);
    setIsSyncing(false);
    toast({
      title: "Sync Complete",
      description: `${name} balance is up to date.`,
    });
    onItemUpdated?.();
  };

  const handleDeleteWarranty = (warrantyId: string, name: string) => {
    RewardsStore.deleteWarranty(warrantyId);
    toast({
      title: "Warranty Removed",
      description: `${name} has been removed from this demo wallet.`,
    });
    onItemUpdated?.();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="sm:max-w-md w-full overflow-y-auto bg-card border-l border-border/80 p-6 space-y-6">
        {/* Header with authentic brand logo */}
        <SheetHeader className="text-left space-y-3 pb-4 border-b border-border/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-background border border-border/80 flex items-center justify-center p-2.5 shadow-none ring-1 ring-border/50">
                <BrandIcon
                  name={
                    item.type === "reward"
                      ? item.data.name
                      : item.type === "giftcard"
                        ? item.data.brand
                        : item.data.brand
                  }
                  code={
                    item.type === "reward"
                      ? item.data.logoCode
                      : item.type === "giftcard"
                        ? item.data.logoCode
                        : item.data.brand.slice(0, 2)
                  }
                  className="w-full h-full"
                />
              </div>
              <div>
                <SheetTitle className="text-lg font-semibold tracking-tight text-foreground">
                  {item.type === "reward" && item.data.name}
                  {item.type === "giftcard" && item.data.name}
                  {item.type === "warranty" && item.data.productName}
                </SheetTitle>
                <SheetDescription className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium mt-0.5">
                  {item.type === "reward" && (
                    <span>
                      {item.data.category} • {item.data.tier}
                    </span>
                  )}
                  {item.type === "giftcard" && (
                    <span>Digital Gift Card • {item.data.brand}</span>
                  )}
                  {item.type === "warranty" && (
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {item.data.coverageType}
                    </span>
                  )}
                </SheetDescription>
              </div>
            </div>

            {/* Expiration urgency pill */}
            {item.type === "reward" && item.data.expiresDays < 60 && (
              <Badge
                variant={item.data.expiresDays <= 7 ? "destructive" : "outline"}
                className={`text-2xs font-medium px-2 py-0.5 ${
                  item.data.expiresDays <= 7
                    ? "bg-rose-500 text-white"
                    : "text-amber-600 dark:text-amber-400 border-amber-500/40 bg-amber-500/10"
                }`}
              >
                <Clock className="w-3 h-3 mr-1" />
                {item.data.expiresIn}
              </Badge>
            )}

            {item.type === "warranty" && (
              <Badge
                variant={item.data.expiresDays <= 30 ? "outline" : "secondary"}
                className={`text-2xs font-medium px-2 py-0.5 ${
                  item.data.expiresDays <= 30
                    ? "text-amber-600 dark:text-amber-400 border-amber-500/40 bg-amber-500/10"
                    : ""
                }`}
              >
                {item.data.expiresDays} days left
              </Badge>
            )}
          </div>
        </SheetHeader>

        {/* ========================================================================= */}
        {/* REWARD PROGRAM DETAIL */}
        {/* ========================================================================= */}
        {item.type === "reward" && (
          <div className="space-y-6">
            {/* Primary Value Card */}
            <div className="p-4 rounded-lg bg-secondary/40 border border-border/60 flex items-center justify-between">
              <div>
                <span className="text-2xs text-muted-foreground uppercase tracking-wider font-semibold block">
                  Current Balance
                </span>
                <div className="text-2xl font-semibold text-foreground tracking-tight mt-0.5">
                  {item.data.points.toLocaleString()}{" "}
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.data.pointsName}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xs text-muted-foreground uppercase tracking-wider font-semibold block">
                  Estimated Cash Value
                </span>
                <span className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                  ${item.data.valueUsd.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Clean Barcode / Scan Box for food or store checkout */}
            {item.data.barcode && (
              <div className="p-4 rounded-lg bg-white text-black border border-slate-200 shadow-none text-center space-y-2">
                <span className="text-2xs font-medium uppercase tracking-widest text-slate-500 block">
                  Sample reward barcode · Demo only
                </span>
                <div className="flex items-center gap-[2px] h-12 w-full justify-center px-4">
                  {[
                    2, 1, 3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1,
                    4, 1, 2, 1, 3, 2, 1, 3, 2, 1,
                  ].map((w, i) => (
                    <div
                      key={i}
                      className="bg-black h-full"
                      style={{ width: `${w * 1.8}px` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium tracking-widest text-slate-800">
                  <span>{item.data.barcode}</span>
                  <button
                    onClick={() => handleCopy(item.data.barcode!, "barcode")}
                    className="p-1 rounded hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
                    title="Copy code"
                  >
                    {copiedKey === "barcode" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Program Notes / Active Perks */}
            {item.data.notes && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                <span className="font-medium text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ready to Claim / Active Perk
                </span>
                <p className="text-foreground/90 font-medium leading-relaxed">
                  {item.data.notes}
                </p>
              </div>
            )}

            {/* Sync & Account Meta */}
            <div className="space-y-2 pt-2 border-t border-border/60 text-xs">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Account Number</span>
                <span className="font-mono font-semibold text-foreground">
                  {item.data.accountNumberMask}
                </span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Last Synchronized</span>
                <span className="font-medium text-foreground">
                  {item.data.lastSynced}
                </span>
              </div>
            </div>

            <Button
              onClick={() => handleSync(item.data.id, item.data.name)}
              disabled={isSyncing}
              variant="outline"
              className="w-full text-xs font-medium h-10 border-border/80"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 mr-2 ${isSyncing ? "animate-spin" : ""}`}
              />
              {isSyncing ? "Syncing..." : "Refresh sample balance"}
            </Button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* GIFT CARD DETAIL */}
        {/* ========================================================================= */}
        {item.type === "giftcard" && (
          <div className="space-y-6">
            {/* Balance Card */}
            <div className="p-4 rounded-lg bg-secondary/40 border border-border/60 flex items-center justify-between">
              <div>
                <span className="text-2xs text-muted-foreground uppercase tracking-wider font-semibold block">
                  Available Balance
                </span>
                <div className="text-3xl font-semibold text-foreground tracking-tight mt-0.5">
                  ${item.data.balance.toFixed(2)}
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xs text-muted-foreground uppercase tracking-wider font-semibold block">
                  Original
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  ${item.data.originalBalance.toFixed(2)}
                </span>
              </div>
            </div>

            {/* High Contrast Barcode for In-Store Cashier */}
            <div className="p-4 rounded-lg bg-white text-black border border-slate-200 shadow-none text-center space-y-2">
              <span className="text-2xs font-medium uppercase tracking-widest text-slate-500 block">
                Sample barcode · Demo only
              </span>
              <div className="flex items-center gap-[2px] h-12 w-full justify-center px-4">
                {[
                  2, 1, 3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3, 2, 1, 2, 3, 1, 4,
                  1, 2, 1, 3, 2, 1, 3, 2, 1,
                ].map((w, i) => (
                  <div
                    key={i}
                    className="bg-black h-full"
                    style={{ width: `${w * 1.8}px` }}
                  />
                ))}
              </div>
              <div className="text-xs font-mono font-medium tracking-widest text-slate-800">
                {item.data.barcode}
              </div>
            </div>

            {/* Card Number & PIN Box */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Card Number</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-medium text-foreground">
                    {item.data.cardNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(item.data.cardNumber, "cardnum")}
                    className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                    title="Copy card number"
                  >
                    {copiedKey === "cardnum" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/40">
                <span className="text-muted-foreground">Security PIN</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-medium text-foreground">
                    {item.data.pin}
                  </span>
                  <button
                    onClick={() => handleCopy(item.data.pin, "pin")}
                    className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                    title="Copy PIN"
                  >
                    {copiedKey === "pin" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Deduct / Spend Action */}
            {!isSpending ? (
              <Button
                onClick={() => setIsSpending(true)}
                variant="outline"
                className="w-full text-xs font-medium h-10 border-border/80 flex items-center justify-center gap-1.5"
              >
                <Receipt className="w-3.5 h-3.5" />
                Log a sample purchase
              </Button>
            ) : (
              <div className="p-3 rounded-xl bg-secondary/40 border border-border/60 space-y-2">
                <label className="text-xs font-semibold text-foreground block">
                  Amount Spent ($)
                </label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 15.50"
                    value={spendAmount}
                    onChange={(e) => setSpendAmount(e.target.value)}
                    className="h-9 text-xs"
                  />
                  <Button
                    size="sm"
                    onClick={() => handleSpend(item.data.id)}
                    className="h-9 px-4 font-medium text-xs"
                  >
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsSpending(false)}
                    className="h-9 text-xs text-muted-foreground"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* WARRANTY DETAIL */}
        {/* ========================================================================= */}
        {item.type === "warranty" && (
          <div className="space-y-6">
            {/* Status Card */}
            <div className="p-4 rounded-lg bg-secondary/40 border border-border/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-2xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Coverage Status
                </span>
                <Badge
                  className={`text-2xs font-medium ${
                    item.data.expiresDays <= 30
                      ? "bg-amber-500 text-white"
                      : "bg-emerald-600 text-white"
                  }`}
                >
                  {item.data.expiresDays <= 30
                    ? "Expiring Soon"
                    : "Active Protection"}
                </Badge>
              </div>
              <div className="text-xl font-semibold text-foreground">
                {item.data.expiresDays} Days of Coverage Remaining
              </div>
              <p className="text-xs text-muted-foreground">
                Valid until{" "}
                <span className="font-semibold text-foreground">
                  {item.data.expirationDate}
                </span>{" "}
                (Purchased {item.data.purchaseDate})
              </p>
            </div>

            {/* Serial Number & Device Meta */}
            {item.data.serialNumber && (
              <div className="p-4 rounded-xl bg-secondary/30 border border-border/60 space-y-2 text-xs">
                <span className="text-muted-foreground block font-semibold uppercase text-2xs">
                  Registered Serial Number
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-foreground">
                    {item.data.serialNumber}
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(item.data.serialNumber!, "serial")
                    }
                    className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                    title="Copy serial"
                  >
                    {copiedKey === "serial" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Coverage Notes & Claim Instructions */}
            {item.data.notes && (
              <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/60 text-xs space-y-1">
                <span className="font-medium text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Coverage Terms & Protection Scope
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {item.data.notes}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-border/60">
              {item.data.claimUrl && (
                <a
                  href={item.data.claimUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full text-xs font-medium h-10 gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    File Claim / Official Support
                  </Button>
                </a>
              )}

              <Button
                variant="ghost"
                onClick={() =>
                  handleDeleteWarranty(item.data.id, item.data.productName)
                }
                className="w-full text-xs font-semibold text-muted-foreground hover:text-destructive h-9"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                Archive / Delete Warranty
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ItemDetailSheet;
