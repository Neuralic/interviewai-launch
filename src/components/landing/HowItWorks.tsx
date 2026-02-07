import { motion } from "framer-motion";
import { FileText, Mic, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Create Job & Invite Candidates",
    description: "Set up your job posting with required skills. Send invites via email or import from your ATS. AI generates custom questions.",
  },
  {
    icon: Mic,
    title: "AI Conducts Smart Interviews",
    description: "Candidates join video calls where AI asks intelligent questions, analyzes responses in real-time, and evaluates body language.",
  },
  {
    icon: BarChart3,
    title: "Get Detailed Reports & Hire",
    description: "Receive comprehensive reports with scores, strengths, weaknesses, and recommendations. Compare candidates and hire faster.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How InterviewAI Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From job posting to hired candidate in 3 simple steps
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 text-center relative"
            >
              <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground text-3xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/40 relative z-10">
                {i + 1}
              </div>
              <step.icon size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
