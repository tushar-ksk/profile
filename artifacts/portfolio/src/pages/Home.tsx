import { motion } from "framer-motion";
import { SiGithub, SiInstagram } from "react-icons/si";
import { Terminal, Database, MessageSquare, Briefcase, Zap, Flame, MoveRight, Code2, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-[100dvh] w-full px-4 py-24 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Decorative noise & gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}} />
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-[-2] -translate-y-1/2" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-[-2] translate-y-1/3" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
      >
        {/* HERO BLOCK */}
        <motion.div variants={item} className="bento-card md:col-span-2 lg:col-span-2 md:row-span-2 flex flex-col justify-between group">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AVAILABLE FOR HIRE
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter mb-2">
              Tushar
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              B.Tech CSE (AI/ML) — 3rd Semester
            </h2>
            <p className="text-muted-foreground/80 leading-relaxed max-w-md text-base md:text-lg mb-8">
              Building the future of intelligent systems. Driven by mathematics, fueled by music, and aiming to lead heavy-hitting ML & AIOps teams.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              { icon: SiGithub, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
              { icon: Mail, label: "Email", href: "mailto:tushar@example.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
              >
                <social.icon className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                <span className="text-sm font-medium sr-only md:not-sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* TECH STACK & CURRENT FOCUS */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-2 flex flex-col">
          <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" /> Arsenal & Focus
          </h3>
          <div className="flex flex-wrap gap-2 mb-auto">
            {["Python", "C", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-foreground/80 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-2xl border border-primary/30 bg-primary/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-xs text-primary font-bold tracking-wider uppercase mb-1 flex items-center gap-2">
              <Zap className="w-3 h-3" /> Current Learning Sprint
            </p>
            <p className="text-sm font-medium text-foreground">
              Mastering Support Vector Machines (SVM) & Advanced Data Preprocessing.
            </p>
          </div>
        </motion.div>

        {/* CURRENT VIBE - MUSIC VISUALIZER */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-1 relative overflow-hidden flex flex-col justify-end min-h-[180px]">
          <div className="absolute top-6 left-6">
            <h3 className="text-sm font-bold tracking-wider text-muted-foreground uppercase">Current Vibe</h3>
          </div>
          
          <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-20 pointer-events-none">
            <div className="flex items-end gap-1.5 h-16 w-full px-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="equalizer-bar w-full bg-primary rounded-t-sm" style={{ animationDelay: `-${i * 0.15}s` }} />
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="text-lg font-display font-medium text-foreground leading-tight mb-2">
              Coding on full blast. Music is always on.
            </p>
            <p className="text-xs text-primary font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Lo-Fi Hip Hop · Now Playing
            </p>
          </div>
        </motion.div>

        {/* CORE STRENGTHS */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-1 bg-gradient-to-br from-card to-primary/5">
          <div className="h-full flex flex-col justify-between">
            <Flame className="w-8 h-8 text-primary mb-4" />
            <div>
              <h3 className="text-xl font-display font-bold mb-2">Core Strengths</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Strong Mathematical Foundations & High-Impact Communication Skills.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PROJECTS - MEGA */}
        <motion.div variants={item} className="bento-card md:col-span-2 lg:col-span-2 row-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-display font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" /> Featured Builds
            </h3>
            <a href="https://github.com" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors group">
              View all <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="group/project p-5 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all cursor-pointer flex-1 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-xl bg-background shadow-sm">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Mega Project</span>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover/project:text-primary transition-colors">AI-Integrated Voice Assistant</h4>
              <p className="text-sm text-muted-foreground">Automated, interactive voice agent capable of executing system tasks and answering complex queries using NLP.</p>
            </div>

            <div className="group/project p-5 rounded-2xl bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all cursor-pointer flex-1 flex flex-col justify-center">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-xl bg-background shadow-sm">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Advanced</span>
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover/project:text-primary transition-colors">WhatsApp & Coding Agents</h4>
              <p className="text-sm text-muted-foreground">Autonomous scripts and chatbot utilities with custom triggers for seamless workflow automation.</p>
            </div>
          </div>
        </motion.div>

        {/* UTILITY TOOLS */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-2 row-span-1">
          <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" /> Data & Utility Tools
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {["Library Management", "Weather App", "Dear Diary", "Adventure Game"].map((tool) => (
              <div key={tool} className="p-3 rounded-xl bg-secondary/40 border border-border/40 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-pointer group flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">{tool}</span>
                <MoveRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
