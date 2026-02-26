import { motion } from "framer-motion";
import { Flame, Leaf, Award } from "lucide-react";
import productBag from "@/assets/product-bag.png";

const highlights = [
  {
    icon: Flame,
    title: "Renyah Sempurna",
    desc: "Digoreng dengan teknik khusus hingga renyah maksimal.",
  },
  {
    icon: Leaf,
    title: "Bahan Alami",
    desc: "100% bawang merah pilihan tanpa pengawet.",
  },
  {
    icon: Award,
    title: "Rasa Premium",
    desc: "Bumbu rahasia yang bikin kamu ketagihan!",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Produk Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Kenapa <span className="text-gradient-gold">Itha Snack</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <img
                src={productBag}
                alt="Itha Snack onion chips package"
                className="relative w-72 md:w-96 animate-float rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
