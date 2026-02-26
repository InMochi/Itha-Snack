import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const FindUsSection = () => {
  return (
    <section id="findus" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Lokasi
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Temukan Kami
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border h-80 lg:h-auto"
          >
            <iframe
              title="Itha Snack Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                icon: MapPin,
                label: "Alamat",
                value: "Jl. Rasa Gurih No. 12, Jakarta Selatan, Indonesia",
              },
              {
                icon: Phone,
                label: "Telepon",
                value: "+62 812-3456-7890",
              },
              {
                icon: Mail,
                label: "Email",
                value: "hello@ithasnack.com",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-body mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-body font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
