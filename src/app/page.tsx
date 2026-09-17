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
  Cpu,
  Container,
  Sparkles,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

// --- Data ---

const experiences = [
  {
    id: 1,
    role: "Développeur Fullstack Web & Mobile",
    company: "Polycea – EOVIA (groupe Polyconseil)",
    period: "Mars 2026 - Août 2026",
    description: "Développement d'applications mobiles Android (Kotlin) et web (React/TypeScript), intégration d'APIs backend en Java, et mise en place du pipeline CI/CD du projet mobile de A à Z. Livraison de fonctionnalités sur une plateforme utilisée par 109 communes françaises.",
    skills: ["Kotlin", "React", "TypeScript", "Java", "CI/CD"]
  },
  {
    id: 2,
    role: "Développeur Mobile & Web",
    company: "Présidence de la République",
    period: "Oct 2023 - Juin 2024",
    description: "Création et développement d'applications mobiles avec Flutter, intégration d'API et gestion de bases de données, avec un fort accent sur l'optimisation de l'expérience utilisateur.",
    skills: ["Flutter", "API REST", "SQL", "UX"]
  },
  {
    id: 3,
    role: "Assistant Ingénieur IT",
    company: "La Banque Postale",
    period: "Juil 2022 - Déc 2022",
    description: "Automatisation des processus de gestion des accès (Python/PowerShell) et collaboration avec les équipes cybersécurité pour le respect des normes bancaires.",
    skills: ["Python", "PowerShell", "IAM", "Cybersécurité"]
  }
];

const education = [
  {
    id: 1,
    school: "EPITECH Paris - France",
    period: "2021 - 2026",
    degree: "Expert en Ingénierie Informatique — Titre RNCP niveau 7 (Bac+5)"
  },
  {
    id: 2,
    school: "Université Laval - Québec, Canada",
    period: "2024 - 2025",
    degree: "Programme d'Échange — Génie Logiciel et Informatique"
  }
];

const projects = [
  {
    id: 1,
    title: "Gestion de Tâches — SaaS Premium",
    description: "Refonte complète de l'expérience utilisateur d'un gestionnaire de tâches, avec un tableau de bord Kanban interactif et un mode sombre.",
    tags: ["Node.js", "Express", "MySQL", "EJS"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Premium-Task-Manager",
    icon: <Server className="w-6 h-6 text-indigo-600" />
  },
  {
    id: 2,
    title: "Automatisation Mobile",
    description: "Application d'automatisation SaaS avec interface Glassmorphism/Dark Mode et animations fluides, optimisée pour le Web et le Mobile.",
    tags: ["Flutter", "Dart", "Python"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Mobile-Automation-App",
    icon: <Smartphone className="w-6 h-6 text-indigo-600" />
  },
  {
    id: 3,
    title: "SaaS-Ready-Premium-Booking-Platform",
    description: "Une solution de réservation complète pour les entreprises modernes.",
    tags: ["JavaScript", "SaaS", "Booking"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-Premium-Booking-Platform",
    icon: <Database className="w-6 h-6 text-indigo-600" />
  },
  {
    id: 4,
    title: "Assistant IA SaaS",
    description: "Assistant conversationnel SaaS avec intégration native de l'API Google Gemini via le Vercel AI SDK.",
    tags: ["Next.js 14", "TypeScript", "Gemini API"],
    link: "https://github.com/JosueNANTHAKUMAR/SaaS-Ready-AI-Assistant",
    icon: <Cpu className="w-6 h-6 text-indigo-600" />
  }
];

const techStack = [
  { name: "React.js / Next.js", icon: <Code2 /> },
  { name: "Flutter / Dart", icon: <Smartphone /> },
  { name: "Kotlin / Android", icon: <Sparkles /> },
  { name: "Node.js / Supabase", icon: <Server /> },
  { name: "Java", icon: <Cpu /> },
  { name: "Tailwind CSS", icon: <Code2 /> },
  { name: "OpenAI API", icon: <Database /> },
  { name: "Github / Docker", icon: <Container /> },
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
  <div className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-200/60">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-50 flex items-center justify-center border-2 border-indigo-200 overflow-hidden shadow-sm">
            {/* Placeholder for Profile Picture */}
            <span className="text-4xl text-indigo-600 font-semibold">JN</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-slate-50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mb-4"
        >
          Josué Nanthakumar.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-600 mb-4 max-w-2xl"
        >
          Développeur Full Stack Web & Mobile
        </motion.h2>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8 px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
        >
          En recherche d&apos;un CDI — Diplômé EPITECH (Bac+5)
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <Link
            href="mailto:josue.nanthakumar@epitech.eu"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-sm"
          >
            <Mail size={20} />
            Me contacter
          </Link>
          <Link
            href="https://github.com/JosueNANTHAKUMAR"
            target="_blank"
            className="px-8 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-medium transition-all flex items-center gap-2 border border-slate-200 shadow-sm"
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
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <Section className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-indigo-600">À propos</h3>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Diplômé d&apos;<span className="text-indigo-600 font-semibold">Epitech</span> (Bac+5), enrichi par un échange académique à l&apos;Université Laval (Québec)
          et une dernière expérience chez <span className="text-indigo-600 font-semibold">Polycea-EOVIA</span> où j&apos;ai livré des fonctionnalités mobiles et web
          utilisées par 109 communes françaises. Passionné par le code propre, je transforme des idées en produits Web & Mobile performants,
          avec la rigueur acquise à la <span className="text-indigo-600 font-semibold">Présidence de la République</span> et à la <span className="text-indigo-600 font-semibold">Banque Postale</span>.
        </p>
      </Section>

      {/* Tech Stack */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-600">Stack Technique</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="text-indigo-600">
                {tech.icon}
              </div>
              <span className="font-medium text-slate-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-600">Expérience</h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-300 before:to-transparent">
          {experiences.map((exp) => (
            <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white group-hover:bg-indigo-600 transition-colors shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-indigo-500 group-hover:bg-white rounded-full transition-colors" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h4 className="font-bold text-lg text-slate-900">{exp.role}</h4>
                  <span className="text-sm text-indigo-600 font-mono bg-indigo-50 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <div className="text-slate-500 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-600 text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
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
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-600">Projets Récents</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={project.link} target="_blank" className="block">
              <Card className="group cursor-pointer h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    {project.icon}
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={20} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section>
        <h3 className="text-3xl font-bold mb-12 text-center text-indigo-600">Formation</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <Card key={edu.id} className="flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-sm text-indigo-600 font-mono bg-indigo-50 px-2 py-1 rounded">{edu.period}</span>
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">{edu.school}</h4>
              <p className="text-slate-600 text-sm">{edu.degree}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-2xl font-bold text-slate-900 mb-2">Josué Nanthakumar</h5>
              <p className="text-slate-600 max-w-md">
                En recherche d&apos;un CDI. N&apos;hésitez pas à me contacter pour échanger sur une opportunité.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <a href="mailto:josue.nanthakumar@epitech.eu" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                <Mail size={18} />
                josue.nanthakumar@epitech.eu
              </a>
              <a href="tel:0667014515" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                <Phone size={18} />
                06 67 01 45 15
              </a>
              <a href="https://linkedin.com/in/josuenanthakumar" target="_blank" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={18} />
                Josué NANTHAKUMAR
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                Paris, France
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Josué Nanthakumar. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  );
}
