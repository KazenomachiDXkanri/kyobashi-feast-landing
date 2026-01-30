import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/98 p-3 backdrop-blur-sm md:hidden">
      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
          Web予約はこちら
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
