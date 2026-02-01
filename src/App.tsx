import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Profile } from './components/sections/Profile';
import { About } from './components/sections/About';
import { Audience } from './components/sections/Audience';
import { CaseStudies } from './components/sections/CaseStudies';
import { Testimonials } from './components/sections/Testimonials';
import { Workflow } from './components/sections/Workflow';
import { Cooperation } from './components/sections/Cooperation';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <About />
        <Audience />
        <CaseStudies />
        <Testimonials />
        <Workflow />
        <Cooperation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
