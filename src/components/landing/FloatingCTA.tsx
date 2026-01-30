import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/98 p-3 backdrop-blur-sm md:hidden">
      <div className="flex gap-2">
        <Button variant="cta" size="lg" className="flex-1" asChild>
          <a href="tel:06-6353-9035">
            <Phone className="mr-1 h-4 w-4" />
            電話予約
          </a>
        </Button>
        <Button variant="ctaOutline" size="lg" className="flex-1" asChild>
          <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-1 h-4 w-4" />
            Web予約
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
