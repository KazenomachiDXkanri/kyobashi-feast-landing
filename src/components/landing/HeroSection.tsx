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

        {/* Main Copy */}
        <h1 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-wider text-white md:text-5xl lg:text-6xl">
          受け継がれる<span className="text-primary">「風の街」</span>の味で、
          <br />
          大切な門出と出会いに、最高の一枚を。
        </h1>

        {/* Sub Copy */}
        <div className="mb-12 max-w-2xl space-y-3 text-base leading-relaxed tracking-wide text-white/90 md:text-lg">
          <p>創業66年。素材、技、心にこだわり抜いたお好み焼。</p>
          <p>京橋店限定の全3種・食べ放題コースで、賑やかで温かな歓送迎会をプロデュースします。</p>
          <p className="text-white/70">3,300円から選べる、幹事様も安心のラインナップ。</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="cta" size="xl" asChild>
            <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
              京橋店を予約する
            </a>
          </Button>
          <Button variant="ctaOutline" size="xl" className="border-white/60 text-white hover:bg-white/10" asChild>
            <a href="#course">
              コース詳細を見る
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/50 to-white/20" />
      </div>
    </section>
  );
};

export default HeroSection;
