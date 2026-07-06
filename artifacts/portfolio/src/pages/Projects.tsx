import { motion } from "framer-motion";
import { Mic, Bot, MessageSquare, Code2, Terminal, FileText, Cloud, Gamepad2, CheckSquare, Hash, Sword, MessageCircle } from "lucide-react";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const megaProjects = [
    {
      title: "AI-Integrated Virtual Voice Assistant",
      desc: "A fully automated, interactive voice agent that integrates AI APIs to execute system tasks, answer complex queries, and respond to natural language commands — the foundation of Tushar's AI journey.",
      icon: Bot,
      badge: "MEGA PROJECT",
    },
    {
      title: "WhatsApp Chatbot",
      desc: "An automated messaging utility built with Python, handling custom trigger phrases, automated responses, and workflow integrations directly inside WhatsApp.",
      icon: MessageSquare,
      badge: "MEGA PROJECT",
    }
  ];

  const utilityTools = [
    { title: "Coding Agent", desc: "Autonomous Python agent for scripted task execution", icon: Terminal },
    { title: "Library Management", desc: "CLI-based book catalog and borrowing system", icon: FileText },
    { title: "Dear Diary", desc: "Encrypted personal journal with Python file I/O", icon: CheckSquare },
    { title: "Weather App", desc: "Live weather fetcher using public APIs", icon: Cloud },
    { title: "Adventure Game", desc: "Text-based RPG with branching story logic", icon: Sword },
    { title: "To Do List", desc: "Task manager with persistence", icon: CheckSquare },
    { title: "Guess the Number", desc: "Classic number-guessing game with difficulty tiers", icon: Hash },
    { title: "Snake Water Gun", desc: "Interactive Python game with score tracking", icon: Gamepad2 },
    { title: "repeat_reply", desc: "Automated message utility script", icon: MessageCircle },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[100dvh] w-full px-4 pt-32 pb-24 md:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col"
    >
      <div className="mb-16 md:mb-24">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter mb-6">
          Featured Builds
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A curated look at the code I've shipped — from AI agents to everyday utility tools.
        </p>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-24">
        
        {/* Section 1: MEGA AI Projects */}
        <section>
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" /> MEGA AI Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {megaProjects.map((project, i) => (
              <motion.div key={i} variants={item} className="bento-card group flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.desc}
                </p>
                
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl z-[-1]" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Python & Data Foundations */}
        <section>
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" /> Python & Data Foundations
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {utilityTools.map((tool, i) => (
              <motion.div
                key={i}
                variants={item}
                className="p-5 rounded-2xl bg-card border border-white/5 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <tool.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{tool.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </motion.div>
    </motion.div>
  );
}
