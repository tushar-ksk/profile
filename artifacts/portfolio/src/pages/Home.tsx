import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiGithub, SiInstagram } from "react-icons/si";
import { Terminal, Database, MessageSquare, Briefcase, Zap, Flame, MoveRight, Code2, Mail, GitBranch, GitCommit, Activity, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import profilePhoto from "@assets/profile.jpeg";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:tusharkaushik1328@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const socials = [
    { icon: SiGithub,    label: "GitHub",    handle: "tushar-ksk",          href: "https://github.com/tushar-ksk" },
    { icon: FaLinkedin,  label: "LinkedIn",  handle: "tusharkaushik1328",   href: "https://www.linkedin.com/in/tusharkaushik1328" },
    { icon: SiInstagram, label: "Instagram", handle: "nonit_kaushik",       href: "https://www.instagram.com/nonit_kaushik" },
    { icon: Mail,        label: "Email",     handle: "tusharkaushik1328@…", href: "mailto:tusharkaushik1328@gmail.com" },
  ];

  const commitGrid = [1,0,2,3,1,0,2, 3,2,1,0,3,2,1, 0,1,3,2,0,1,3, 2,3,0,1,2,3,1];
  const commits = [
    { hash: "a3f2c1b", message: "feat: implement svm pipeline" },
    { hash: "7e9d4a2", message: "fix: voice assistant core latency" },
    { hash: "2b8f6c3", message: "feat: add data preprocessing module" },
    { hash: "5c1a9d4", message: "docs: update ml roadmap notes" },
    { hash: "9f4b2e5", message: "refactor: optimise pandas pipeline" },
  ];

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
              { icon: SiGithub, label: "GitHub", href: "https://github.com/tushar-ksk" },
              { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tusharkaushik1328" },
              { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/nonit_kaushik" },
              { icon: Mail, label: "Email", href: "mailto:tusharkaushik1328@gmail.com" }
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

        {/* PROFILE PHOTO */}
        <motion.div
          variants={item}
          className="bento-card md:col-span-1 lg:col-span-1 md:row-span-2 p-0 overflow-hidden min-h-[280px]"
        >
          <div className="relative w-full h-full min-h-[280px]">
            <img
              src={profilePhoto}
              alt="Tushar"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Matte dark overlay — heavier at bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
            {/* Corner accent line */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/60 rounded-br-lg" />
            {/* Name label at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-display font-semibold text-sm tracking-wide">Tushar Kaushik</p>
              <p className="text-white/60 text-xs font-mono">AI/ML Engineer</p>
            </div>
          </div>
        </motion.div>

        {/* VERSION CONTROL & WORKFLOW — fills col 4 rows 1-2 on lg */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-1 lg:row-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <GitBranch className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-display font-semibold text-foreground">Version Control</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Git", "GitHub", "GitHub Actions"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/60 text-xs font-medium text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-mono leading-relaxed border-l-2 border-primary/40 pl-3 italic">
              Branching, PR workflows, and automated deployments.
            </p>
          </div>

          <div className="mt-5">
            <p className="text-[10px] text-muted-foreground/50 font-mono mb-2 flex items-center gap-1.5">
              <Activity className="w-3 h-3" /> Last 4 weeks
            </p>
            <div className="grid grid-cols-7 gap-1">
              {commitGrid.map((level, i) => (
                <div
                  key={i}
                  className={`h-3 rounded-sm transition-colors ${
                    level === 3 ? "bg-primary/90" :
                    level === 2 ? "bg-primary/50" :
                    level === 1 ? "bg-primary/20" :
                    "bg-secondary/80"
                  }`}
                />
              ))}
            </div>
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
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors group">
              View all <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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

        {/* GITHUB STATS / AIOPS ACTIVITY — fills bottom-right below Utility Tools */}
        <motion.div variants={item} className="bento-card md:col-span-1 lg:col-span-2 font-mono overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 ml-3 px-3 py-0.5 rounded bg-secondary/60 text-[10px] text-muted-foreground/60 text-center">
              bash — tushar@tusharlinux
            </div>
            <GitCommit className="w-3.5 h-3.5 text-muted-foreground/40" />
          </div>
          <div className="space-y-1.5 text-xs">
            <p>
              <span className="text-primary font-semibold">tushar</span>
              <span className="text-muted-foreground/60">@</span>
              <span className="text-green-400/80">tusharlinux</span>
              <span className="text-muted-foreground/60">:~$&nbsp;</span>
              <span className="text-foreground/90">git log --oneline -n 5</span>
            </p>
            {commits.map((c) => (
              <p key={c.hash} className="flex gap-2">
                <span className="text-yellow-400/70 shrink-0">{c.hash}</span>
                <span className="text-foreground/70">{c.message}</span>
              </p>
            ))}
            <p className="pt-1 flex items-center">
              <span className="text-primary font-semibold">tushar</span>
              <span className="text-muted-foreground/60">@</span>
              <span className="text-green-400/80">tusharlinux</span>
              <span className="text-muted-foreground/60">:~$&nbsp;</span>
              <span className="inline-block w-1.5 h-3.5 bg-primary/80 animate-pulse ml-0.5" />
            </p>
          </div>
        </motion.div>

        {/* CONTACT & CONNECT — full-width anchor at the bottom */}
        <motion.div variants={item} className="bento-card md:col-span-3 lg:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {/* LEFT: Minimal contact form */}
            <div>
              <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" /> Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="px-3 py-2 rounded-xl bg-secondary/40 border border-[#27272A] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="px-3 py-2 rounded-xl bg-secondary/40 border border-[#27272A] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-colors"
                  />
                </div>
                <textarea
                  required
                  placeholder="Message"
                  rows={3}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="px-3 py-2 rounded-xl bg-secondary/40 border border-[#27272A] text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="self-start flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] active:scale-95 transition-all duration-200"
                >
                  {sent
                    ? <><span className="w-3.5 h-3.5 rounded-full bg-green-400 inline-block" /> Sent!</>
                    : <><Send className="w-3.5 h-3.5" /> Send Message</>
                  }
                </button>
              </form>
            </div>

            {/* RIGHT: Social badge grid */}
            <div>
              <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" /> Connect
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-[#27272A] hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                  >
                    <div className="p-1.5 rounded-lg bg-background/60 group-hover:bg-primary/20 transition-colors shrink-0">
                      <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors">{s.label}</p>
                      <p className="text-[10px] text-muted-foreground/50 font-mono truncate">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
