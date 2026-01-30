import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const CourseSection = () => {
  const courses = [{
    name: "ベーシックコース",
    price: "3,300",
    description: "食べ放題",
    popular: false,
    features: ["お好み焼き各種", "ねぎ焼き各種", "焼きそば・焼うどん", "もんじゃ焼き", "鉄板焼（げそ、もやし等）", "おつまみ各種"],
    drinks: false
  }, {
    name: "スタンダードコース",
    price: "3,800",
    description: "食べ放題＋飲み放題",
    popular: true,
    features: ["お好み焼き各種", "ねぎ焼き各種", "焼きそば・焼うどん", "もんじゃ焼き", "生ビール（中・小）", "ハイボール・レモンサワー", "焼酎・カシス・ピーチ"],
    drinks: true
  }, {
    name: "プレミアムコース",
    price: "4,400",
    description: "フル食べ放題＋全飲み放題",
    popular: false,
    features: ["全メニュー食べ放題", "チーズお好み焼各種", "モダン焼き各種", "全アルコール飲み放題", "ふんわりサワー各種", "冷酒・梅酒も"],
    drinks: true
  }];
  return <section id="course" className="bg-washi py-24">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          
          <h2 className="font-serif text-3xl font-medium tracking-wider text-foreground md:text-4xl">
            選べる3つの食べ放題コース
          </h2>
          <div className="section-divider mx-auto mt-6 w-16" />
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            お客様のご予算やお好みに合わせて、3つのコースからお選びいただけます。
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, index) => <div key={index} className={`relative bg-card p-8 transition-all hover-lift ${course.popular ? "border-2 border-primary" : "border border-border"}`}>
              {/* Popular Badge */}
              {course.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1">
                  <span className="text-xs font-medium tracking-wider text-primary-foreground">
                    一番人気
                  </span>
                </div>}

              {/* Course Name */}
              <div className="mb-6 pt-2 text-center">
                <h3 className="font-serif text-xl font-medium tracking-wider text-foreground">
                  {course.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 text-center">
                <span className="font-serif text-4xl font-medium text-foreground">{course.price}</span>
                <span className="ml-1 text-sm text-muted-foreground">円（税込）</span>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {course.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>

              {/* Drink Badge */}
              {course.drinks && <div className="mt-6 border-t border-border pt-4 text-center">
                  <span className="text-xs tracking-wider text-primary">
                    アルコール飲み放題付き
                  </span>
                </div>}
            </div>)}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
              Web予約はこちら
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default CourseSection;