import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-kaze-black pb-24 pt-16 md:pb-16">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-center">
          <img src={logo} alt="風の街" className="mb-4 h-10 w-auto opacity-80" />
          <p className="font-serif text-sm tracking-widest text-white/50">京橋店</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-8 text-sm">
          <a href="#kodawari" className="tracking-wider text-white/60 transition-colors hover:text-white">
            こだわり
          </a>
          <a href="#course" className="tracking-wider text-white/60 transition-colors hover:text-white">
            コース
          </a>
          <a href="#menu" className="tracking-wider text-white/60 transition-colors hover:text-white">
            メニュー
          </a>
          <a href="#access" className="tracking-wider text-white/60 transition-colors hover:text-white">
            アクセス
          </a>
        </div>

        <div className="text-center">
          <p className="text-xs tracking-wider text-white/30">
            © 2024 風の街 京橋店. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
