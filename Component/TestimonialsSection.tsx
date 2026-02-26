import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rina S.",
    text: "Keripik bawangnya enak banget! Renyah dan bumbunya pas. Satu bungkus nggak cukup!",
    rating: 5,
  },
  {
    name: "Andi P.",
    text: "Sudah langganan dari dulu. Itha Snack memang yang terbaik, nggak ada tandingannya!",
    rating: 5,
  },
  {
    name: "Siti M.",
    text: "Cocok banget buat teman nonton. Anak-anak juga suka. Recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Testimoni
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Kata Mereka
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-display font-bold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
