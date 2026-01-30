const MenuSection = () => {
  const categories = [{
    title: "お好み焼・ねぎ焼き",
    items: ["豚玉", "いか玉", "えび玉", "豚もち玉", "豚ねぎ玉", "牛肉玉"]
  }, {
    title: "モダン焼き・焼きそば",
    items: ["豚モダン", "いかモダン", "焼きそば", "塩焼きそば", "にんにく醤油焼きそば", "焼うどん"]
  }, {
    title: "もんじゃ焼き",
    items: ["もちチーズもんじゃ", "Wチーズもんじゃ", "プルコギもんじゃ", "豚キムチもんじゃ", "海鮮もんじゃ", "ベビースターもんじゃ"]
  }, {
    title: "鉄板焼・おつまみ",
    items: ["とんぺい", "若鶏ねぎ塩鉄板焼", "げそ鉄板焼", "枝豆", "キムチ", "じゃがバター焼き"]
  }];
  const drinks = ["生ビール（中・小）", "ハイボール", "ゆずハイボール", "レモンサワー", "カルピスサワー", "焼酎各種", "カシス", "ピーチ", "冷酒", "梅酒"];
  return <section id="menu" className="bg-background py-24">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          
          <h2 className="font-serif text-3xl font-medium tracking-wider text-foreground md:text-4xl">
            主要メニュー紹介
          </h2>
          <div className="section-divider mx-auto mt-6 w-16" />
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            豊富なメニューの中から一部をご紹介。すべて食べ放題でお楽しみいただけます。
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => <div key={index} className="border-t border-primary/30 pt-6">
              {/* Category Header */}
              <h3 className="mb-4 font-serif text-lg font-medium tracking-wider text-foreground">
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item, iIndex) => <li key={iIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/50" />
                    {item}
                  </li>)}
              </ul>

              {/* More Link */}
              <p className="mt-4 text-xs text-muted-foreground">...他多数</p>
            </div>)}
        </div>

        {/* Drink Menu Highlight */}
        <div className="mt-16 border border-border bg-card p-8">
          <h3 className="mb-6 text-center font-serif text-xl font-medium tracking-wider text-foreground">
            飲み放題メニュー
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {drinks.map((drink, index) => <span key={index} className="border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                {drink}
              </span>)}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            ※3,800円・4,400円コースにてお楽しみいただけます
          </p>
        </div>
      </div>
    </section>;
};
export default MenuSection;