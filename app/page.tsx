import Navbar from './components/Navbar';
import HeroSection from './components/Home';
import About from './components/About';
import WorkGallery from './components/WorkGallery';
import ContactLocation from './components/ContactLocation';
import Feedback from './components/handleFeedback'; // Naam Capital 'F' rakha hai
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* 1. Top Navigation */}
      <Navbar /> 
      
      {/* 2. Hero Section */}
      <HeroSection /> 
      
      {/* 3. About / Legacy Section */}
      <About />
      
      {/* 4. Services Section */}
      <WorkGallery />
      
      {/* 5. Contact & Map */}
      <ContactLocation />
      
      {/* 6. Feedback Section (Ab Capital F ke sath) */}
      <Feedback />
      
      {/* 7. Footer */}
      <Footer />
    </main>
  );
}