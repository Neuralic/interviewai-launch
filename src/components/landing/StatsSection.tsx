import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Mic, Target, Zap } from "lucide-react";

const stats = [
  { value: 50000, suffix: "+", label: "Interviews Conducted", icon: Mic },
  { value: 94, suffix: "%", label: "Assessment Accuracy", icon: Target },
  { value: 10, suffix: "x", label: "Faster Than Traditional", icon: Zap },
];

function useCounter(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="gradient-hero-bg py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value, 2000, inView);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <stat.icon size={32} className="text-primary-foreground" />
                </div>
                <p className="text-5xl md:text-6xl font-extrabold text-foreground">
                  {stat.value === 50000 ? count.toLocaleString() : count}
                  {stat.suffix}
                </p>
                <p className="text-lg font-medium text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
