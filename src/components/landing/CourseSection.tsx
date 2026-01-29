import { Check, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CourseSection = () => {
  const courses = [
    {
      name: "ベーシックコース",
      price: "3,300",
      description: "食べ放題",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      features: [
        "お好み焼き各種",
        "ねぎ焼き各種",
        "焼きそば・焼うどん",
        "もんじゃ焼き",
        "鉄板焼（げそ、もやし等）",
        "おつまみ各種",
      ],
      drinks: false,
      color: "border-kaze-wood",
      bg: "bg-card",
    },
    {
      name: "スタンダードコース",
      price: "3,800",
      description: "食べ放題＋飲み放題",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: [
        "お好み焼き各種",
        "ねぎ焼き各種",
        "焼きそば・焼うどん",
        "もんじゃ焼き",
        "生ビール（中・小）",
        "ハイボール・レモンサワー",
        "焼酎・カシス・ピーチ",
      ],
      drinks: true,
      color: "border-primary",
      bg: "bg-primary/5",
    },
    {
      name: "プレミアムコース",
      price: "4,400",
      description: "フル食べ放題＋全飲み放題",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      features: [
        "全メニュー食べ放題",
        "チーズお好み焼各種",
        "モダン焼き各種",
        "全アルコール飲み放題",
        "ふんわりサワー各種",
        "冷酒・梅酒も",
      ],
      drinks: true,
      color: "border-kaze-gold",
      bg: "bg-kaze-gold/10",
    },
  ];

  return (
    <section id="course" className="bg-muted py-20">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium text-primary">COURSE</span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            選べる3つの食べ放題コース
          </h2>
          <div className="section-divider mx-auto w-24" />
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            お客様のご予算やお好みに合わせて、3つのコースからお選びいただけます。
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border-2 ${course.color} ${course.bg} p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  一番人気
                </div>
              )}

              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                  course.popular ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {course.icon}
              </div>

              {/* Course Name */}
              <h3 className="mb-1 font-display text-xl font-bold text-foreground">{course.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{course.price}</span>
                <span className="text-lg text-muted-foreground">円</span>
                <span className="text-sm text-muted-foreground">（税込）</span>
              </div>

              {/* Features */}
              <ul className="mb-6 space-y-2">
                {course.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Drink Badge */}
              {course.drinks && (
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  🍺 アルコール飲み放題付き
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="tel:06-6354-2909">
              コースの詳細を電話で確認する
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
