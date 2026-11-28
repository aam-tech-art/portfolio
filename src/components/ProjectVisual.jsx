import { cn } from '@/lib/utils'

// Project cards use a custom visual when a project has a distinctive product interface.
export default function ProjectVisual({ project, className }) {
  if (project.visual === 'dialwise') {
    return (
      <div className={cn('relative grid overflow-hidden bg-[#071413] p-[8%] text-[#e5f6f0]', className)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(38,211,190,0.28),transparent_38%),linear-gradient(135deg,#071413,#0c2522)]" />
        <div className="relative flex flex-col justify-between rounded-[0.7rem] border border-[#5de0cd]/30 bg-[#071413]/35 p-[7%]">
          <div className="flex items-center gap-2 text-[clamp(0.58rem,1.1vw,0.78rem)] font-bold tracking-[0.14em] text-[#7ce9da] uppercase"><span className="grid size-7 place-items-center rounded-lg bg-[#31d1bd] text-[#06312d]">↗</span> Dialwise</div>
          <div><p className="mb-2 text-[clamp(0.58rem,1vw,0.8rem)] font-semibold tracking-[0.18em] text-[#7ce9da] uppercase">Cold-calling CRM</p><strong className="block font-display text-[clamp(1.7rem,4vw,3.3rem)] leading-[0.9] tracking-[-0.06em]">Every lead.<br />Every follow-up.<br /><span className="text-[#31d1bd]">Right on time.</span></strong></div>
          <div className="flex flex-wrap gap-2 text-[clamp(0.46rem,0.82vw,0.63rem)] font-semibold text-white/70"><span className="rounded-full border border-white/15 px-2.5 py-1">LOCAL HOURS</span><span className="rounded-full border border-white/15 px-2.5 py-1">RETRIES</span><span className="rounded-full border border-white/15 px-2.5 py-1">FOLLOW-UPS</span></div>
        </div>
      </div>
    )
  }

  return <div className={cn('relative grid place-items-center', className)} style={{ background: project.gradient }}><span className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-bold text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.25)]">{project.title}</span></div>
}
