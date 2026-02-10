import { Search, Filter, Phone, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Your Area",
    description: "Enter your college, office, or area name to find nearby options.",
  },
  {
    icon: Filter,
    title: "Filter & Compare",
    description: "Use smart filters — budget, gender, amenities, rating — to narrow down.",
  },
  {
    icon: Phone,
    title: "Contact Owner Directly",
    description: "No middlemen. Talk to verified property owners instantly.",
  },
  {
    icon: CheckCircle2,
    title: "Move In Hassle-Free",
    description: "Visit, verify, and move in. It's that simple.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-surface-warm">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find and move into your ideal PG in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <step.icon className="h-8 w-8" />
              </div>

              <div className="absolute -top-2 -right-2 sm:static sm:mb-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
