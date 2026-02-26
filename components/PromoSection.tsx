import { motion } from "framer-motion";

const PromoSection = () => {
  const promos = [
    {
      title: "Paket Hemat 3 Bungkus",
      description: "Nikmati diskon 20% untuk pembelian 3 bungkus",
      bgColor: "bg-gradient-to-br from-primary to-orange-600",
    },
    {
      title: "Rasa Baru Segera Hadir!",
      description: "Stay tuned untuk rasa eksklusif kami",
      bgColor: "bg-gradient-to-br from-amber-700 to-warm-brown",
    },
  ];

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
          {promos.map((promo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className={`${promo.bgColor} w-full h-64 flex flex-col items-center justify-center p-6`}>
                <p className="text-cream font-display text-2xl font-bold text-center">
                  {promo.title}
                </p>
                <p className="text-cream/80 font-body text-center mt-2">
                  {promo.description}
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
