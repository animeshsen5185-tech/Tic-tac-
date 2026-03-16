import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Wind,
  BookOpen,
  Map,
  Mic2,
  History,
  Globe,
  ChevronRight,
  User,
  Zap,
  Library
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('hi'); // 'hi' or 'en'
  const [scrolled, setScrolled] = useState(false);
  const [isMeditating, setIsMeditating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    hi: {
      title: 'शृङ्गी ऋषि वाणी',
      subtitle: 'अनंत की गूँज: सुषुप्ति अवस्था के दिव्य प्रवचन',
      heroCta: 'दर्शन में उतरें',
      phenomenon: 'सुषुप्ति घटना',
      phenomenonDesc:
        'ब्रह्मर्षि कृष्णदत्त जी महाराज (शृङ्गी ऋषि) द्वारा गहरी योग-निद्रा में दिए गए वेदों के वे रहस्य, जो आधुनिक विज्ञान के लिए आज भी एक चुनौती हैं।',
      philosophyTitle: 'धर्म का दर्शन',
      gauTitle: 'गौ के ५ रहस्यमयी अर्थ',
      nationTitle: 'शरीर एक राष्ट्र',
      nationDesc: 'यदि मानव अपने शरीर रूपी राष्ट्र पर शासन कर लेता है, तो वह संसार पर शासन कर सकता है।',
      explore: 'अन्वेषण करें'
    },
    en: {
      title: 'Shringi Rishi Vani',
      subtitle: 'Echoes of the Eternal: Discourses from Deep Yogic Sleep',
      heroCta: 'Enter the Vision',
      phenomenon: 'The Phenomenon',
      phenomenonDesc:
        'Vedic mysteries revealed by Brahmarshi Krishna Dutta Ji in a state of Sushupti (deep sleep), presenting a profound challenge to modern material science.',
      philosophyTitle: 'Philosophy of Dharma',
      gauTitle: "The 5 Mystical Meanings of 'Gau'",
      nationTitle: 'The Body as a Nation',
      nationDesc: 'If a human rules over the nation of their own body, they can rule the entire world.',
      explore: 'Explore the Archives'
    }
  };

  const t = content[language];

  const GauCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-orange-400 transition-all duration-300 group">
      <Icon className="w-10 h-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );

  return (
    <div
      className={`min-h-screen bg-[#1a1a1a] text-white selection:bg-orange-500 transition-all duration-1000 ${
        isMeditating ? 'grayscale-0' : 'grayscale-[0.3]'
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
          scrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
            ॐ
          </div>
          <span className="text-xl font-serif tracking-widest hidden md:block">{t.title}</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`hover:text-orange-400 ${activeTab === 'home' ? 'text-orange-400' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`hover:text-orange-400 ${activeTab === 'philosophy' ? 'text-orange-400' : ''}`}
            >
              Dharma
            </button>
            <button onClick={() => setActiveTab('archives')} className="hover:text-orange-400">
              Archives
            </button>
          </div>

          <button
            onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
            className="flex items-center space-x-1 px-3 py-1 border border-white/20 rounded-full text-xs hover:bg-white/10 transition-colors"
          >
            <Globe size={14} />
            <span>{language === 'hi' ? 'ENGLISH' : 'हिन्दी'}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <main>
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a] z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 blur-[120px] rounded-full animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight">{t.title}</h1>
              <p className="text-xl md:text-2xl text-orange-200/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">{t.subtitle}</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setIsMeditating(true);
                    setTimeout(() => setActiveTab('philosophy'), 1000);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                  {t.heroCta}
                </button>
                <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group">
                  <Mic2 size={20} />
                  <span className="border-b border-transparent group-hover:border-white">Listen to Shringi Vani</span>
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-orange-400 rounded-full" />
              </div>
            </div>
          </section>

          {/* The Phenomenon Section */}
          <section className="py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-bold tracking-widest uppercase">
                  {t.phenomenon}
                </div>
                <h2 className="text-4xl font-serif font-bold leading-tight italic">
                  "विज्ञान के लिए चुनौती" <br />
                  <span className="text-orange-400 text-3xl">- Ushakaal Archives</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">{t.phenomenonDesc}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <Zap className="text-orange-500 mb-2" />
                    <h4 className="font-bold">45 Min Discourses</h4>
                    <p className="text-xs text-gray-500 uppercase">Per Session</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <History className="text-orange-500 mb-2" />
                    <h4 className="font-bold">Sushupti State</h4>
                    <p className="text-xs text-gray-500 uppercase">Deep Sleep Consciousness</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl group-hover:bg-orange-500/30 transition-all" />
                <div className="relative bg-white/5 aspect-video rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-8 text-center">
                  <div>
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Mic2 size={32} />
                    </div>
                    <p className="italic text-gray-300">"The voice of a child, revealing the science of the cosmic creator..."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Philosophy Section (Dharma) */}
      {activeTab === 'philosophy' && (
        <section className="pt-32 pb-24 container mx-auto px-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold mb-4">{t.philosophyTitle}</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="mb-24">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-3 bg-orange-500 rounded-lg">
                <Library />
              </div>
              <h3 className="text-3xl font-bold">{t.gauTitle}</h3>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <GauCard icon={Sun} title={language === 'hi' ? 'सूर्य किरणें' : 'Sun Rays'} desc="Energy that sustains the cosmic cycle." />
              <GauCard icon={Moon} title={language === 'hi' ? 'चंद्रमा की कांति' : 'Moon Luster'} desc="The cooling brilliance of the lunar realm." />
              <GauCard icon={Wind} title={language === 'hi' ? 'इंद्रियां' : 'The Senses'} desc="The gateways of consciousness in the physical body." />
              <GauCard icon={Map} title={language === 'hi' ? 'पृथ्वी' : 'The Earth'} desc="The physical world to be nurtured like a mother." />
              <GauCard icon={User} title={language === 'hi' ? 'पशु (गाय)' : 'The Living Beings'} desc="Symbols of compassion and life-giving energy." />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 shadow-3xl">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-serif font-bold mb-6">{t.nationTitle}</h3>
              <p className="text-xl text-white/90 italic leading-relaxed mb-8">"{t.nationDesc}"</p>
              <button className="bg-white text-orange-700 px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-gray-100 transition-colors">
                <span>Read Full Discourse</span>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 opacity-80">
              <div className="border border-white/30 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold mb-1">अतीत</p>
                <p className="text-xs uppercase">The Past</p>
              </div>
              <div className="border border-white/30 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold mb-1">दर्शन</p>
                <p className="text-xs uppercase">Philosophy</p>
              </div>
              <div className="border border-white/30 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold mb-1">विज्ञान</p>
                <p className="text-xs uppercase">Science</p>
              </div>
              <div className="border border-white/30 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold mb-1">क्रांति</p>
                <p className="text-xs uppercase">Revolution</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Global Footer */}
      <footer className="border-t border-white/10 py-12 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Ishwar Ashram Trust | Shringi Vani Archives</p>
          <div className="flex space-x-8 mt-4 md:mt-0 uppercase tracking-widest font-bold text-xs">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Samiti
            </a>
            <a href="#" className="hover:text-white">
              Vedic Research
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
