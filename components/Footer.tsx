const Footer = () => {
  return (
    <footer className="bg-warm-brown text-cream/80 py-12 px-4">
      <div className="container mx-auto text-center">
        <p className="font-display text-2xl font-bold text-cream mb-2">
          Itha<span className="text-primary">Snack</span>
        </p>
        <p className="text-sm font-body mb-6">
          Keripik bawang premium pilihan keluarga Indonesia.
        </p>
        <div className="flex justify-center gap-6 text-sm font-body mb-6">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          <a href="#buy" className="hover:text-primary transition-colors">Buy</a>
        </div>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Itha Snack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
