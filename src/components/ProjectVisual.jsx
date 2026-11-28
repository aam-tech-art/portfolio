import { cn } from '@/lib/utils'

// Project cards use a custom visual when a project has a distinctive product interface.
export default function ProjectVisual({ project, className }) {
  if (project.visual === 'dialwise') {
    return (
      <div className={cn('relative grid overflow-hidden bg-[#edf9f6] p-[7%] text-[#102a28]', className)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(20,184,166,0.22),transparent_38%),linear-gradient(135deg,#f9fffd,#e1f7f1)]" />
        <div className="relative flex flex-col justify-between rounded-[0.7rem] border border-[#b8e4db] bg-white/85 p-[6%] shadow-[0_16px_35px_rgba(12,74,66,0.12)]">
          <div className="flex items-center gap-2 text-[clamp(0.5rem,0.9vw,0.68rem)] font-bold tracking-[0.14em] text-[#0f766e] uppercase"><span className="grid size-6 place-items-center rounded-lg bg-[#14b8a6] text-white">↗</span> Dialwise</div>
          <div><p className="mb-1.5 text-[clamp(0.48rem,0.75vw,0.65rem)] font-semibold tracking-[0.16em] text-[#0f766e] uppercase">Cold-calling CRM</p><strong className="block font-display text-[clamp(1.1rem,2vw,1.75rem)] leading-[0.92] tracking-[-0.05em]">Every lead.<br />Every follow-up.<br /><span className="text-[#0f9e8f]">Right on time.</span></strong></div>
          <div className="mt-5 flex flex-wrap gap-1.5 text-[clamp(0.38rem,0.62vw,0.52rem)] font-semibold text-[#35665f]"><span className="rounded-full border border-[#b8e4db] bg-[#f4fffc] px-2 py-0.5">LOCAL HOURS</span><span className="rounded-full border border-[#b8e4db] bg-[#f4fffc] px-2 py-0.5">RETRIES</span><span className="rounded-full border border-[#b8e4db] bg-[#f4fffc] px-2 py-0.5">FOLLOW-UPS</span></div>
        </div>
      </div>
    )
  }

  return <div className={cn('relative grid place-items-center', className)} style={{ background: project.gradient }}><span className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-bold text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.25)]">{project.title}</span></div>
}
