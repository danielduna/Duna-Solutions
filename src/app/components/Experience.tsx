export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Cloud & Microsoft 365 Engineer — Freelance / Consultant
          </h3>
          <p className="text-slate-400 text-sm mb-2">2021 — Present</p>
          <p className="text-slate-300 leading-relaxed">
            Delivering Microsoft 365, Azure, and Power Platform solutions for small businesses.
            Specializing in automation using PowerShell and streamlining identity, compliance,
            and device management across hybrid environments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Systems Engineer — Various UK Clients
          </h3>
          <p className="text-slate-400 text-sm mb-2">2018 — 2021</p>
          <p className="text-slate-300 leading-relaxed">
            Provided technical support, infrastructure upgrades, and Microsoft cloud migrations.
            Developed internal tools and scripts to automate onboarding, mailbox management,
            and system monitoring.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-slate-300 mt-2">
            <li>Microsoft Certified: Azure Administrator Associate</li>
            <li>Microsoft 365 Certified: Modern Desktop Administrator Associate</li>
            <li>ITIL Foundation Certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
