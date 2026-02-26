import { motion } from "framer-motion";
import promoPoster1 from "@/assets/promo-poster-1.png";
import promoPoster2 from "@/assets/promo-poster-2.png";

const PromoSection = () => {
  return (
    <section id="promo" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Promo
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Penawaran Spesial
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[promoPoster1, promoPoster2].map((poster, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={poster}
                alt={`Itha Snack promo poster ${i + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-cream font-display text-xl font-bold">
                  {i === 0 ? "Paket Hemat 3 Bungkus" : "Rasa Baru Segera Hadir!"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
