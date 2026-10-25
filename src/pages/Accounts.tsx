import { Info } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import AccountsSection from "@/components/dashboard/AccountsSection";

export default function Accounts() {
  return (
    <AppLayout>
      <div className="page-transition">
        <div className="page-heading">
          <div>
            <span className="eyebrow">ALL YOUR FAVORITES, A LITTLE CLOSER</span>
            <h1>Connected accounts</h1>
            <p>
              A home for the programs that make your everyday more rewarding.
            </p>
          </div>
        </div>
        <div className="notice">
          <Info size={17} />
          <p>
            Try connecting a sample program or refreshing a balance. Connections
            in this demo are simulated; no real accounts or credentials are
            used.
          </p>
        </div>
        <AccountsSection />
      </div>
    </AppLayout>
  );
}
