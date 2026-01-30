import storefront from "@/assets/kyobashi-storefront.png";
const KodawariSection = () => {
  const features = [{
    title: "鉄板焼のライブ感",
    description: "目の前で焼き上げる臨場感。熱々の鉄板で焼くお好み焼きは格別です。"
  }, {
    title: "秘伝の生地",
    description: "創業以来受け継がれる秘伝のレシピ。外はカリッ、中はふわっの食感。"
  }, {
    title: "充実の飲み放題",
    description: "生ビール、ハイボール、サワー、焼酎など豊富なアルコールメニュー。"
  }, {
    title: "団体様歓迎",
    description: "歓送迎会、忘新年会など各種宴会に最適。貸切のご相談もお気軽に。"
  }];
  return <section id="kodawari" className="bg-background py-24">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          
          <h2 className="font-serif text-3xl font-medium tracking-wider text-foreground md:text-4xl">
            当店のこだわり
          </h2>
          <div className="section-divider mx-auto mt-6 w-16" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img src={storefront} alt="風の街 京橋店 店舗外観" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 left-4 bg-primary px-5 py-3">
              <p className="font-serif text-sm tracking-wider text-primary-foreground">
                お好み焼・鉄板焼
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            {features.map((feature, index) => <div key={index} className="border-l-2 border-primary/30 pl-6 transition-all hover:border-primary">
                <h3 className="mb-2 font-serif text-lg font-medium tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default KodawariSection;