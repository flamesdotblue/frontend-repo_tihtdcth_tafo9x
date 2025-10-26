import Hero from './components/Hero';
import Services from './components/Services';
import ContentSections from './components/ContentSections';
import TestimonialsFAQ from './components/TestimonialsFAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ContentSections />
        <TestimonialsFAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-white text-lg">
          Instacertify
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Platform</a>
          <a href="#consult" className="hover:text-white">Consultation</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} Instacertify. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
