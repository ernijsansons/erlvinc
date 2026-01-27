import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import OperationalThesis from "./components/OperationalThesisV2";
import PrivatePortfolio from "./components/PrivatePortfolio";
import FinancialGovernance from "./components/FinancialGovernance";
import Footer from "./components/Footer";
import TelemetryBanner from "./components/TelemetryBannerV2";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TelemetryBanner />
      <Navigation />
      <Hero />
      <OperationalThesis />
      <PrivatePortfolio />
      <FinancialGovernance />
      <Footer />
    </main>
  );
}
