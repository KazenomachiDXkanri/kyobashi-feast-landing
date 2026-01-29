import { MapPin, Phone, Clock, Train } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessSection = () => {
  return (
    <section id="access" className="bg-muted py-20">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-medium text-primary">ACCESS</span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            店舗情報・アクセス
          </h2>
          <div className="section-divider mx-auto w-24" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4982746!2d135.5297!3d34.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQxJzQ4LjgiTiAxMzXCsDMxJzQ3LjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="風の街 京橋店 地図"
              className="h-full min-h-[400px] w-full"
            />
          </div>

          {/* Store Info */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h3 className="mb-6 font-display text-2xl font-bold text-card-foreground">
                風の街 京橋店
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">住所</p>
                    <p className="text-muted-foreground">
                      〒534-0024
                      <br />
                      大阪府大阪市都島区東野田町2丁目
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">電話番号</p>
                    <a
                      href="tel:06-6354-2909"
                      className="text-lg font-bold text-primary hover:underline"
                    >
                      06-6354-2909
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">営業時間</p>
                    <p className="text-muted-foreground">
                      月～金 17:00～23:00
                      <br />
                      土日祝 12:00～23:00
                    </p>
                  </div>
                </div>

                {/* Access */}
                <div className="flex gap-4">
                  <Train className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">アクセス</p>
                    <p className="text-muted-foreground">
                      JR京橋駅 北口より徒歩3分
                      <br />
                      京阪京橋駅 中央口より徒歩2分
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="lg" className="flex-1" asChild>
                  <a href="tel:06-6354-2909">
                    <Phone className="mr-2 h-4 w-4" />
                    電話で予約する
                  </a>
                </Button>
                <Button variant="ctaGold" size="lg" className="flex-1" asChild>
                  <a href="https://www.hotpepper.jp/" target="_blank" rel="noopener noreferrer">
                    Web予約
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
