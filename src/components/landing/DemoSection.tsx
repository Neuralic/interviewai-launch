import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="gradient-cta-bg py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          See InterviewAI in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-primary-foreground/80 mb-10"
        >
          Watch how teams conduct hundreds of interviews monthly
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/50 mx-auto max-w-3xl"
        >
          <video
            controls
            muted
            playsInline
            poster=""
            className="w-full aspect-video object-cover"
            src="/videos/demo-video.mp4"
          />
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          href="#"
          className="inline-flex items-center gap-2 text-primary-foreground font-semibold mt-8 hover:text-primary-foreground/80 transition-colors"
        >
          Or try our interactive demo <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default DemoSection;
