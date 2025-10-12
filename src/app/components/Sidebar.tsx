"use client";

import React from "react";

export default function Sidebar() {
  return (
    <aside className="md:fixed md:top-0 md:left-0 md:h-screen md:w-1/3 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-200 p-10 flex flex-col justify-between">
      {/* Top Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Daniel Duna
          </h1>
          <h2 className="text-lg text-sky-400 mt-2 font-medium">
            Cloud & Microsoft 365 Engineer
          </h2>
        </div>

        <p className="text-slate-400 leading-relaxed max-w-xs">
          I design, automate, and manage secure cloud infrastructures powered by
          Microsoft 365, Azure, and PowerShell.
        </p>

        {/* Navigation */}
        <nav className="mt-10 space-y-4 text-sm tracking-wide">
          <a
            href="#about"
            className="block text-slate-300 hover:text-white transition-colors"
          >
            — About
          </a>
          <a
            href="#experience"
            className="block text-slate-300 hover:text-white transition-colors"
          >
            — Experience
          </a>
          <a
            href="#projects"
            className="block text-slate-300 hover:text-white transition-colors"
          >
            — Projects
          </a>
          <a
            href="#contact"
            className="block text-slate-300 hover:text-white transition-colors"
          >
            — Contact
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex gap-5 text-slate-400 mt-10">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:someone@example.com"
          className="hover:text-sky-400 transition-colors"
        >
          Email
        </a>
      </div>
    </aside>
  );
}
