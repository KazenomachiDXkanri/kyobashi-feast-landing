import { Star } from "lucide-react";

const MenuSection = () => {
  const categories = [
    {
      title: "お好み焼",
      count: 10,
      items: [
        { name: "豚玉", highlight: false },
        { name: "いか玉", highlight: false },
        { name: "えび玉", highlight: false },
        { name: "豚いか玉", highlight: false },
        { name: "豚えび玉", highlight: false },
        { name: "牛肉玉", highlight: false },
        { name: "豚もち玉", highlight: false },
        { name: "いかえび玉", highlight: false },
        { name: "キムチ玉", highlight: false },
        { name: "豚キムチ玉", highlight: false },
      ],
    },
    {
      title: "ねぎ焼き",
      count: 10,
      items: [
        { name: "豚ねぎ玉", highlight: false },
        { name: "いかねぎ玉", highlight: false },
        { name: "えびねぎ玉", highlight: false },
        { name: "豚いかねぎ玉", highlight: false },
        { name: "豚えびねぎ玉", highlight: false },
        { name: "牛肉ねぎ玉", highlight: false },
        { name: "豚もちねぎ玉", highlight: false },
        { name: "いかえびねぎ玉", highlight: false },
        { name: "キムチねぎ玉", highlight: false },
        { name: "豚キムチねぎ玉", highlight: false },
      ],
    },
    {
      title: "チーズお好み焼",
      count: 10,
      isPopular: true,
      items: [
        { name: "チーズin豚玉", highlight: true },
        { name: "チーズinいか玉", highlight: true },
        { name: "チーズinえび玉", highlight: true },
        { name: "チーズin豚いか玉", highlight: true },
        { name: "チーズin豚えび玉", highlight: true },
        { name: "チーズin牛肉玉", highlight: true },
        { name: "チーズin豚もち玉", highlight: true },
        { name: "チーズinいかえび玉", highlight: true },
        { name: "チーズinキムチ玉", highlight: true },
        { name: "チーズin豚キムチ玉", highlight: true },
      ],
    },
    {
      title: "モダン焼き",
      count: 10,
      items: [
        { name: "豚モダン", highlight: false },
        { name: "いかモダン", highlight: false },
        { name: "えびモダン", highlight: false },
        { name: "豚いかモダン", highlight: false },
        { name: "豚えびモダン", highlight: false },
        { name: "牛肉モダン", highlight: false },
        { name: "豚もちモダン", highlight: false },
        { name: "いかえびモダン", highlight: false },
        { name: "キムチモダン", highlight: false },
        { name: "豚キムチモダン", highlight: false },
      ],
    },
    {
      title: "もんじゃ焼き",
      count: 7,
      items: [
        { name: "もちチーズもんじゃ", highlight: false },
        { name: "Wチーズもんじゃ", highlight: false },
        { name: "プルコギもんじゃ", highlight: false },
        { name: "チーズカレーもんじゃ", highlight: false },
        { name: "豚キムチもんじゃ", highlight: false },
        { name: "海鮮もんじゃ", highlight: false },
        { name: "ベビースターもんじゃ", highlight: false },
      ],
    },
    {
      title: "焼きそば・焼うどん",
      count: 8,
      items: [
        { name: "焼きそば", highlight: false },
        { name: "塩焼きそば", highlight: false },
        { name: "キムチ焼きそば", highlight: false },
        { name: "にんにく醤油焼きそば", highlight: false },
        { name: "焼うどん", highlight: false },
        { name: "塩焼うどん", highlight: false },
        { name: "キムチ焼うどん", highlight: false },
        { name: "にんにく醤油焼うどん", highlight: false },
      ],
    },
    {
      title: "鉄板焼",
      count: 6,
      items: [
        { name: "げそ鉄板焼", highlight: false },
        { name: "もやし鉄板焼", highlight: false },
        { name: "若鶏ねぎ塩鉄板焼", highlight: false },
        { name: "あらびきソーセージ", highlight: false },
        { name: "豚キムチ鉄板焼", highlight: false },
        { name: "豚バラねぎ塩鉄板焼", highlight: false },
      ],
    },
    {
      title: "おつまみ",
      count: 10,
      items: [
        { name: "枝豆", highlight: false },
        { name: "キムチ", highlight: false },
        { name: "野菜サラダ", highlight: false },
        { name: "じゃがバター焼き", highlight: false },
        { name: "じゃがチーズ焼き", highlight: false },
        { name: "ベーコンチーズ", highlight: false },
        { name: "とんぺい", highlight: false },
        { name: "おにぎり", highlight: false },
        { name: "なんこつねぎ塩焼", highlight: false },
        { name: "コーンバター", highlight: false },
      ],
    },
  ];

  const drinks = [
    { category: "ビール", items: ["生ビール小", "生ビール中"] },
    { category: "ハイボール", items: ["ハイボール", "ゆずハイボール"] },
    { category: "ウイスキー", items: ["ニッカ水割り", "ニッカロック"] },
    {
      category: "サワー",
      items: [
        "レモンサワー",
        "プレーンサワー",
        "カルピスサワー",
        "ライムサワー",
        "ゆずサワー",
        "無糖レモンサワー",
      ],
    },
    {
      category: "ふんわりサワー",
      items: [
        "ふんわりレモンサワー",
        "ふんわりライムサワー",
        "ふんわりカルピスサワー",
        "ふんわりゆずサワー",
      ],
    },
    { category: "焼酎・日本酒", items: ["芋焼酎", "麦焼酎", "冷酒", "梅酒"] },
    { category: "カクテル", items: ["カシス", "ピーチ"] },
  ];

  return (
    <section id="menu" className="bg-background py-28">
      <div className="container max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-wider text-foreground md:text-4xl">
            主要メニュー紹介
          </h2>
          <div className="section-divider mx-auto mt-6 w-16" />
          <p className="mx-auto mt-8 text-lg leading-relaxed text-primary">
            どれから焼くか、迷う贅沢。私たちが磨き続けてきた全メニューを、心ゆくまで。
          </p>
        </div>

        {/* Food Menu */}
        <div className="mb-20">
          <h3 className="mb-12 text-center font-serif text-2xl font-medium tracking-wider text-foreground">
            食べ放題メニュー
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`group rounded-sm border-t-2 pt-8 transition-all ${
                  category.isPopular
                    ? "border-primary bg-primary/5"
                    : "border-primary/30 hover:border-primary"
                } ${category.isPopular ? "px-4 pb-4" : ""}`}
              >
                {/* Category Header */}
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="flex items-center gap-2 font-serif text-lg font-medium tracking-wider text-primary">
                    {category.isPopular && (
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    )}
                    {category.title}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    全{category.count}種
                  </span>
                </div>

                {/* Items */}
                <ul className="space-y-2.5">
                  {category.items.slice(0, 6).map((item, iIndex) => (
                    <li
                      key={iIndex}
                      className={`flex items-center gap-2.5 text-sm ${
                        item.highlight
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          item.highlight ? "bg-primary" : "bg-primary/40"
                        }`}
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>

                {/* More Link */}
                {category.items.length > 6 && (
                  <p className="mt-4 text-xs text-muted-foreground">
                    ...他{category.items.length - 6}品
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drink Menu Highlight */}
        <div className="border border-border bg-card p-10">
          <h3 className="mb-10 text-center font-serif text-2xl font-medium tracking-wider text-foreground">
            飲み放題メニュー
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {drinks.map((drinkCategory, index) => (
              <div key={index} className="text-center">
                <h4 className="mb-4 font-serif text-sm font-medium tracking-wider text-primary">
                  {drinkCategory.category}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {drinkCategory.items.map((drink, dIndex) => (
                    <span
                      key={dIndex}
                      className="border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {drink}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            ※3,800円・4,400円コースにてお楽しみいただけます
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
