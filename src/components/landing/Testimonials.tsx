import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "InterviewAI cut our hiring time by 60% and improved candidate quality significantly. The AI insights are incredibly detailed—it's like having an expert interviewer on every call.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "TechFlow Inc.",
    initials: "SC",
  },
  {
    quote: "We interviewed 200+ candidates in a month with InterviewAI. The AI caught red flags we would have missed and highlighted star performers we almost passed on. Game-changer.",
    name: "Marcus Rodriguez",
    title: "Head of Talent",
    company: "DataForge Labs",
    initials: "MR",
  },
  {
    quote: "The multi-lingual support is incredible. We hire globally and InterviewAI conducts interviews in Spanish, French, and Hindi flawlessly. Saved us thousands in translator costs.",
    name: "Priya Patel",
    title: "Global Recruiting Lead",
    company: "InnovateTech",
    initials: "PP",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-card py-20 md:py-24" id="customers">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Trusted by Top Companies
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Loved by hiring teams at<br />fast-growing companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why thousands of companies switched to InterviewAI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-6xl leading-none text-primary/20 font-serif">"</span>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6 -mt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
