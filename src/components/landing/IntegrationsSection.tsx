import { motion } from "framer-motion";

const integrations = [
  {
    name: "Odoo",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto">
        <text x="0" y="22" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" fill="currentColor">odoo</text>
      </svg>
    ),
  },
  {
    name: "Zapier",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto">
        <text x="0" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="#FF4A00">zapier</text>
      </svg>
    ),
  },
  {
    name: "Slack",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto">
        <rect x="0" y="4" width="6" height="14" rx="3" fill="#E01E5A" />
        <rect x="8" y="0" width="6" height="8" rx="3" fill="#36C5F0" />
        <rect x="8" y="10" width="6" height="14" rx="3" fill="#2EB67D" />
        <rect x="16" y="8" width="6" height="14" rx="3" fill="#ECB22E" />
        <text x="28" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="currentColor">Slack</text>
      </svg>
    ),
  },
  {
    name: "Greenhouse",
    logo: (
      <svg viewBox="0 0 140 30" className="h-7 w-auto">
        <circle cx="10" cy="15" r="8" fill="#3B8427" />
        <text x="24" y="22" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="18" fill="currentColor">Greenhouse</text>
      </svg>
    ),
  },
  {
    name: "Lever",
    logo: (
      <svg viewBox="0 0 80 30" className="h-7 w-auto">
        <polygon points="0,24 8,4 16,24" fill="#5BC4BF" />
        <text x="22" y="22" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" fill="currentColor">LEVER</text>
      </svg>
    ),
  },
  {
    name: "Google",
    logo: (
      <svg viewBox="0 0 100 30" className="h-8 w-auto">
        <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="24">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 130 30" className="h-7 w-auto">
        <rect x="0" y="4" width="10" height="10" fill="#F25022" />
        <rect x="12" y="4" width="10" height="10" fill="#7FBA00" />
        <rect x="0" y="16" width="10" height="10" fill="#00A4EF" />
        <rect x="12" y="16" width="10" height="10" fill="#FFB900" />
        <text x="28" y="22" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="16" fill="currentColor">Microsoft</text>
      </svg>
    ),
  },
  {
    name: "Salesforce",
    logo: (
      <svg viewBox="0 0 130 30" className="h-8 w-auto">
        <path d="M8 20c-4 0-7-3-7-6.5S4 7 8 7c2 0 4 1 5 2.5C14 8 16 7 18 7c5 0 8 3.5 8 7.5S23 22 18 22c-2 0-4-.8-5-2C12 21 10 22 8 20z" fill="#00A1E0" />
        <text x="30" y="20" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill="currentColor">salesforce</text>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const IntegrationsSection = () => {
  return (
    <section className="bg-card py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            INTEGRATIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Integrates with tools you already use
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect your hiring stack in one click
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {integrations.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.2)",
              }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex items-center justify-center cursor-pointer transition-colors hover:border-primary/30 group"
            >
              <div className="text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                {item.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
