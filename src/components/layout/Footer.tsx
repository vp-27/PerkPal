import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Footer() {
  const [info, setInfo] = useState<"privacy" | "about" | null>(null);
  return (
    <>
      <footer className="site-footer">
        <div className="site-width">
          <div className="footer-top">
            <div>
              <Brand />
              <p>
                A little less scattered.
                <br />A lot more rewarding.
              </p>
            </div>
            <div className="footer-links">
              <Link to="/dashboard">Your wallet</Link>
              <a href="/#how-it-works">How it works</a>
              <a href="/#faq">FAQs</a>
              <button onClick={() => setInfo("about")}>
                About the project
              </button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} PerkPal. Made with everyday life in
              mind.
            </span>
            <span>
              A Rutgers student project{" "}
              <span className="footer-divider">/</span>{" "}
              <button onClick={() => setInfo("privacy")}>
                Privacy & demo data
              </button>
            </span>
          </div>
        </div>
      </footer>
      <Dialog open={!!info} onOpenChange={() => setInfo(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {info === "privacy"
                ? "Your data in this demo"
                : "A small idea. Everyday value."}
            </DialogTitle>
            <DialogDescription>
              {info === "privacy"
                ? "PerkPal is an interactive prototype. Sample accounts and any information you add are saved in this browser’s local storage. There are no live loyalty integrations or real transactions. Use sample information only. You can export or reset your wallet from Settings."
                : "PerkPal began as a demo for a Rutgers Shark Tank event: one place to keep track of the rewards, gift cards, and product warranties that get scattered across everyday life. Brand names are illustrative examples and do not imply a partnership."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
