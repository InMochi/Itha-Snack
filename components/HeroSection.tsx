import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-body font-semibold tracking-[0.3em] uppercase text-sm mb-4"
        >
          Premium Onion Chips
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-800 text-cream leading-tight mb-6"
        >
          Itha <span className="text-gradient-gold">Snack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-10 font-body"
        >
          Renyah, gurih, dan bikin nagih. Keripik bawang premium dengan cita rasa yang tak terlupakan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#buy"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold font-body hover:opacity-90 transition-all shadow-lg"
          >
            Beli Sekarang
          </a>
          <a
            href="#products"
            className="border-2 border-cream/40 text-cream px-8 py-4 rounded-xl text-lg font-semibold font-body hover:bg-cream/10 transition-all"
          >
            Lihat Produk
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
