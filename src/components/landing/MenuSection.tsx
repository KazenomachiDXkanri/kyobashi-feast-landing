const MenuSection = () => {
  const categories = [
    {
      title: "お好み焼・ねぎ焼き",
      icon: "🥞",
      items: ["豚玉", "いか玉", "えび玉", "豚もち玉", "豚ねぎ玉", "牛肉玉"],
      accent: "border-l-primary",
    },
    {
      title: "モダン焼き・焼きそば",
      icon: "🍜",
      items: ["豚モダン", "いかモダン", "焼きそば", "塩焼きそば", "にんにく醤油焼きそば", "焼うどん"],
      accent: "border-l-kaze-gold",
    },
    {
      title: "もんじゃ焼き",
      icon: "🔥",
      items: ["もちチーズもんじゃ", "Wチーズもんじゃ", "プルコギもんじゃ", "豚キムチもんじゃ", "海鮮もんじゃ", "ベビースターもんじゃ"],
      accent: "border-l-kaze-wood",
    },
    {
      title: "鉄板焼・おつまみ",
      icon: "🍳",
      items: ["とんぺい", "若鶏ねぎ塩鉄板焼", "げそ鉄板焼", "枝豆", "キムチ", "じゃがバター焼き"],
      accent: "border-l-secondary",
    },
  ];

  return (
    <section id="menu" className="bg-background py-20">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium text-primary">MENU</span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            主要メニュー紹介
          </h2>
          <div className="section-divider mx-auto w-24" />
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            豊富なメニューの中から一部をご紹介。すべて食べ放題でお楽しみいただけます。
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl border-l-4 ${category.accent} bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl`}
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-display text-lg font-bold text-card-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item, iIndex) => (
                  <li
                    key={iIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* More Link */}
              <p className="mt-4 text-xs text-muted-foreground">...他多数</p>
            </div>
          ))}
        </div>

        {/* Drink Menu Highlight */}
        <div className="mt-12 rounded-2xl bg-kaze-black p-8 text-center">
          <h3 className="mb-4 font-display text-2xl font-bold text-kaze-cream">
            🍺 飲み放題メニュー
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-kaze-cream/80">
            {[
              "生ビール（中・小）",
              "ハイボール",
              "ゆずハイボール",
              "レモンサワー",
              "カルピスサワー",
              "焼酎各種",
              "カシス",
              "ピーチ",
              "冷酒",
              "梅酒",
            ].map((drink, index) => (
              <span
                key={index}
                className="rounded-full border border-kaze-gold/30 bg-kaze-gold/10 px-3 py-1"
              >
                {drink}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-kaze-cream/50">
            ※3,800円・4,400円コースにてお楽しみいただけます
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
