import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-amka-bg text-amka-text font-sans selection:bg-amka-cyan selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Announcements />
      <Footer />
    </div>
  );
}