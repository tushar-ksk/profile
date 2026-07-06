import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Calculator, BarChart2 } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const journeySteps = [
    { title: "Python Fundamentals", desc: "Core syntax, OOPs, and utility scripting", status: "completed" },
    { title: "Data Structures & Algorithms", desc: "Problem-solving and algorithmic thinking", status: "completed" },
    { title: "Data Science Stack", desc: "NumPy, Pandas, Matplotlib, Seaborn", status: "completed" },
    { title: "Machine Learning", desc: "Scikit-Learn and model evaluation metrics", status: "completed" },
    { title: "Currently: SVM & Advanced Preprocessing", desc: "Deep diving into kernels and high-dimensional spaces", status: "current" },
    { title: "Next: Neural Networks & Deep Learning", desc: "Transitioning to PyTorch/TensorFlow", status: "upcoming" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[100dvh] w-full px-4 pt-32 pb-24 md:px-8 lg:px-12 max-w-4xl mx-auto flex flex-col gap-20"
    >
      
      {/* Section 1: Profile */}
      <motion.section variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
        <motion.div variants={item}>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter mb-4">
            Learning in Public.
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium">
            3rd Semester · B.Tech CSE (AI/ML)
          </h2>
        </motion.div>
        
        <motion.div variants={item} className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
          <p>
            I'm Tushar — a CS undergrad specializing in AI/ML, currently in my 3rd semester at university. My path into ML started with data preprocessing pipelines and has progressively deepened into classification algorithms, optimization mathematics, and model evaluation. Right now I'm pushing hard through Support Vector Machines and the underlying kernel theory.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 mt-4">
          {["3rd Semester", "7+ Projects Built", "Currently: SVMs"].map((stat, i) => (
            <div key={i} className="px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 text-foreground font-medium text-sm">
              {stat}
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section 2: The Learning Journey */}
      <motion.section variants={container} initial="hidden" animate="show">
        <motion.h3 variants={item} className="text-2xl font-display font-bold mb-8">The Learning Journey</motion.h3>
        <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 flex flex-col gap-8">
          {journeySteps.map((step, i) => (
            <motion.div key={i} variants={item} className="relative pl-8 md:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 bg-background p-1">
                {step.status === "completed" ? (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                ) : step.status === "current" ? (
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping"></span>
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                ) : (
                  <CircleDashed className="w-6 h-6 text-muted-foreground opacity-50" />
                )}
              </div>
              
              <div className={`p-5 rounded-2xl border transition-all ${
                step.status === "current" ? "bg-primary/5 border-primary/30 shadow-lg shadow-primary/5" : "bg-card border-white/5"
              }`}>
                <h4 className={`text-lg font-bold mb-1 ${step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"}`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section 3: Core Identity */}
      <motion.section variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Math */}
        <motion.div variants={item} className="bento-card flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-3">Mathematics First</h3>
          <p className="text-muted-foreground leading-relaxed">
            Strong foundations in linear algebra, statistics, and probability — the bedrock of every ML model I build.
          </p>
        </motion.div>

        {/* Music */}
        <motion.div variants={item} className="bento-card bg-gradient-to-br from-card to-primary/10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none flex items-end gap-1.5 h-32">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="equalizer-bar w-2 bg-primary rounded-t-sm" style={{ animationDelay: `-${i * 0.15}s` }} />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold mb-3">Music is the OS.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Every dataset I've preprocessed, every model I've trained, every bug I've squashed — it happened with music on. It's not background noise; it's the operating system that keeps the mind locked in.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Lo-Fi Hip Hop", "Phonk", "Indie Electronic"].map(genre => (
                <span key={genre} className="px-3 py-1 rounded-full bg-background border border-border/50 text-xs font-semibold text-foreground/80">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.section>

    </motion.div>
  );
}
