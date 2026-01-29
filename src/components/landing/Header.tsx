import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-kaze-black/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="風の街" className="h-10 w-auto" />
          <span className="ml-2 text-xs font-normal text-kaze-cream/60">京橋店</span>
        </a>

        {/* CTA Button */}
        <Button variant="cta" size="sm" asChild>
          <a href="tel:06-6354-2909">
            <Phone className="mr-1 h-4 w-4" />
            予約する
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
