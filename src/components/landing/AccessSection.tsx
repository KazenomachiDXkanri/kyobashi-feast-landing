import { MapPin, Phone, Clock, CreditCard, Users, Ban, Car, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessSection = () => {
  return (
    <section id="access" className="bg-washi py-24">
      <div className="container px-4">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-muted-foreground">ACCESS</p>
          <h2 className="font-serif text-3xl font-medium tracking-wider text-foreground md:text-4xl">
            店舗情報・アクセス
          </h2>
          <div className="section-divider mx-auto mt-6 w-16" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4!2d135.5350!3d34.7010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7e3c7c0c0c1%3A0x0!2zMzTCsDQyJzAzLjYiTiAxMzXCsDMyJzA2LjAiRQ!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
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
            <div className="border border-border bg-card p-8">
              <h3 className="mb-8 font-serif text-2xl font-medium tracking-wider text-foreground">
                風の街 京橋店
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">住所</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      〒534-0024
                      <br />
                      大阪市都島区東野田5丁目1‑19 KLM 1F
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">電話番号</p>
                    <a
                      href="tel:06-6353-9035"
                      className="mt-1 inline-block font-serif text-lg text-primary hover:underline"
                    >
                      06-6353-9035
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">営業時間</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      11:30〜22:30
                      <br />
                      <span className="text-xs">L.O. 入店21:30 / フード21:45 / ドリンク22:00</span>
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      定休日: 第2・第3火曜日
                    </p>
                  </div>
                </div>

                {/* Seats */}
                <div className="flex gap-4">
                  <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">座席数</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      92席（テーブル22台）
                    </p>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex gap-4">
                  <CreditCard className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">支払い方法</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      クレジットカード、電子マネー、PayPay
                    </p>
                  </div>
                </div>

                {/* Smoking & Parking */}
                <div className="flex gap-6 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <Ban className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">全席禁煙</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">駐車場無</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="lg" className="flex-1" asChild>
                  <a href="tel:06-6353-9035">
                    <Phone className="mr-2 h-4 w-4" />
                    電話で予約する
                  </a>
                </Button>
                <Button variant="ctaOutline" size="lg" className="flex-1" asChild>
                  <a href="https://www.hotpepper.jp/strJ000756270/" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
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
