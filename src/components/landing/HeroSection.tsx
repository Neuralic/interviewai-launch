import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0, 0, 0.2, 1] as const },
  }),
};

const companies = ["DataCore", "NextGen Solutions", "GlobalHealth", "CyberFlow", "OmniRetail"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] gradient-hero-bg overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="section-container flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Left column */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Powered by GPT-4 & 6 Specialized AI Agents
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight"
          >
            Hire Smarter with{" "}
            <span className="gradient-text">AI-Powered</span>{" "}
            Interviews
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Conduct intelligent video interviews at scale. Our AI analyzes every response, body language, and competency—helping you hire the best candidates 10x faster.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-success text-success-foreground font-semibold text-lg rounded-xl px-8 py-4 hover:scale-105 transition-transform shadow-lg shadow-success/30"
            >
              Start Free Trial <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold rounded-xl px-8 py-4 hover:bg-secondary transition-colors"
            >
              <PlayCircle size={20} /> Watch Demo (2 min)
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="pt-6"
          >
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Trusted by 500+ companies worldwide
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              {companies.map((name) => (
                <span
                  key={name}
                  className="text-base font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column - Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex-1 relative w-full max-w-xl"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
              src="/videos/hero-video.mp4"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 hidden md:block"
          >
            <span className="text-sm font-bold text-success">92% Score</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-3 -left-3 glass-card rounded-xl px-4 py-2 hidden md:block"
          >
            <span className="text-sm font-bold text-primary">AI Analysis</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-6 glass-card rounded-xl px-4 py-2 hidden md:block"
          >
            <span className="text-sm font-bold text-accent">✓ Recommended</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
