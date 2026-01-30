import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-kaze-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="鉄板焼のお好み焼き"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kaze-black/60 via-kaze-black/30 to-kaze-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 border border-white/30 bg-black/30 px-5 py-2 backdrop-blur-sm">
          <span className="font-serif text-sm tracking-wider text-white">歓送迎会予約受付中</span>
        </div>

        {/* Main Copy */}
        <h1 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-wider text-white md:text-5xl lg:text-6xl">
          京橋での歓送迎会は
          <br />
          <span className="text-primary">「風の街」</span>で決まり
        </h1>

        {/* Sub Copy */}
        <p className="mb-10 max-w-xl text-base leading-relaxed tracking-wide text-white/90 md:text-lg">
          秘伝の味を守り続けるお好み焼・鉄板焼。
          <br className="hidden sm:block" />
          全3コースの食べ放題で、思い出に残る宴会を。
        </p>

        {/* Course Highlight */}
        <div className="mb-12 flex flex-wrap justify-center gap-6">
          <div className="border border-white/30 bg-black/40 px-6 py-4 backdrop-blur-sm">
            <p className="text-xs tracking-wider text-white/70">食べ放題</p>
            <p className="font-serif text-2xl font-medium text-white">3,300円〜</p>
          </div>
          <div className="border border-primary/50 bg-black/40 px-6 py-4 backdrop-blur-sm">
            <p className="text-xs tracking-wider text-primary">飲み放題付き</p>
            <p className="font-serif text-2xl font-medium text-white">3,800円〜</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="cta" size="xl" asChild>
            <a href="tel:06-6353-9035">
              <Phone className="mr-2 h-5 w-5" />
              今すぐ電話で予約
            </a>
          </Button>
          <Button variant="ctaOutline" size="xl" className="border-white/60 text-white hover:bg-white/10" asChild>
            <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Web予約はこちら
            </a>
          </Button>
        </div>

        {/* Group Note */}
        <p className="mt-8 text-sm tracking-wide text-white/60">
          ※団体・大人数でのご利用も大歓迎！お気軽にご相談ください
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-white/20" />
      </div>
    </section>
  );
};

export default HeroSection;
