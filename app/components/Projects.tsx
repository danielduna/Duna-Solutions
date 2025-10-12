export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Projects</h2>
      <p className="text-slate-300 mb-6">
        Here are a few of the automation and infrastructure tools I’ve built recently.  
        More can be found on my <a href="https://github.com/dannyduna" className="text-blue-400 hover:underline">GitHub</a>.
      </p>

      <div className="space-y-6">
        <div className="border border-slate-700 p-4 rounded hover:border-blue-400 transition">
          <h3 className="text-xl font-semibold text-slate-200">PowerShell Automation Toolkit</h3>
          <p className="text-slate-400 text-sm mb-2">A collection of PowerShell scripts for automating Microsoft 365 and Azure tasks.</p>
          <a href="https://github.com/dannyduna" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
            View on GitHub →
          </a>
        </div>

        <div className="border border-slate-700 p-4 rounded hover:border-blue-400 transition">
          <h3 className="text-xl font-semibold text-slate-200">Endpoint Management Dashboard</h3>
          <p className="text-slate-400 text-sm mb-2">An internal web dashboard for monitoring device compliance and Intune policies.</p>
          <a href="https://github.com/dannyduna" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
