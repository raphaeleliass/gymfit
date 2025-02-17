import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Classes } from "./components/sections/Classes";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Plans } from "./components/sections/Plans";
import { Testimonials } from "./components/sections/Testimonials";

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Plans />
        <Classes />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
