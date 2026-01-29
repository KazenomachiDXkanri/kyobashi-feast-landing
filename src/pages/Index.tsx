import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import KodawariSection from "@/components/landing/KodawariSection";
import CourseSection from "@/components/landing/CourseSection";
import MenuSection from "@/components/landing/MenuSection";
import AccessSection from "@/components/landing/AccessSection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <KodawariSection />
        <CourseSection />
        <MenuSection />
        <AccessSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
