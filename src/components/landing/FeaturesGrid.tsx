import { motion } from "framer-motion";
import { Mic, FileText, Globe, BarChart3, Puzzle, Eye } from "lucide-react";

const features = [
  { icon: Mic, title: "Voice & Video Interviews", description: "AI conducts natural conversations via voice and video. Supports 57+ languages with real-time transcription." },
  { icon: FileText, title: "AI Resume Parser", description: "Upload any resume and AI extracts skills, experience, education instantly. Auto-matches to job requirements." },
  { icon: Globe, title: "Multi-Lingual Support", description: "Conduct interviews in 57+ languages. AI adapts accent, tone, and cultural context automatically." },
  { icon: BarChart3, title: "Real-Time Analytics", description: "Track metrics, performance trends in beautiful dashboards. Export data and share reports instantly." },
  { icon: Puzzle, title: "Seamless Integrations", description: "Connect with Odoo, Slack, Zapier, and 7000+ apps. Automate workflows without switching tools." },
  { icon: Eye, title: "GPT-4 Vision Analysis", description: "Advanced body language detection analyzes eye contact, confidence, posture, and engagement." },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-secondary/50 py-20 md:py-24" id="features">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Powerful Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything you need to hire exceptional talent
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform">
                <f.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{f.description}</p>
              <a href="#" className="text-primary font-medium hover:text-accent transition-colors">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
