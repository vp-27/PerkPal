import { FormEvent, useEffect, useState } from "react";
import { Download, RefreshCw, Save, Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { DEMO_PERSONAS, RewardsStore } from "@/lib/rewardsData";

const defaultNotifications = {
  early: true,
  soon: true,
  lastCall: true,
  weekly: false,
};
export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Alex Mercer",
    email: "alex.mercer@perkpal.com",
  });
  const [notifications, setNotifications] = useState(defaultNotifications);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("perkpal_user") || "null");
      if (user) setProfile({ name: user.name || "", email: user.email || "" });
      const saved = JSON.parse(
        localStorage.getItem("perkpal_settings") || "null",
      );
      if (saved?.notifications)
        setNotifications({ ...defaultNotifications, ...saved.notifications });
    } catch {
      /* Keep demo defaults for invalid local data. */
    }
  }, []);
  const saveProfile = (event: FormEvent) => {
    event.preventDefault();
    let stored = DEMO_PERSONAS.alex;
    try {
      stored =
        JSON.parse(localStorage.getItem("perkpal_user") || "null") ||
        DEMO_PERSONAS.alex;
    } catch {
      /* Fall back to the sample profile. */
    }
    localStorage.setItem(
      "perkpal_user",
      JSON.stringify({ ...stored, ...profile }),
    );
    window.dispatchEvent(new Event("perkpal_auth_change"));
    toast({
      title: "Looking good.",
      description: "Your profile has been saved on this device.",
    });
  };
  const toggle = (key: keyof typeof defaultNotifications, checked: boolean) => {
    const next = { ...notifications, [key]: checked };
    setNotifications(next);
    localStorage.setItem(
      "perkpal_settings",
      JSON.stringify({ notifications: next }),
    );
  };
  const exportData = (format: "json" | "csv") => {
    const programs = RewardsStore.getPrograms();
    const csvCell = (value: unknown) =>
      `"${String(value).replace(/"/g, '""')}"`;
    const content =
      format === "json"
        ? JSON.stringify(
            {
              profile,
              programs,
              giftCards: RewardsStore.getGiftCards(),
              warranties: RewardsStore.getWarranties(),
              transactions: RewardsStore.getTransactions(),
              preferences: notifications,
            },
            null,
            2,
          )
        : [
            [
              "Program",
              "Category",
              "Points",
              "Estimated value (USD)",
              "Expiration",
            ],
            ...programs.map((p) => [
              p.name,
              p.category,
              p.points,
              p.valueUsd,
              p.expiresIn,
            ]),
          ]
            .map((row) => row.map(csvCell).join(","))
            .join("\n");
    const url = URL.createObjectURL(
      new Blob([content], {
        type:
          format === "json" ? "application/json" : "text/csv;charset=utf-8;",
      }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `perkpal-wallet.${format}`;
    anchor.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Export complete",
      description: `Your ${format.toUpperCase()} file has been downloaded.`,
    });
  };
  return (
    <AppLayout>
      <div className="page-transition">
        <div className="page-heading">
          <div>
            <span className="eyebrow">MAKE YOURSELF AT HOME</span>
            <h1>Settings & preferences</h1>
            <p>Your profile, your preferences, your wallet data.</p>
          </div>
        </div>
        <div className="settings-grid">
          <div className="settings-stack">
            <section className="settings-panel">
              <h2>Profile details</h2>
              <p>The details that make this space yours.</p>
              <form onSubmit={saveProfile} className="space-y-5">
                <div>
                  <label htmlFor="profile-name" className="field-label">
                    Your name
                  </label>
                  <Input
                    id="profile-name"
                    value={profile.name}
                    required
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="profile-email" className="field-label">
                    Email address
                  </label>
                  <Input
                    id="profile-email"
                    type="email"
                    value={profile.email}
                    required
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                </div>
                <Button type="submit">
                  <Save size={14} />
                  Save changes
                </Button>
              </form>
            </section>
            <section className="settings-panel">
              <h2>Reminder preferences</h2>
              <p>
                Save your reminder preferences. Email and push delivery are not
                enabled in this demo.
              </p>
              {[
                {
                  key: "early" as const,
                  title: "A month before",
                  text: "A comfortable heads-up, 30 days out.",
                },
                {
                  key: "soon" as const,
                  title: "Two weeks to go",
                  text: "Time to make a plan for expiring extras.",
                },
                {
                  key: "lastCall" as const,
                  title: "The final week",
                  text: "A final reminder before expiration.",
                },
                {
                  key: "weekly" as const,
                  title: "Your weekly roundup",
                  text: "A quick look at what’s in your wallet.",
                },
              ].map(({ key, title, text }) => (
                <div className="setting-row" key={key}>
                  <div>
                    <strong id={`label-${key}`}>{title}</strong>
                    <p>{text}</p>
                  </div>
                  <Switch
                    aria-labelledby={`label-${key}`}
                    checked={notifications[key]}
                    onCheckedChange={(checked) => toggle(key, checked)}
                  />
                </div>
              ))}
            </section>
          </div>
          <div className="settings-stack">
            <section className="settings-panel">
              <h2>Set the mood</h2>
              <p>
                A light workspace, a darker one, or whatever your device
                prefers.
              </p>
              <div className="theme-options">
                {[
                  { key: "light", name: "Light", icon: Sun },
                  { key: "dark", name: "Dark", icon: Moon },
                  { key: "system", name: "System", icon: Laptop },
                ].map(({ key, name, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={theme === key ? "selected" : ""}
                    aria-pressed={theme === key}
                  >
                    <Icon size={19} />
                    {name}
                  </button>
                ))}
              </div>
            </section>
            <section className="settings-panel">
              <h2>Your data, in your hands</h2>
              <p>
                Take a copy of your wallet with you, or start fresh with the
                sample items.
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="outline" onClick={() => exportData("json")}>
                  <Download size={14} />
                  Export wallet (JSON)
                </Button>
                <Button variant="outline" onClick={() => exportData("csv")}>
                  <Download size={14} />
                  Export programs (CSV)
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    RewardsStore.resetAll();
                    toast({
                      title: "A fresh start.",
                      description:
                        "The sample rewards, gift cards, and warranties have been restored.",
                    });
                  }}
                >
                  <RefreshCw size={14} />
                  Reset sample wallet
                </Button>
              </div>
            </section>
            <div className="notice mb-0">
              <p>
                Everything in this demo stays in your browser. Use sample
                details rather than real account numbers or credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
