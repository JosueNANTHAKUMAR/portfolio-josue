"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Server,
  Smartphone,
  Database,
  Terminal,
  Cpu
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Data ---

const experiences = [
  {
    id: 1,
    role: "Stagiaire Développement Web & Mobile",
    company: "Présidence de la République",
    period: "Oct 2023 - Juin 2024",
    description: "Création d'applications Flutter, intégration d'API et gestion de bases de données.",
    skills: ["Flutter", "API REST", "SQL"]
  },
  {
    id: 2,
    role: "Analyste IT & Cybersécurité",
    company: "La Banque Postale",
    period: "Juil 2022 - Déc 2022",
    description: "Gestion des identités (IAM) et support critique pour la sécurité du système d'information.",
    skills: ["IAM", "Cybersécurité", "Support"]
  }
];

const projects = [
  {
    id: 1,
    title: "SaaS-Ready-Premium-Task-Manager",
    description: "Une plateforme SaaS premium de gestion de tâches conçue pour l'efficacité et la collaboration.",
    tags: ["JavaScript", "SaaS", "Productivity"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Premium-Task-Manager",
    icon: <Server className="w-6 h-6 text-indigo-400" />
  },
  {
    id: 2,
    title: "SaaS-Ready-Mobile-Automation-App",
    description: "Application d'automatisation mobile avancée construite avec Dart et Flutter.",
    tags: ["Dart", "Flutter", "Automation"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Mobile-Automation-App",
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />
  },
  {
    id: 3,
    title: "SaaS-Ready-Premium-Booking-Platform",
    description: "Une solution de réservation complète pour les entreprises modernes.",
    tags: ["JavaScript", "SaaS", "Booking"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Premium-Booking-Platform",
    icon: <Database className="w-6 h-6 text-indigo-400" />
  },
  {
    id: 4,
    title: "SaaS-Ready-AI-Assistant",
    description: "Assistant IA intelligent exploitant les LLM modernes pour l'intégration SaaS.",
    tags: ["TypeScript", "AI", "Machine Learning"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-AI-Assistant",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />
  }
];

const techStack = [
  { name: "React.js", icon: <Code2 /> },
  { name: "Next.js", icon: <Server /> },
  { name: "Tailwind CSS", icon: <Code2 /> },
  { name: "Flutter", icon: <Smartphone /> },
  { name: "Node.js", icon: <Server /> },
  { name: "PostgreSQL", icon: <Database /> },
  { name: "Git", icon: <Terminal /> },
  { name: "AI/LLM", icon: <Cpu /> },
];

// --- Components ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-500/20 flex items-center justify-center border-2 border-indigo-500/50 overflow-hidden">
            {/* Placeholder for Profile Picture */}
            <span className="text-4xl">JN</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-950" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-4"
        >
          Josué Nanthakumar.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl"
        >
          Développeur Full Stack Web & Mobile | Étudiant Epitech & Freelance
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <Link
            href="mailto:njosue@outlook.fr"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2"
          >
            <Mail size={20} />
            Me contacter
          </Link>
          <Link
            href="https://github.com/JosueNANTHAKUMAR"
            target="_blank"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Github size={20} />
            Mon Github
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <Section className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-indigo-400">À propos</h3>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Actuellement en Master à <span className="text-indigo-400 font-semibold">Epitech</span> et de retour d'échange à l'Université Laval (Québec).
          Passionné par le code propre, je transforme vos idées en produits Web & Mobile performants.
          Rigueur acquise à la <span className="text-indigo-400 font-semibold">Présidence de la République</span> et à la <span className="text-indigo-400 font-semibold">Banque Postale</span>.
        </p>
      </Section>

      {/* Tech Stack */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-400">Stack Technique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-indigo-400">
                {tech.icon}
              </div>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-400">Expérience</h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-hover:bg-indigo-600 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-indigo-400 rounded-full" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="font-bold text-lg text-white">{exp.role}</h4>
                  <span className="text-sm text-indigo-400 font-mono bg-indigo-500/10 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-300 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-400">Projets Récents</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={project.link} target="_blank" className="block">
              <Card className="group cursor-pointer h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg">
                    {project.icon}
                  </div>
                  <ExternalLink className="text-slate-500 group-hover:text-indigo-400 transition-colors" size={20} />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-2xl font-bold text-white mb-2">Josué Nanthakumar</h5>
              <p className="text-slate-400 max-w-md">
                Ouvert aux opportunités de freelance et de collaboration. N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <a href="mailto:njosue@outlook.fr" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
                <Mail size={18} />
                njosue@outlook.fr
              </a>
              <a href="tel:0667014515" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
                <Phone size={18} />
                06 67 01 45 15
              </a>
              <a href="https://linkedin.com/in/josuenanthakumar" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors">
                <Linkedin size={18} />
                Josué NANTHAKUMAR
              </a>
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin size={18} />
                Paris, France
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} Josué Nanthakumar. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}
