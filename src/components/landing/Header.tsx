import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "こだわり", href: "#kodawari" },
    { label: "コース", href: "#course" },
    { label: "メニュー", href: "#menu" },
    { label: "アクセス", href: "#access" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-kaze-black/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-kaze-cream">
          <span className="text-primary">風</span>の街
          <span className="ml-2 text-xs font-normal text-kaze-cream/60">京橋店</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-kaze-cream/80 transition-colors hover:text-kaze-cream"
            >
              {item.label}
            </a>
          ))}
          <Button variant="cta" size="sm" asChild>
            <a href="tel:06-6354-2909">
              <Phone className="mr-1 h-4 w-4" />
              予約する
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-kaze-cream md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="border-t border-border/50 bg-kaze-black/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-kaze-cream/80 transition-colors hover:text-kaze-cream"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
