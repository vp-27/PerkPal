import { Check, Layers2 } from "lucide-react";
import AuthForm from "@/components/auth/AuthForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function SignIn() {
  return (
    <div className="auth-page">
      <Navbar />
      <main className="auth-layout">
        <div className="auth-story">
          <Layers2 size={37} strokeWidth={1.5} />
          <h1>
            A little less
            <br />
            scattered.
            <br />
            <em>A lot more yours.</em>
          </h1>
          <p>
            The rewards you’ve earned, the gifts you’ve received, and a little
            peace of mind. Give them all a place to call home.
          </p>
          <ul>
            <li>
              <Check size={16} />
              Everyday rewards, together
            </li>
            <li>
              <Check size={16} />
              Gift cards, ready when you are
            </li>
            <li>
              <Check size={16} />
              Warranties, without the paper chase
            </li>
          </ul>
        </div>
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
}
