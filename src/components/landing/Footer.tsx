const Footer = () => {
  return (
    <footer className="bg-kaze-black pb-24 pt-12 md:pb-12">
      <div className="container px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-display text-2xl font-bold text-kaze-cream">
            <span className="text-primary">風</span>の街 京橋店
          </h2>
          <p className="text-sm text-kaze-cream/60">お好み焼・鉄板焼</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm text-kaze-cream/60">
          <a href="#kodawari" className="hover:text-kaze-cream">
            こだわり
          </a>
          <a href="#course" className="hover:text-kaze-cream">
            コース
          </a>
          <a href="#menu" className="hover:text-kaze-cream">
            メニュー
          </a>
          <a href="#access" className="hover:text-kaze-cream">
            アクセス
          </a>
        </div>

        <div className="text-center">
          <p className="text-xs text-kaze-cream/40">
            © 2024 風の街 京橋店. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
