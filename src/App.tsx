/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, Croissant, Heart, IceCream, Instagram, Mail, Phone, Sparkles, X, Maximize2, Menu } from 'lucide-react';

const bgImageDesktop = "https://raw.githubusercontent.com/kidiee558/SledkieDuKawy-Podglad/main/unnamed%20(3).jpg";
const bgImageMobile = "https://raw.githubusercontent.com/kidiee558/SledkieDuKawy-Podglad/main/xD.jpg";

const galleryImages = Array.from({ length: 17 }, (_, i) => 
  `https://raw.githubusercontent.com/kidiee558/SledkieDuKawy-Podglad/main/1%20(${i + 1}).jpg`
);

const categories = [
  {
    id: "slodkie-stoly",
    title: "Słodkie stoły",
    desc: "Tworzymy niezapomniane, bajkowe aranżacje słodkości, które staną się sercem każdego przyjęcia. Dopracowane w najmniejszym detalu, idealnie dopasowane do motywu Twojej uroczystości.",
    icon: <Cake className="w-8 h-8" />,
    images: galleryImages.slice(0, 4), // 4 images
    bgColor: "bg-[#FFF0F5]", // Jasny pudrowy róż
  },
  {
    id: "torty",
    title: "Torty",
    desc: "Wyjątkowe torty na każdą okazję. Łączymy wyśmienity smak z artystycznym wykonaniem, aby uświetnić Twoje najważniejsze chwile. Prawdziwe dzieła sztuki cukierniczej.",
    icon: <Heart className="w-8 h-8" />,
    images: galleryImages.slice(4, 7), // 3 images
    bgColor: "bg-white",
  },
  {
    id: "swieze-wypieki",
    title: "Świeże Wypieki",
    desc: "Codziennie rano przygotowujemy dla Was pachnące ciasta, puszyste drożdżówki i chrupiące ciasteczka. Prawdziwy smak domowych, tradycyjnych wypieków z nutą nowoczesności.",
    icon: <Croissant className="w-8 h-8" />,
    images: galleryImages.slice(7, 11), // 4 images
    bgColor: "bg-[#FFF0F5]",
  },
  {
    id: "makaroniki",
    title: "Makaroniki",
    desc: "Nasza duma! Delikatne, chrupiące z zewnątrz i rozpływające się w ustach w środku. Dostępne w wielu wyjątkowych smakach i pięknych, pastelowych kolorach.",
    icon: <Sparkles className="w-8 h-8" />,
    images: galleryImages.slice(11, 14), // 3 images
    bgColor: "bg-white",
  },
  {
    id: "bankietowki",
    title: "Bankietówki",
    desc: "Eleganckie, miniaturowe desery w sam raz na jeden kęs. Doskonały wybór na eleganckie przyjęcia, wesela, chrzciny i eventy firmowe.",
    icon: <IceCream className="w-8 h-8" />,
    images: galleryImages.slice(14, 17), // 3 images
    bgColor: "bg-[#FFF0F5]",
  }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Słodkie stoły", id: "slodkie-stoly" },
    { name: "Torty", id: "torty" },
    { name: "Świeże Wypieki", id: "swieze-wypieki" },
    { name: "Makaroniki", id: "makaroniki" },
    { name: "Bankietówki", id: "bankietowki" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#5D4037] font-sans selection:bg-[#F8BBD0] selection:text-[#5D4037] overflow-x-hidden w-full relative">
      {/* Mobile Header */}
      <header className="fixed top-0 right-0 z-40 p-4 md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-[#D81B60]"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-30 bg-[#FFF0F5] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-serif text-[#D81B60]"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-2xl font-serif text-[#D81B60] border-t border-[#F8BBD0] pt-8"
            >
              Rezerwacje
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white p-2" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-full object-contain rounded-lg" referrerPolicy="no-referrer" />
        </div>
      )}
      
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: 'radial-gradient(#D81B60 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      {/* Hero Section */}
      <header className="relative h-[100svh] min-h-[500px] md:min-h-[600px] w-full flex flex-col items-center justify-end pb-20 md:pb-24 overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImageMobile} 
            alt="Słedkie du Kawy - Słodka Przyczepa (Mobile)" 
            className="w-full h-full object-cover object-center md:hidden"
            referrerPolicy="no-referrer"
          />
          <img 
            src={bgImageDesktop} 
            alt="Słedkie du Kawy - Słodka Przyczepa" 
            className="w-full h-full object-cover object-center hidden md:block"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex flex-col gap-4 items-center mb-16 md:mb-8">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm text-[#D81B60] px-8 py-4 md:px-8 md:py-3 rounded-full font-medium tracking-wider shadow-xl shadow-pink-900/10 hover:bg-white transition-colors text-base md:text-lg flex items-center gap-3 border border-pink-100"
            onClick={() => document.getElementById('slodkie-stoly')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="w-5 h-5 fill-current" />
            Odkryj nasze słodkości
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm text-[#D81B60] px-8 py-4 md:px-8 md:py-3 rounded-full font-medium tracking-wider shadow-xl shadow-pink-900/10 hover:bg-white transition-colors text-base md:text-lg flex items-center gap-3 border border-pink-100"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            💌 REZERWACJE
          </motion.button>
        </div>

        {/* Scrolling Marquee Banner */}
        <div className="absolute bottom-0 left-0 w-full bg-[#F8BBD0] text-[#D81B60] py-3 overflow-hidden flex z-20 shadow-lg border-y border-pink-200/50">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex whitespace-nowrap w-max"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4 shrink-0 font-medium tracking-widest text-sm md:text-base uppercase">
                <span>Słodkie Stoły</span>
                <Sparkles className="w-4 h-4" />
                <span>Torty Artystyczne</span>
                <Sparkles className="w-4 h-4" />
                <span>Słodka Przyczepa</span>
                <Sparkles className="w-4 h-4" />
                <span>Wypieki</span>
                <Sparkles className="w-4 h-4" />
                <span>Desery Bankietowe</span>
                <Sparkles className="w-4 h-4" />
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-[#FFF0F5] relative">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #D81B60, #D81B60 10px, transparent 10px, transparent 20px)'}}></div>
        <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-md p-8 md:p-16 rounded-[3rem] border border-white shadow-2xl shadow-pink-100/50 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#D81B60] italic">Manufaktura z duszą</h2>
          <p className="text-lg md:text-xl text-[#5D4037]/80 font-sans leading-relaxed mb-8 italic">
            Nasza pracownia to manufaktura rzemieślnicza, a nie masowa produkcja. 
            Co to oznacza w praktyce?
          </p>
          <ul className="text-left text-lg text-[#5D4037]/80 font-sans space-y-6">
            <li className="flex gap-4">
              <span className="text-[#D81B60] text-2xl">🌸</span>
              <span><strong>Skupienie na jakości:</strong> Każdy tort, deser czy boks słodkości przygotowujemy z najwyższą starannością.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#D81B60] text-2xl">🌸</span>
              <span><strong>Wasze ważne chwile:</strong> Weekendy w naszej pracowni są w całości poświęcone Waszym realizacjom – urodzinom, osiemnastkom i wyjątkowym zamówieniom tortowym.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#D81B60] text-2xl">🌸</span>
              <span><strong>Ręczna praca:</strong> Jako piekarnia rzemieślnicza mamy ograniczone moce przerobowe. Nie chcemy iść na kompromisy kosztem smaku czy wyglądu, dlatego nie prowadzimy masowej sprzedaży.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Scrolling Marquee Banner - Nasza Oferta */}
      <div className="w-full bg-[#F8BBD0] text-[#D81B60] py-3 overflow-hidden flex z-20 shadow-lg border-y border-pink-200/50">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap w-max"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 shrink-0 font-medium tracking-widest text-lg md:text-xl uppercase font-serif italic">
              <span>Nasza Oferta</span>
              <Sparkles className="w-5 h-5" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Categories Sections */}
      <main>
        {categories.map((cat, index) => (
          <section key={cat.id} id={cat.id} className={`py-24 px-4 ${cat.bgColor}`}>
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="flex-1 text-center lg:text-left w-full"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl shadow-pink-100/50 text-[#D81B60] mb-8 ${index % 2 === 1 ? 'lg:mx-0 mx-auto' : 'mx-auto lg:mx-0'}`}>
                    {cat.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#5D4037]">{cat.title}</h2>
                  <div className={`w-24 h-1 bg-[#F8BBD0] rounded-full mb-8 ${index % 2 === 1 ? 'lg:ml-auto mx-auto lg:mr-0' : 'mx-auto lg:mx-0'}`}></div>
                  <p className="text-lg md:text-xl text-[#5D4037]/80 font-sans leading-relaxed">
                    {cat.desc}
                  </p>
                </motion.div>

                {/* Images Grid */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cat.images.map((img, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className={`group relative overflow-hidden shadow-lg shadow-pink-900/10 hover:shadow-xl transition-all duration-500 bg-white border border-pink-50 flex items-center justify-center aspect-[4/3] cursor-pointer ${
                            imgIdx === 0 ? 'rounded-t-[3rem]' : 
                            imgIdx === cat.images.length - 1 ? 'rounded-b-[3rem]' : ''
                          }`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${cat.title} - zdjęcie ${imgIdx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-8 h-8 text-white" />
                          </div>
                        </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        ))}

        {/* Sweet Trailer Section */}
        <section className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#D81B60 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          <div className="w-full mx-auto text-center bg-[#FFF0F5] p-6 md:p-16 rounded-[3rem] shadow-inner shadow-pink-100 relative z-10 border border-pink-100">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#D81B60] italic">Nasza Słodka Przyczepa</h2>
            <p className="text-lg md:text-xl text-[#5D4037]/80 font-sans leading-relaxed mb-8 italic">
              Odwiedź nas i poczuj magię naszych słodkości na żywo! Nasza przyczepa to miejsce, gdzie zapach świeżych wypieków łączy się z uśmiechem i dobrą kawą.
            </p>
            <a 
              href="https://www.facebook.com/profile.php?id=61557536273245" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-pink-100/50 inline-block border border-pink-100 hover:bg-pink-50 transition-colors"
            >
              <p className="text-2xl font-serif text-[#5D4037] mb-2">📍 Gdzie?</p>
              <p className="text-xl text-[#D81B60] font-medium mb-4 italic">Nasza Słodka Przyczepa w Krobi, plac Targowy</p>
              <p className="text-lg text-[#D81B60] font-semibold underline">Sprawdź aktualności na Facebooku</p>
            </a>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="footer" className="bg-[#FFE4E1] text-[#5D4037] pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#FFF0F5] via-[#F8BBD0] to-[#FFF0F5]"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif mb-6 text-[#D81B60]">Zapraszam</h2>
              <p className="text-lg md:text-xl text-[#5D4037]/80 font-light max-w-2xl mx-auto">
                Masz pytania? Chcesz zamówić słodkości na swoje przyjęcie? <br className="hidden md:block" />
                Skontaktuj się ze mną, a z radością przygotuję coś wyjątkowego specjalnie dla Ciebie!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <motion.a 
                href="tel:+48000000000"
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-4 border border-white"
              >
                <div className="w-16 h-16 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#D81B60] mb-2">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#5D4037]">Zadzwoń</h3>
                <p className="text-[#D81B60] font-medium text-lg">+48 000 000 000</p>
                <p className="text-sm text-[#5D4037]/70 font-light">Odpowiem na wszystkie pytania</p>
              </motion.a>

              {/* Instagram */}
              <motion.a 
                href="#"
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-4 border border-white"
              >
                <div className="w-16 h-16 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#D81B60] mb-2">
                  <Instagram className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#5D4037]">Instagram</h3>
                <p className="text-[#D81B60] font-medium text-lg">@sledkiedukawy</p>
                <p className="text-sm text-[#5D4037]/70 font-light">Zobacz moje najnowsze realizacje</p>
              </motion.a>

              {/* Email */}
              <motion.a 
                href="mailto:kontakt@sledkiedukawy.pl"
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-4 border border-white"
              >
                <div className="w-16 h-16 bg-[#FFF0F5] rounded-full flex items-center justify-center text-[#D81B60] mb-2">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#5D4037]">Napisz</h3>
                <p className="text-[#D81B60] font-medium text-lg">kontakt@sledkiedukawy.pl</p>
                <p className="text-sm text-[#5D4037]/70 font-light">Wyślij zapytanie o ofertę</p>
              </motion.a>
            </div>

            <div className="w-full h-px bg-[#D81B60]/20 mb-8"></div>
            
            <p className="font-light text-sm opacity-80 text-center">
              &copy; {new Date().getFullYear()} Słedkie du Kawy Karina Konys. Wszelkie prawa zastrzeżone.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
