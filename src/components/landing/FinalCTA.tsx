import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="gradient-cta-bg py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4"
        >
          Ready to transform your hiring?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
        >
          Join 500+ companies using AI to hire better, faster
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-card text-primary font-semibold text-lg rounded-xl px-10 py-4 hover:bg-secondary transition-colors"
          >
            Start Free Trial <ArrowRight size={20} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-xl px-10 py-4 hover:bg-primary-foreground/10 transition-colors"
          >
            Schedule Demo
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-primary-foreground/60 mt-6"
        >
          No credit card required • 14-day trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
