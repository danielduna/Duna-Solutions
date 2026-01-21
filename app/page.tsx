"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Home() {
  const [active, setActive] = useState("about");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ ref }) => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen text-slate-300 font-sans"
      style={{
        background:
          "linear-gradient(to bottom, #001a12 0%, #001a12 20%, #002018 60%, #001a12 100%)",
      }}
    >
      <aside className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-[45%] px-[9rem] py-20 z-20">
        <div>
          <h1
            className="text-[3rem] font-extrabold text-slate-50 tracking-tight leading-[1.1]"
            style={{
              fontFeatureSettings: '"ss03","cv02","cv11"',
              letterSpacing: "-0.02em",
            }}
          >
            Daniel Duna
          </h1>
          <h2
            className="text-slate-200 text-[1rem] font-semibold mt-3"
            style={{ letterSpacing: "-0.015em" }}
          >
            Microsoft 365 & Modern Workplace Engineer
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-md mt-6 text-[0.9rem]">
            I design, automate, and manage secure cloud infrastructures powered
            by Microsoft 365, Azure, and PowerShell.
          </p>

          <nav className="mt-12 flex flex-col space-y-5">
            {[
              { id: "about", label: "ABOUT", ref: aboutRef },
              { id: "experience", label: "EXPERIENCE", ref: experienceRef },
              { id: "projects", label: "PROJECTS", ref: projectsRef },
            ].map(({ id, label, ref }) => (
              <button
                key={id}
                onClick={() => scrollTo(ref)}
                className={`group flex items-center space-x-3 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all ${
                  active === id
                    ? "text-slate-100"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <span
                  className={`h-[1px] transition-all duration-500 ${
                    active === id
                      ? "bg-white w-12"
                      : "bg-slate-600 w-6 group-hover:w-10 group-hover:bg-slate-400"
                  }`}
                />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex space-x-7">
          <a
            href="https://github.com/danielduna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dannyduna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/dannyduna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </aside>

      <header className="md:hidden flex flex-col items-start px-6 pt-16 pb-12 w-full text-left">
        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
          Daniel Duna
        </h1>
        <h2 className="text-slate-300 text-base font-medium mt-2">
          Microsoft 365 & Modern Workplace Engineer
        </h2>
        <p className="text-slate-400 leading-relaxed max-w-md mt-4 text-[0.95rem]">
          I design, automate, and manage secure cloud infrastructures powered by
          Microsoft 365, Azure, and PowerShell.
        </p>

        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/danielduna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dannyduna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/dannyduna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </header>

      <main className="w-full md:ml-[45%] md:w-[55%] px-6 md:px-16 pt-0 md:py-32 space-y-48">
        <section id="about" ref={aboutRef} className="max-w-2xl space-y-6 relative">
          <div className="sticky top-0 -mx-6 px-6 py-3 bg-[#001a12]/60 backdrop-blur-md border-b border-white/5 z-10 md:hidden">
            <h2 className="text-[0.8rem] font-semibold tracking-[0.15em] text-slate-400 uppercase">
              ABOUT
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-[0.95rem] tracking-wide">
              I’m a Microsoft 365 & Modern Workplace Engineer passionate about
              building efficient, secure, and user-focused digital environments.
              My work sits at the intersection of collaboration, automation, and
              user experience — transforming how teams connect and get things
              done through modern Microsoft technologies.
            </p>

            <p className="text-slate-400 leading-relaxed text-[0.95rem] tracking-wide">
              Currently, I design and deliver solutions across the Microsoft 365
              ecosystem at Silicon Reef, specialising in SharePoint, Power
              Automate, and Microsoft Entra. I develop automation workflows,
              streamline business processes, and implement best-practice
              governance to help organisations simplify operations and work
              smarter in the cloud.
            </p>

            <p className="text-slate-400 leading-relaxed text-[0.95rem] tracking-wide">
              With a background spanning support, systems engineering, and
              consultancy, I bring a practical understanding of infrastructure
              together with a strategic approach to problem-solving. Whether
              optimising an existing environment or building something new, my
              goal is always the same — create modern workplaces that are
              intuitive, scalable, and built to empower people.
            </p>
          </motion.div>
        </section>

        <section id="experience" ref={experienceRef} className="max-w-3xl space-y-16 relative">
          <div className="sticky top-0 -mx-6 px-6 py-3 bg-[#001a12]/60 backdrop-blur-md border-b border-white/5 z-10 md:hidden">
            <h2 className="text-[0.8rem] font-semibold tracking-[0.15em] text-slate-400 uppercase">
              EXPERIENCE
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
			{
  date: "2026 — Present",
  role: "Microsoft 365 Specialist",
  company: "University of Birmingham",
  link: "https://www.birmingham.ac.uk/",
  description:
    "Working as a Microsoft 365 Specialist supporting and enhancing the University’s Microsoft 365 tenancy. Acting as a technical lead across service improvements and projects, with a focus on Intune device management, ServiceNow integration, Teams Rooms Pro, and knowledge article development. Supporting secure, scalable collaboration services across a large enterprise environment while ensuring governance, operational health, and user adoption across the M365 stack.",
  tags: [
    "Microsoft 365",
    "Intune",
    "ServiceNow",
    "Teams Rooms Pro",
    "Exchange Online",
    "SharePoint Online",
    "PowerShell",
    "Knowledge Articles",
    "Enterprise M365",
  ],
},
              {
                date: "2024 — 2025",
                role: "Microsoft 365 Support Analyst",
                company: "Silicon Reef",
                link: "https://siliconreef.co.uk/",
                description:
                  "Providing second and third-line consultancy and support to clients across the Microsoft 365 stack. Delivering SharePoint specialism, Intune management, Power Automate solutions, and PowerShell automation while ensuring collaboration, compliance, and operational efficiency across enterprise environments.",
                tags: [
                  "M365 Stack",
                  "PowerShell",
                  "Power Automate",
                  "SharePoint",
                  "Intune",
                  "JIRA",
                  "SPFX",
                  "JQL",
                  "CSS",
                ],
              },
              {
                date: "2021 — 2024",
                role: "Third Line Senior Technical Support",
                company: "Carter Jonas",
                link: "https://www.carterjonas.co.uk/",
                description:
                  "Provided 3rd-line support across a nationwide Microsoft 365 environment, leading complex incident resolution and acting as an escalation point for the IT support team. Managed Intune device deployments, automated processes with PowerShell, and supported hybrid Exchange and Active Directory environments. Collaborated closely with infrastructure teams to improve system reliability, streamline support operations, and enhance end-user experience.",
                tags: [
                  "M365 Stack",
                  "Azure AD/ADDS",
                  "Intune",
                  "PowerShell",
                  "Endpoint Manager",
                  "Exchange Online",
                ],
              },
              {
                date: "2019 — 2021",
                role: "Service Desk Analyst",
                company: "CDW",
                link: "https://www.cdw.com/",
                description:
                  "Provided advanced technical support across Windows, Office 365, Active Directory, and Citrix environments. Acted as a subject matter expert for key clients, collaborating with vendors to resolve complex issues. Led improvements to Service Desk processes and documentation, enhancing team efficiency and service quality.",
                tags: [
                  "Office 365",
                  "Windows Server",
                  "Active Directory",
                  "Citrix",
                  "PowerShell",
                  "Service Management",
                ],
              },
            ].map((job) => (
              <a
                key={job.company}
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-300 hover:bg-white/5 rounded-xl p-6"
              >
                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-6 md:gap-8 items-start">
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {job.date}
                  </p>
                  <div>
                    <h3 className="font-semibold text-[1rem] text-slate-100 flex items-center gap-2">
                      {job.role} · {job.company}
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                    <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[11px] font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(0,230,180,0.9), rgba(0,120,255,0.9))",
                            boxShadow: "0 0 10px rgba(0,180,180,0.3)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            <div className="pt-8 pl-0 md:pl-[150px]">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-100 text-[0.9rem] font-medium transition-all"
              >
                View Full Résumé
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="projects" ref={projectsRef} className="max-w-3xl space-y-10 relative">
          <div className="sticky top-0 -mx-6 px-6 py-3 bg-[#001a12]/60 backdrop-blur-md border-b border-white/5 z-10 md:hidden">
            <h2 className="text-[0.8rem] font-semibold tracking-[0.15em] text-slate-400 uppercase">
              PROJECTS
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[
              {
                title: "Oblivion Enchanting Altar",
                description:
                  "A web tool inspired by Oblivion’s enchanting system — built for fans preparing for the remaster. Lets players experiment with custom enchantments before jumping into the game. Built with React and TailwindCSS, deployed on Vercel.",
                img: "/oblivion-project-thumb.png",
                link: "https://www.oblivionenchantingaltar.com/",
                tags: [
                  "React",
                  "TailwindCSS",
                  "Vercel",
                  "UI/UX Design",
                  "JavaScript",
                  "Game Tools",
                ],
              },
              {
                title: "SPFx Events Webpart UI",
                description:
                  'Custom SharePoint Framework (SPFx) solution designed to hide the "Add Event" button on the default Events web part. Deployed to hub sites only for clean, centralised UI control.',
                img: "/sharepoint-sppkg-project-thumb.png",
                link: "https://github.com/danielduna/SPFX-Events-Webpart-UI",
                tags: [
                  "SPFx",
                  "React",
                  "TypeScript",
                  "SharePoint Online",
                  "CSS",
                  "Hub Sites",
                ],
              },
              {
                title: "Power Platform Automation Flows",
                description:
                  "A collection of Power Automate flows designed to streamline collaboration and automate Microsoft 365 processes — including Event Approvals, Viva Engage Praise, and Service Health Notifications.",
                img: "/power-platform-project-thumb.png",
                link: "https://github.com/danielduna/PowerPlatform-Projects",
                tags: [
                  "Git",
                  "Power Automate",
                  "SharePoint Online",
                  "Microsoft Graph",
                  "JSON",
                  "Automation",
                ],
              },
              {
                title: "PowerShell Automation Scripts",
                description:
                  "A curated collection of PowerShell scripts used for automating Microsoft 365 administration, Intune, SharePoint Online, and Azure tasks.",
                img: "/powershell-project-thumb.png",
                link: "https://github.com/danielduna/Powershell-Scripts",
                tags: [
                  "Git",
                  "PowerShell",
                  "Automation",
                  "Microsoft 365",
                  "Azure AD",
                  "Scripting",
                ],
              },
              {
                title: "Duna Solutions Portfolio",
                description:
                  "Personal portfolio built with Next.js, TypeScript, and TailwindCSS. Highlights professional experience and projects with a clean, responsive design.",
                img: "/icon.png",
                link: "https://github.com/danielduna/Duna-Solutions",
                tags: [
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Vercel",
                  "UI/UX Design",
                  "Responsive Design",
                  "Portfolio",
                ],
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl p-6 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
              >
                <div className="relative w-full md:w-[220px] h-[140px] overflow-hidden rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-100 font-semibold text-[1rem] flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-medium text-white rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0,230,180,0.9), rgba(0,120,255,0.9))",
                          boxShadow: "0 0 10px rgba(0,180,180,0.3)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

