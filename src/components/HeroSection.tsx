import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Student hostel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container relative z-10 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-secondary-foreground mb-6 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-secondary">
              100% Verified · Zero Brokerage
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Find Your Perfect
            <br />
            <span className="text-secondary">PG & Hostel</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover verified PGs and hostels near your college or workplace. No brokers, no hassle.
          </p>

          {/* Search bar */}
          <div className="bg-card rounded-2xl p-2 card-shadow max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Enter college, area, or city..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
              <Button size="lg" className="gap-2 rounded-xl px-6">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "5,000+", label: "Verified PGs" },
              { num: "200+", label: "Cities" },
              { num: "50K+", label: "Happy Students" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-primary-foreground">{stat.num}</p>
                <p className="text-xs text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
