import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import { DEMO_PERSONAS } from "@/lib/rewardsData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const enterDemo = (key: "alex" | "sarah") => {
    localStorage.setItem("perkpal_user", JSON.stringify(DEMO_PERSONAS[key]));
    window.dispatchEvent(new Event("perkpal_auth_change"));
    navigate("/dashboard");
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email"));
    localStorage.setItem(
      "perkpal_user",
      JSON.stringify({
        ...DEMO_PERSONAS.alex,
        name: mode === "register" ? name : email.split("@")[0],
        email,
      }),
    );
    window.dispatchEvent(new Event("perkpal_auth_change"));
    navigate("/dashboard");
  };
  return (
    <div className="auth-form">
      <div className="eyebrow mb-4">YOUR EXTRAS ARE IN GOOD COMPANY</div>
      <h2>{mode === "login" ? "Welcome back." : "Make a little room."}</h2>
      <p>
        {mode === "login"
          ? "Come on in. Your little extras are waiting."
          : "A home for your everyday rewards starts here."}
      </p>
      <div
        className="filter-tabs mt-6"
        role="group"
        aria-label="Choose sign in or registration"
      >
        <button
          onClick={() => setMode("login")}
          className={mode === "login" ? "selected" : ""}
          aria-pressed={mode === "login"}
        >
          Sign in
        </button>
        <button
          onClick={() => setMode("register")}
          className={mode === "register" ? "selected" : ""}
          aria-pressed={mode === "register"}
        >
          Create a demo profile
        </button>
      </div>
      <form onSubmit={submit}>
        {mode === "register" && (
          <>
            <label htmlFor="auth-name" className="field-label">
              Your name
            </label>
            <Input
              id="auth-name"
              autoComplete="name"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Mercer"
            />
          </>
        )}
        <label htmlFor="auth-email" className="field-label">
          Email address
        </label>
        <Input
          id="auth-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
        <label htmlFor="auth-password" className="field-label">
          Demo password
        </label>
        <div className="relative">
          <Input
            id="auth-password"
            name="password"
            type={show ? "text" : "password"}
            autoComplete={
              mode === "register" ? "new-password" : "current-password"
            }
            minLength={6}
            required
            placeholder="At least 6 characters"
            className="pr-11"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-muted-foreground"
            onClick={() => setShow(!show)}
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <Button className="w-full mt-6" type="submit">
          {mode === "login" ? "Open your wallet" : "Create demo profile"}
          <ArrowUpRight size={16} />
        </Button>
        <p className="text-[10px] leading-relaxed text-muted-foreground mt-3">
          Prototype only. Your password is not saved or verified. Use sample
          details.
        </p>
      </form>
      <div className="auth-demo">
        <span>Just looking around? Skip the form.</span>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => enterDemo("alex")}>
            Explore as Alex
          </Button>
          <Button variant="outline" onClick={() => enterDemo("sarah")}>
            Explore as Sarah
          </Button>
        </div>
      </div>
    </div>
  );
}
