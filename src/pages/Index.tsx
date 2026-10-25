import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Coffee,
  Gift,
  Layers2,
  ShieldCheck,
  Bell,
  Wallet,
  Link2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Pal from "@/components/common/Pal";
import { BrandIcon } from "@/components/common/BrandLogos";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function WalletPreview() {
  return (
    <div className="wallet-scene">
      <div className="wallet-preview">
        <div className="preview-top">
          <span>
            <Layers2 size={18} /> Your everyday wallet
          </span>
          <span className="preview-live">
            <span />
            All together
          </span>
        </div>
        <div className="preview-balance">
          <span>GOOD THINGS, WAITING FOR YOU</span>
          <div>
            $149<span>.50</span>
            <ArrowUpRight size={25} />
          </div>
          <p>In gift cards & everyday rewards</p>
        </div>
        <div className="preview-tabs">
          <span className="active">
            All items <small>8</small>
          </span>
          <span>Rewards</span>
          <span>Gift cards</span>
          <span>Warranties</span>
        </div>
        <div className="preview-items">
          <div className="preview-item">
            <span className="mini-brand">
              <BrandIcon name="Starbucks" />
            </span>
            <div>
              <strong>Starbucks</strong>
              <span>Your next coffee is calling</span>
            </div>
            <b>
              420 <small>stars</small>
            </b>
          </div>
          <div className="preview-item">
            <span className="mini-brand">
              <BrandIcon name="Domino’s" />
            </span>
            <div>
              <strong>Domino’s</strong>
              <span>A pizza night on your points</span>
            </div>
            <b>
              60 <small>points</small>
            </b>
          </div>
          <div className="preview-item">
            <span className="mini-brand">
              <BrandIcon name="Amazon" />
            </span>
            <div>
              <strong>Amazon gift card</strong>
              <span>Ready whenever you are</span>
            </div>
            <b>
              $65<small>.00</small>
            </b>
          </div>
        </div>
        <div className="preview-reminder expiry-critical">
          <span>
            <Bell size={17} />
          </span>
          <div>
            <strong>A little heads-up</strong>
            <p>Your Domino’s reward expires in 3 days.</p>
          </div>
          <ChevronRight size={16} />
        </div>
        <Link to="/dashboard" className="preview-link">
          Take a look inside <ArrowRight size={15} />
        </Link>
      </div>
      <div className="hero-pal">
        <Pal priority />
        <span>
          Meet Pal.<small>Your perks have a friend.</small>
        </span>
      </div>
      <div className="scene-footnote">
        <ShieldCheck size={15} /> Less searching. More enjoying.
      </div>
      <span className="scene-scribble" aria-hidden="true">
        the perks of having it together ↗
      </span>
    </div>
  );
}

export default function Index() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <section className="hero-section">
          <div className="site-width hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> A LITTLE MORE FROM YOUR EVERYDAY
              </div>
              <h1>
                All your perks.
                <br />
                One happy
                <br />
                <em>little place.</em>
              </h1>
              <p>
                The free coffee. The gift card you forgot. The warranty you
                might need. Keep your everyday extras together, and make the
                most of what’s already yours.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <Link to="/dashboard">
                    Meet your new wallet <ArrowUpRight size={18} />
                  </Link>
                </Button>
                <a href="#how-it-works">
                  See how it works <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-reassurance">
                <span>
                  <Check size={14} /> No credit card
                </span>
                <span>
                  <Check size={14} /> No app juggling
                </span>
                <span>
                  <Check size={14} /> Just more perks
                </span>
              </div>
            </div>
            <WalletPreview />
          </div>
        </section>
        <section className="brand-strip">
          <div className="site-width">
            <p>FOR THE PLACES ALREADY IN YOUR ROUTINE</p>
            <div className="brand-wordmarks">
              {[
                "Starbucks",
                "Domino’s",
                "Taco Bell",
                "Target",
                "Amazon",
                "Apple",
              ].map((name) => (
                <div className="brand-strip-item" key={name}>
                  <BrandIcon name={name} className="brand-strip-logo" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <small>
              Illustrative brands in our demo. No affiliation or partnership
              implied.
            </small>
          </div>
        </section>
        <section id="features" className="feature-section section-space">
          <div className="site-width">
            <div className="section-heading">
              <div>
                <span className="eyebrow">LESS SCATTER. MORE VALUE.</span>
                <h2>
                  Life comes with extras.
                  <br />
                  Let’s keep track of them.
                </h2>
              </div>
              <p>
                Different places, different logins, different expiration dates.
                Finally, one place to see the whole picture.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-panel rewards-panel">
                <div className="feature-art reward-art">
                  <div className="reward-ticket">
                    <Coffee size={27} />
                    <span>THE NEXT ONE’S ON YOU</span>
                    <strong>One free coffee.</strong>
                    <small>A very good use of 200 stars.</small>
                    <div className="ticket-rule" />
                    <span className="ticket-bottom">
                      A LITTLE EVERYDAY WIN <Check size={17} />
                    </span>
                  </div>
                </div>
                <span className="feature-number">01 / REWARDS</span>
                <h3>Your favorites. More rewarding.</h3>
                <p>
                  Coffee runs, taco stops, pizza nights. See your points and
                  available rewards without the app hopping.
                </p>
              </article>
              <article className="feature-panel gift-panel">
                <div className="feature-art gift-art">
                  <div className="sample-gift">
                    <div>
                      <Gift size={22} />
                      <span>A LITTLE SOMETHING</span>
                    </div>
                    <strong>$50.00</strong>
                    <div>
                      <span>GIFT CARD BALANCE</span>
                      <span>•••• 2084</span>
                    </div>
                  </div>
                </div>
                <span className="feature-number">02 / GIFT CARDS</span>
                <h3>Good gifts deserve to get used.</h3>
                <p>
                  Give forgotten balances a home. Keep your cards and their
                  details close for your next checkout.
                </p>
              </article>
              <article className="feature-panel warranty-panel">
                <div className="feature-art warranty-art">
                  <div className="coverage-preview">
                    <span className="coverage-icon">
                      <ShieldCheck size={29} />
                    </span>
                    <strong>A little peace of mind.</strong>
                    <span>Headphones · Manufacturer warranty</span>
                    <div>
                      <span className="coverage-dot" />
                      Coverage in one place
                      <Check size={14} />
                    </div>
                  </div>
                </div>
                <span className="feature-number">03 / WARRANTIES</span>
                <h3>Keep the coverage. Lose the clutter.</h3>
                <p>
                  Store product details and warranty dates together. Find what
                  you need when something needs a fix.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="how-section section-space">
          <div className="site-width how-grid">
            <div>
              <span className="eyebrow">A SMALL HABIT. A NICE PAYOFF.</span>
              <h2>
                A little setup.
                <br />A lot less
                <br />
                <em>“where was that?”</em>
              </h2>
              <Button variant="outline" asChild>
                <Link to="/dashboard">
                  Give it a try <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>
            <div className="steps">
              {[
                {
                  icon: Link2,
                  title: "Bring your extras together",
                  text: "Add a rewards program, save a gift card, or keep a product warranty. Your wallet makes room for all three.",
                },
                {
                  icon: Wallet,
                  title: "See what’s yours at a glance",
                  text: "Balances, points, and coverage in one clear view. Search for what you need or browse by category.",
                },
                {
                  icon: Bell,
                  title: "Catch the good stuff in time",
                  text: "Check what’s expiring soon, pull up the details, and put those little extras to use.",
                },
              ].map(({ icon: Icon, title, text }, i) => (
                <div className="step" key={title}>
                  <span className="step-index">0{i + 1}</span>
                  <div>
                    <Icon size={22} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="faq-section section-space">
          <div className="site-width faq-grid">
            <div>
              <span className="eyebrow">GLAD YOU ASKED</span>
              <h2>
                A few little
                <br />
                questions.
              </h2>
              <p>
                Getting your perks together
                <br />
                should be the easy part.
              </p>
            </div>
            <Accordion type="single" collapsible className="faq-list">
              {[
                {
                  q: "What can I keep in PerkPal?",
                  a: "Rewards programs, gift card balances, and product warranties. The demo includes familiar dining and shopping brands, plus travel programs, so you can explore how a combined wallet feels.",
                },
                {
                  q: "Are the accounts connected to real brands?",
                  a: "This is an interactive student-built demo. Account connections, balances, and redemptions are simulated. We don’t connect to real brand accounts or move real rewards.",
                },
                {
                  q: "Do I need to create an account?",
                  a: "No. Open the demo to start exploring a sample wallet right away. Your changes are saved on this device, so you can come back to them in the same browser.",
                },
                {
                  q: "Where is my information saved?",
                  a: "Demo information is saved in your browser’s local storage. Please use sample information only. You can export your wallet or reset the sample data from Settings.",
                },
              ].map(({ q, a }, i) => (
                <AccordionItem value={`faq-${i}`} key={q}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionContent>{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="site-width">
          <div className="closing-cta">
            <span className="cta-symbol">
              <Layers2 size={34} />
            </span>
            <h2>
              There’s more in your everyday.
              <br />
              <em>Let’s find it.</em>
            </h2>
            <p>All the little things you’ve earned, finally together.</p>
            <Button asChild size="lg">
              <Link to="/dashboard">
                Explore your wallet <ArrowUpRight size={18} />
              </Link>
            </Button>
            <span className="cta-note">
              An interactive demo. A very real idea.
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
