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

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen text-slate-300 font-sans"
      style={{
  background: "linear-gradient(to bottom, #001a12 0%, #001a12 20%, #002018 60%, #001a12 100%)",
}}
    >
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-[45%] px-[9rem] py-20 z-20">
        <div>
          <h1 className="text-[3rem] font-extrabold text-slate-50 tracking-tight leading-[1.1]"
            style={{ fontFeatureSettings: '"ss03","cv02","cv11"', letterSpacing: "-0.02em" }}>
            Daniel Duna
          </h1>
          <h2 className="text-slate-200 text-[1rem] font-semibold mt-3"
            style={{ letterSpacing: "-0.015em" }}>
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
          <a href="https://github.com/danielduna" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/dannyduna/" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/dannyduna" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition hover:-translate-y-1">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* MOBILE HERO */}
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
          <a href="https://github.com/danielduna" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/dannyduna/" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/dannyduna" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full md:ml-[45%] md:w-[55%] px-6 md:px-16 pt-0 md:py-32 space-y-48">

        {/* ABOUT */}
        <section id="about" ref={aboutRef} className="max-w-2xl space-y-6 relative">
          {/* mobile sticky header */}
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

        {/* EXPERIENCE */}
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
                date: "2024 — Present",
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
                href={job.link || "#"}
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
                      {job.link && (
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
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

        {/* PROJECTS */}
<section id="projects" ref={projectsRef} className="max-w-3xl space-y-10 relative">
  {/* mobile sticky header */}
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
    {/* Oblivion Enchanting Altar */}
    <a
      href="https://www.oblivionenchantingaltar.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl p-6 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full md:w-[220px] h-[140px] overflow-hidden rounded-lg">
        <img
          src="/oblivion-project-thumb.png"
          alt="Oblivion Enchanting Altar"
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-slate-100 font-semibold text-[1rem] flex items-center gap-2">
          Oblivion Enchanting Altar
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
          A web tool inspired by Oblivion’s enchanting system — built for fans
          preparing for the remaster. Lets players experiment with custom
          enchantments before jumping into the game, showing power, cost, and
          impact. Built with React and TailwindCSS, deployed on Vercel, and
          designed for responsiveness and immersive UI/UX.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "React",
            "TailwindCSS",
            "Vercel",
            "UI/UX Design",
            "JavaScript",
            "Game Tools",
          ].map((tag) => (
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

    {/* SPFx Project */}
    <a
      href="https://github.com/danielduna/SPFX-Events-Webpart-UI"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl p-6 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full md:w-[220px] h-[140px] overflow-hidden rounded-lg">
        <img
          src="/sharepoint-sppkg-project-thumb.png"
          alt="SPFx Events Webpart"
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-slate-100 font-semibold text-[1rem] flex items-center gap-2">
          SPFx Events Webpart UI
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
          Custom SharePoint Framework (SPFx) solution designed to hide the "Add
          Event" button on the default Events web part. Deployed to hub sites
          only — preventing propagation to associated sites and ensuring clean,
          centralised UI control.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "SPFx",
            "React",
            "TypeScript",
            "SharePoint Online",
            "CSS",
            "Hub Sites",
          ].map((tag) => (
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

    {/* Power Platform */}
    <a
      href="https://github.com/danielduna/PowerPlatform-Projects"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl p-6 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full md:w-[220px] h-[140px] overflow-hidden rounded-lg">
        <img
          src="/power-platform-project-thumb.png"
          alt="Power Platform Projects"
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-slate-100 font-semibold text-[1rem] flex items-center gap-2">
          Power Platform Automation Flows
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
          A collection of Power Automate flows designed to streamline
          collaboration and automate Microsoft 365 processes — including Event
          Approvals, Viva Engage Praise, and Service Health Notifications. Each
          is fully documented and ready to import.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Git",
            "Power Automate",
            "SharePoint Online",
            "Microsoft Graph",
            "JSON",
            "Approvals",
            "Automation",
          ].map((tag) => (
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

    {/* PowerShell Scripts */}
    <a
      href="https://github.com/danielduna/Powershell-Scripts"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl p-6 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full md:w-[220px] h-[140px] overflow-hidden rounded-lg">
        <img
          src="/powershell-project-thumb.png"
          alt="PowerShell Scripts Repository"
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-slate-100 font-semibold text-[1rem] flex items-center gap-2">
          PowerShell Automation Scripts
          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-slate-400 leading-relaxed mt-2 text-[0.9rem]">
          A curated collection of PowerShell scripts written over the years —
          used for automating Microsoft 365 administration, Intune, SharePoint
          Online, and Azure tasks. Includes reusable functions, environment
          tools, and workflow automation examples.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {[
            "Git",
            "PowerShell",
            "Automation",
            "Microsoft 365",
            "Azure AD",
            "SharePoint Online",
            "Scripting",
          ].map((tag) => (
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
  </motion.div>
</section>
      </main>
    </div>
  );
}

