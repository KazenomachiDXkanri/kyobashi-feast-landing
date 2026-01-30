import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-kaze-black/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="風の街" className="h-8 w-auto" />
          <span className="ml-3 font-serif text-sm tracking-widest text-white/70">京橋店</span>
        </a>


        {/* CTA Button */}
        <Button variant="cta" size="sm" asChild>
          <a href="tel:06-6353-9035">
            <Phone className="mr-1 h-4 w-4" />
            予約する
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
