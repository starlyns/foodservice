import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { SampleCampaign } from './components/SampleCampaign';
import { IndustryUnderstanding } from './components/IndustryUnderstanding';
import { Results } from './components/Results';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <SampleCampaign />
        <IndustryUnderstanding />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
