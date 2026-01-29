import storefront from "@/assets/storefront.png";

const KodawariSection = () => {
  const features = [
    {
      icon: "🔥",
      title: "鉄板焼のライブ感",
      description: "目の前で焼き上げる臨場感。熱々の鉄板で焼くお好み焼きは格別です。",
    },
    {
      icon: "🍳",
      title: "秘伝の生地",
      description: "創業以来受け継がれる秘伝のレシピ。外はカリッ、中はふわっの食感をお楽しみください。",
    },
    {
      icon: "🍻",
      title: "充実の飲み放題",
      description: "生ビール、ハイボール、サワー、焼酎など豊富なアルコールメニューをご用意。",
    },
    {
      icon: "👥",
      title: "団体様歓迎",
      description: "歓送迎会、忘新年会など各種宴会に最適。貸切のご相談もお気軽にどうぞ。",
    },
  ];

  return (
    <section id="kodawari" className="bg-background py-20">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium text-primary">COMMITMENT</span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            当店のこだわり
          </h2>
          <div className="section-divider mx-auto w-24" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={storefront}
                alt="風の街 京橋店 店舗外観"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary px-6 py-3 shadow-lg">
              <p className="font-display text-lg font-bold text-primary-foreground">
                お好み焼・鉄板焼
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 font-display text-lg font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KodawariSection;
