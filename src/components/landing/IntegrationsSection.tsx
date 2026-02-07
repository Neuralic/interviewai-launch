import { motion } from "framer-motion";

const integrations = [
  "Odoo", "Zapier", "Slack", "Greenhouse", "Lever", "Google", "Microsoft", "Salesforce",
];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {integrations.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="text-lg font-bold text-muted-foreground/70 hover:text-foreground transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
