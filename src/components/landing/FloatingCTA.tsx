import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-3 shadow-lg backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Button variant="cta" size="lg" className="flex-1" asChild>
          <a href="tel:06-6354-2909">
            <Phone className="mr-1 h-4 w-4" />
            電話予約
          </a>
        </Button>
        <Button variant="ctaGold" size="lg" className="flex-1" asChild>
          <a href="https://www.hotpepper.jp/" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-1 h-4 w-4" />
            Web予約
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
