import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

const BuySection = () => {
  return (
    <section id="buy" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Pesan Sekarang
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Beli <span className="text-gradient-gold">Itha Snack</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-body">
            Scan QRIS di bawah untuk melakukan pembayaran dengan mudah dan cepat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-sm mx-auto"
        >
          <div className="bg-background rounded-3xl p-8 shadow-lg border border-border text-center">
            {/* QRIS Placeholder */}
            <div className="w-64 h-64 mx-auto bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 mb-6 border-2 border-dashed border-primary/30">
              <QrCode className="w-16 h-16 text-primary/50" />
              <p className="text-sm text-muted-foreground font-body">
                QRIS Code<br />
                <span className="text-xs">(Letakkan QR Code di sini)</span>
              </p>
            </div>

            <p className="text-foreground font-display font-bold text-2xl mb-1">
              Rp 25.000
            </p>
            <p className="text-muted-foreground text-sm font-body mb-6">per bungkus</p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold font-body hover:opacity-90 transition-opacity"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuySection;
