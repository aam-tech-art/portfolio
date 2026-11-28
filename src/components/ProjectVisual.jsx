import { cn } from '@/lib/utils'

// Project cards use a custom visual when a project has a distinctive product interface.
export default function ProjectVisual({ project, className }) {
  if (project.visual === 'dialwise') {
    return (
      <div className={cn('relative overflow-hidden bg-[#071413] p-[7%] text-[#e5f6f0]', className)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(38,211,190,0.22),transparent_34%),linear-gradient(135deg,#071413,#0c2522)]" />
        <div className="relative flex h-full gap-[5%] rounded-[0.55rem] border border-[#5de0cd]/20 bg-[#0c201e]/90 p-[4%] shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
          <aside className="flex w-[21%] flex-col gap-[10%] border-r border-white/10 pr-[4%]">
            <span className="grid aspect-square w-[54%] place-items-center rounded-[30%] bg-[#31d1bd] text-[clamp(0.5rem,1.25vw,0.85rem)] font-black text-[#06312d]">⌕</span>
            <span className="h-[7%] w-full rounded-full bg-[#35d4c0]" />
            <span className="h-[7%] w-[78%] rounded-full bg-white/18" />
            <span className="h-[7%] w-[88%] rounded-full bg-white/18" />
            <span className="h-[7%] w-[62%] rounded-full bg-white/18" />
          </aside>
          <div className="flex min-w-0 flex-1 flex-col gap-[8%] pt-[1%]">
            <div className="flex items-center justify-between">
              <div><strong className="block text-[clamp(0.48rem,1.15vw,0.85rem)] tracking-tight">Call queue</strong><span className="text-[clamp(0.34rem,0.8vw,0.58rem)] text-white/55">Your next conversation</span></div>
              <span className="rounded-full bg-[#1f8b5e]/30 px-[4%] py-[1.5%] text-[clamp(0.3rem,0.7vw,0.5rem)] font-bold text-[#72e8ad]">READY NOW</span>
            </div>
            <div className="flex flex-1 gap-[4%]">
              <div className="flex w-[65%] flex-col rounded-[0.35rem] border border-white/10 bg-white/[0.035] p-[5%]">
                <span className="text-[clamp(0.3rem,0.7vw,0.5rem)] uppercase tracking-[0.12em] text-white/45">Founder · Brand design</span>
                <strong className="mt-[5%] text-[clamp(0.55rem,1.4vw,1rem)]">Maya Chen</strong>
                <span className="text-[clamp(0.34rem,0.8vw,0.58rem)] text-white/55">Northstar Studio · Manchester</span>
                <div className="mt-auto h-[8%] w-[75%] rounded-full bg-white/10" />
                <div className="mt-[5%] h-[8%] w-[58%] rounded-full bg-white/10" />
              </div>
              <div className="grid flex-1 grid-cols-1 gap-[7%]">
                {[['12', 'Follow-ups'], ['8', 'Calls today'], ['70', 'Active leads']].map(([value, label]) => <div key={label} className="rounded-[0.35rem] border border-white/10 bg-white/[0.035] p-[11%]"><strong className="block text-[clamp(0.55rem,1.35vw,0.95rem)]">{value}</strong><span className="text-[clamp(0.28rem,0.64vw,0.46rem)] text-white/55">{label}</span></div>)}
              </div>
            </div>
          </div>
        </div>
        <span className="absolute right-[7%] bottom-[7%] rounded-full border border-[#5de0cd]/30 bg-[#071413]/80 px-[3%] py-[1.5%] text-[clamp(0.34rem,0.75vw,0.55rem)] font-semibold tracking-[0.1em] text-[#83f0e0] uppercase">Live product demo</span>
      </div>
    )
  }

  return <div className={cn('relative grid place-items-center', className)} style={{ background: project.gradient }}><span className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-bold text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.25)]">{project.title}</span></div>
}
