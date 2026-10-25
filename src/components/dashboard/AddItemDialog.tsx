import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Utensils, CreditCard, ShieldCheck } from "lucide-react";
import {
  RewardsStore,
  RewardProgram,
  GiftCard,
  WarrantyItem,
} from "@/lib/rewardsData";
import { useToast } from "@/hooks/use-toast";

interface AddItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onItemAdded?: () => void;
}

export const AddItemDialog: React.FC<AddItemDialogProps> = ({
  isOpen,
  onClose,
  onItemAdded,
}) => {
  const [activeTab, setActiveTab] = useState<
    "reward" | "giftcard" | "warranty"
  >("reward");

  // Reward Program Form
  const [progName, setProgName] = useState("");
  const [progCategory, setProgCategory] =
    useState<RewardProgram["category"]>("Dining & Coffee");
  const [progPoints, setProgPoints] = useState("");
  const [progNotes, setProgNotes] = useState("");

  // Gift Card Form
  const [gcBrand, setGcBrand] = useState("");
  const [gcBalance, setGcBalance] = useState("");
  const [gcCardNumber, setGcCardNumber] = useState("");
  const [gcPin, setGcPin] = useState("");

  // Warranty Form
  const [warProduct, setWarProduct] = useState("");
  const [warBrand, setWarBrand] = useState("");
  const [warCategory, setWarCategory] =
    useState<WarrantyItem["category"]>("Electronics");
  const [warCoverage, setWarCoverage] = useState<WarrantyItem["coverageType"]>(
    "Manufacturer Warranty",
  );
  const [warExpiresDays, setWarExpiresDays] = useState("365");
  const [warSerial, setWarSerial] = useState("");

  const { toast } = useToast();

  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!progName.trim()) {
      toast({ title: "Program name required", variant: "destructive" });
      return;
    }
    const pts = progPoints.trim() === "" ? 0 : Number(progPoints);
    if (!Number.isFinite(pts) || pts < 0) {
      toast({ title: "Enter a valid points balance", variant: "destructive" });
      return;
    }
    RewardsStore.addProgram({
      name: progName,
      category: progCategory,
      logoCode: progName.slice(0, 2).toUpperCase(),
      brandColor: "#10b981",
      badgeBg: "bg-emerald-600",
      points: pts,
      pointsName: "Points",
      centsPerPoint: 1.0,
      valueUsd: +(pts * 0.01).toFixed(2),
      expiresIn: "12 months",
      expiresDays: 365,
      isExpiringSoon: false,
      status: "connected",
      lastSynced: "Just now",
      accountNumberMask: `•••• ${Math.floor(1000 + Math.random() * 9000)}`,
      tier: "Standard Member",
      barcode: `${Math.floor(100000000000 + Math.random() * 900000000000)}`,
      notes: progNotes || undefined,
    });

    toast({
      title: "Program Connected",
      description: `${progName} added to your vault.`,
    });
    setProgName("");
    setProgPoints("");
    setProgNotes("");
    onItemAdded?.();
    onClose();
  };

  const handleAddGiftCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gcBrand.trim()) {
      toast({ title: "Brand name required", variant: "destructive" });
      return;
    }
    const bal = gcBalance.trim() === "" ? 0 : Number(gcBalance);
    if (!Number.isFinite(bal) || bal < 0) {
      toast({
        title: "Enter a valid gift card balance",
        variant: "destructive",
      });
      return;
    }
    const cardNum =
      gcCardNumber ||
      `${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`;
    const pin = gcPin || `${Math.floor(1000 + Math.random() * 9000)}`;

    RewardsStore.addGiftCard({
      name: `${gcBrand} Gift Card`,
      brand: gcBrand,
      logoCode: gcBrand.slice(0, 2).toUpperCase(),
      color: "#0284c7",
      balance: bal,
      originalBalance: bal,
      cardNumber: cardNum,
      pin: pin,
      barcode: `${Math.floor(100000000000 + Math.random() * 900000000000)}`,
      expiresIn: "Never",
      isExpiringSoon: false,
      lastUsed: "Ready for in-store checkout",
    });

    toast({
      title: "Gift Card Added",
      description: `$${bal.toFixed(2)} ${gcBrand} balance saved.`,
    });
    setGcBrand("");
    setGcBalance("");
    setGcCardNumber("");
    setGcPin("");
    onItemAdded?.();
    onClose();
  };

  const handleAddWarranty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!warProduct.trim() || !warBrand.trim()) {
      toast({ title: "Product and Brand required", variant: "destructive" });
      return;
    }
    const days = Number(warExpiresDays);
    if (!Number.isFinite(days) || days < 0) {
      toast({
        title: "Enter a valid number of coverage days",
        variant: "destructive",
      });
      return;
    }
    RewardsStore.addWarranty({
      productName: warProduct,
      brand: warBrand,
      category: warCategory,
      coverageType: warCoverage,
      purchaseDate: "Recently",
      expirationDate: `In ${days} days`,
      expiresDays: days,
      isExpiringSoon: days <= 30,
      serialNumber:
        warSerial || `SN-${Math.floor(10000 + Math.random() * 90000)}`,
      notes: `${warCoverage} active for ${warProduct}.`,
    });

    toast({
      title: "Warranty Tracked",
      description: `${warProduct} coverage added to Expiration Radar.`,
    });
    setWarProduct("");
    setWarBrand("");
    setWarSerial("");
    onItemAdded?.();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md w-full bg-background border border-border/80 p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold tracking-tight text-foreground">
            Add to your wallet
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Save a rewards program, gift card, or product warranty. Use sample
            details in this demo.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(v) =>
            setActiveTab(v as "reward" | "giftcard" | "warranty")
          }
          className="w-full mt-2"
        >
          <TabsList className="grid grid-cols-3 w-full h-9 bg-secondary/60">
            <TabsTrigger
              value="reward"
              className="text-xs font-semibold flex items-center gap-1"
            >
              <Utensils className="w-3 h-3" />
              Reward
            </TabsTrigger>
            <TabsTrigger
              value="giftcard"
              className="text-xs font-semibold flex items-center gap-1"
            >
              <CreditCard className="w-3 h-3" />
              Gift Card
            </TabsTrigger>
            <TabsTrigger
              value="warranty"
              className="text-xs font-semibold flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              Warranty
            </TabsTrigger>
          </TabsList>

          {/* Reward Tab */}
          <TabsContent value="reward" className="mt-4">
            <form onSubmit={handleAddReward} className="space-y-3">
              <div>
                <label
                  htmlFor="add-item-field-1"
                  className="text-xs font-semibold text-foreground block mb-1"
                >
                  Program Name
                </label>
                <Input
                  id="add-item-field-1"
                  placeholder="e.g. Panera Bread, Chipotle, Delta"
                  value={progName}
                  onChange={(e) => setProgName(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="add-item-field-2"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="add-item-field-2"
                    value={progCategory}
                    onChange={(e) =>
                      setProgCategory(
                        e.target.value as RewardProgram["category"],
                      )
                    }
                    className="w-full h-9 px-2.5 rounded-md border border-input bg-background text-xs font-medium"
                  >
                    <option value="Dining & Coffee">Dining & Coffee</option>
                    <option value="Retail">Retail</option>
                    <option value="Airlines">Airlines</option>
                    <option value="Credit Cards">Credit Cards</option>
                    <option value="Hotels">Hotels</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="add-item-field-3"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Points / Balance
                  </label>
                  <Input
                    id="add-item-field-3"
                    type="number"
                    placeholder="e.g. 500"
                    value={progPoints}
                    onChange={(e) => setProgPoints(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="add-item-field-4"
                  className="text-xs font-semibold text-foreground block mb-1"
                >
                  Active Perk / Notes (Optional)
                </label>
                <Input
                  id="add-item-field-4"
                  placeholder="e.g. Free pastry unlocked; expires soon"
                  value={progNotes}
                  onChange={(e) => setProgNotes(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <DialogFooter className="pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="h-9 text-xs"
                >
                  Cancel
                </Button>
                <Button type="submit" className="h-9 text-xs font-bold">
                  Add Program
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          {/* Gift Card Tab */}
          <TabsContent value="giftcard" className="mt-4">
            <form onSubmit={handleAddGiftCard} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="add-item-field-5"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Brand / Store
                  </label>
                  <Input
                    id="add-item-field-5"
                    placeholder="e.g. Target, Apple, Amazon"
                    value={gcBrand}
                    onChange={(e) => setGcBrand(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="add-item-field-6"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Balance ($)
                  </label>
                  <Input
                    id="add-item-field-6"
                    type="number"
                    step="0.01"
                    placeholder="e.g. 50.00"
                    value={gcBalance}
                    onChange={(e) => setGcBalance(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label
                    htmlFor="add-item-field-7"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Card Number (Optional)
                  </label>
                  <Input
                    id="add-item-field-7"
                    placeholder="6014 •••• •••• 1204"
                    value={gcCardNumber}
                    onChange={(e) => setGcCardNumber(e.target.value)}
                    className="h-9 text-xs font-mono"
                  />
                </div>
                <div>
                  <label
                    htmlFor="add-item-field-8"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    PIN (Opt.)
                  </label>
                  <Input
                    id="add-item-field-8"
                    placeholder="1234"
                    value={gcPin}
                    onChange={(e) => setGcPin(e.target.value)}
                    className="h-9 text-xs font-mono"
                  />
                </div>
              </div>

              <DialogFooter className="pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="h-9 text-xs"
                >
                  Cancel
                </Button>
                <Button type="submit" className="h-9 text-xs font-bold">
                  Save Gift Card
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          {/* Warranty Tab */}
          <TabsContent value="warranty" className="mt-4">
            <form onSubmit={handleAddWarranty} className="space-y-3">
              <div>
                <label
                  htmlFor="add-item-field-9"
                  className="text-xs font-semibold text-foreground block mb-1"
                >
                  Product Name
                </label>
                <Input
                  id="add-item-field-9"
                  placeholder="e.g. Sony WH-1000XM5, Dyson Vacuum"
                  value={warProduct}
                  onChange={(e) => setWarProduct(e.target.value)}
                  className="h-9 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="add-item-field-10"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Brand
                  </label>
                  <Input
                    id="add-item-field-10"
                    placeholder="e.g. Sony, Apple, Dyson"
                    value={warBrand}
                    onChange={(e) => setWarBrand(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="add-item-field-11"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Coverage Type
                  </label>
                  <select
                    id="add-item-field-11"
                    value={warCoverage}
                    onChange={(e) =>
                      setWarCoverage(
                        e.target.value as WarrantyItem["coverageType"],
                      )
                    }
                    className="w-full h-9 px-2.5 rounded-md border border-input bg-background text-xs font-medium"
                  >
                    <option value="Manufacturer Warranty">
                      Manufacturer Warranty
                    </option>
                    <option value="AppleCare+">AppleCare+</option>
                    <option value="Store Guarantee">Store Guarantee</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="add-item-field-12"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Days of Coverage
                  </label>
                  <Input
                    id="add-item-field-12"
                    type="number"
                    placeholder="e.g. 365"
                    value={warExpiresDays}
                    onChange={(e) => setWarExpiresDays(e.target.value)}
                    className="h-9 text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="add-item-field-13"
                    className="text-xs font-semibold text-foreground block mb-1"
                  >
                    Serial # (Optional)
                  </label>
                  <Input
                    id="add-item-field-13"
                    placeholder="SN-12345"
                    value={warSerial}
                    onChange={(e) => setWarSerial(e.target.value)}
                    className="h-9 text-xs font-mono"
                  />
                </div>
              </div>

              <DialogFooter className="pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="h-9 text-xs"
                >
                  Cancel
                </Button>
                <Button type="submit" className="h-9 text-xs font-bold">
                  Track Warranty
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemDialog;
