import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-kaze-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="鉄板焼のお好み焼き"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kaze-black/80 via-kaze-black/50 to-kaze-black/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-kaze-gold/50 bg-kaze-black/50 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-kaze-gold">🎉 歓送迎会予約受付中</span>
        </div>

        {/* Main Copy */}
        <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-kaze-cream md:text-5xl lg:text-6xl">
          京橋での歓送迎会は
          <br />
          <span className="text-gradient-gold">「風の街」</span>で決まり！
        </h1>

        {/* Sub Copy */}
        <p className="mb-8 max-w-2xl text-lg text-kaze-cream/80 md:text-xl">
          秘伝の味を守り続けるお好み焼・鉄板焼。
          <br className="hidden md:block" />
          全3コースの食べ放題で、思い出に残る宴会を。
        </p>

        {/* Course Highlight */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <div className="rounded-lg border border-kaze-gold/30 bg-kaze-black/60 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm text-kaze-gold">食べ放題</p>
            <p className="text-2xl font-bold text-kaze-cream">3,300円〜</p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-kaze-black/60 px-4 py-3 backdrop-blur-sm">
            <p className="text-sm text-primary">飲み放題付き</p>
            <p className="text-2xl font-bold text-kaze-cream">3,800円〜</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="hero" size="xl" asChild>
            <a href="tel:06-6354-2909">
              <Phone className="mr-2 h-5 w-5" />
              今すぐ電話で予約
            </a>
          </Button>
          <Button variant="ctaGold" size="xl" asChild>
            <a href="https://www.hotpepper.jp/" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Web予約はこちら
            </a>
          </Button>
        </div>

        {/* Group Note */}
        <p className="mt-6 text-sm text-kaze-cream/60">
          ※団体・大人数でのご利用も大歓迎！お気軽にご相談ください
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-kaze-cream/50">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-kaze-cream/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
