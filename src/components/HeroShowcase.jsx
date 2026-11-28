import { useState } from 'react'
import { projects } from '../data.js'
import { cn } from '@/lib/utils'

// Decorative visual beside the home headline: a laptop and a phone showing mini previews
// of our project sites, with a few floating badges. Built in HTML/CSS so it stays sharp
// and follows the site's colours; screen readers skip it.
const BADGES = [
  { icon: <path d="M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />, title: '24h', text: 'Reply time', place: 'top-0 right-0' },
  { icon: <path d="M4 5h16v11H4zM8 20h8M12 16v4" />, title: '100%', text: 'Responsive builds', place: 'top-[44%] -right-[4%] [animation-delay:-2s]' },
  { icon: <path d="M5 12l4 4L19 6" />, title: 'End-to-end', text: 'Design to launch', place: 'bottom-0 left-[32%] [animation-delay:-4s]' },
]

// A tiny website, twice as tall as its screen. Hovering the device (group/device) scrolls
// it slowly to the bottom, like someone browsing the site, and back up when the mouse leaves.
function MiniSite({ project, compact = false, scrolled = false }) {
  const block = 'block rounded-md border border-border'
  return (
    <div className="h-full overflow-hidden">
      <div className={cn('flex h-[200%] flex-col gap-[2%] px-[5%] py-[2.5%] transition-transform duration-[1.2s] ease-[cubic-bezier(0.45,0,0.25,1)] *:flex-none group-hover/device:-translate-y-1/2 group-hover/device:duration-[4s] motion-reduce:transition-none', scrolled && '-translate-y-1/2 duration-[4s]')}>
        <div className="flex h-[4%] items-center justify-between">
          <span className="h-2 w-[18%] rounded bg-primary" />
          {!compact && (
            <span className="flex gap-1.5">
              <i className="block h-1.5 w-[22px] rounded-[3px] bg-border" />
              <i className="block h-1.5 w-[22px] rounded-[3px] bg-border" />
              <i className="block h-1.5 w-[22px] rounded-[3px] bg-border" />
            </span>
          )}
        </div>
        <div className="flex h-[30%] flex-col justify-center rounded-lg p-[6%] text-white" style={{ background: project.gradient }}>
          <strong className={cn('font-display font-bold', compact ? 'text-[0.6rem]' : 'text-[clamp(0.8rem,1.6vw,1.2rem)]')}>{project.title}</strong>
          <span className={cn('opacity-85', compact ? 'text-[0.45rem]' : 'text-[0.6rem]')}>{project.category}</span>
          <i className={cn('mt-[6%] block rounded-md bg-white/85', compact ? 'h-1.5 w-[40%]' : 'h-2.5 w-[30%]')} />
        </div>
        <div className={cn('grid h-[14%] gap-[4%]', compact ? 'grid-cols-2' : 'grid-cols-3')}>
          <i className={cn(block, 'bg-secondary')} />
          <i className={cn(block, 'bg-secondary')} />
          {!compact && <i className={cn(block, 'bg-secondary')} />}
        </div>
        <div className="flex h-[12%] flex-col justify-center gap-[14%]">
          <i className="block h-[16%] w-[70%] rounded bg-primary opacity-70" />
          <i className="block h-[16%] w-[92%] rounded bg-border" />
          <i className="block h-[16%] w-[60%] rounded bg-border" />
        </div>
        <div className={cn('grid h-[14%] gap-[4%]', compact ? 'grid-cols-2' : 'grid-cols-3')}>
          <i className={cn(block, 'bg-pine-600/10')} />
          <i className={cn(block, 'bg-pine-600/10')} />
          {!compact && <i className={cn(block, 'bg-pine-600/10')} />}
        </div>
        <div className="h-[9%] rounded-lg opacity-90" style={{ background: project.gradient }} />
        <div className="h-[5%] rounded-md bg-pine-800" />
      </div>
    </div>
  )
}

function DialwiseMiniSite({ compact = false, scrolled = false }) {
  if (compact) {
    return (
      <div className="h-full overflow-hidden bg-[#f5fffc] text-[#163832]">
        <div className={cn('flex h-[200%] flex-col gap-[3%] p-[7%] transition-transform duration-[1.2s] ease-[cubic-bezier(0.45,0,0.25,1)] *:flex-none group-hover/device:-translate-y-1/2 group-hover/device:duration-[4s] motion-reduce:transition-none', scrolled && '-translate-y-1/2 duration-[4s]')}>
          <header className="flex h-[4%] items-center justify-between"><strong className="font-display text-[0.48rem] tracking-tight text-[#0f766e]">⌕ Dialwise</strong><i className="block h-1.5 w-5 rounded-full bg-[#d8eee9]" /></header>
          <section className="flex h-[25%] flex-col justify-center rounded-md border border-[#b8e4db] bg-white p-[8%] shadow-[0_5px_16px_rgba(15,118,110,0.09)]"><span className="text-[0.37rem] font-bold tracking-[0.1em] text-[#0f766e] uppercase">Cold-calling CRM</span><strong className="mt-[8%] font-display text-[0.63rem] leading-[1.1]">Call at the right time.</strong><span className="mt-[10%] w-fit rounded-full bg-[#14b8a6] px-[8%] py-[4%] text-[0.36rem] font-bold text-white">Open →</span></section>
          <section className="h-[25%] rounded-md border border-[#d8eee9] bg-white p-[7%]"><div className="mb-[9%] flex justify-between text-[0.42rem] font-bold"><span>Call queue</span><span className="text-[#0f766e]">View all</span></div>{['Ready now', 'Retry later', 'Follow-up'].map((item, index) => <div key={item} className="mb-[8%] flex items-center gap-[7%]"><i className={cn('block size-1.5 rounded-full', index === 0 ? 'bg-[#14b8a6]' : 'bg-[#cbe8e2]')} /><span className="text-[0.36rem] text-[#52736d]">{item}</span></div>)}</section>
          <section className="grid h-[13%] grid-cols-2 gap-[6%]"><div className="rounded-md bg-[#e6f8f4] p-[10%]"><strong className="block text-[0.55rem]">12</strong><span className="text-[0.32rem] text-[#52736d]">Follow-ups</span></div><div className="rounded-md bg-[#e6f8f4] p-[10%]"><strong className="block text-[0.55rem]">70</strong><span className="text-[0.32rem] text-[#52736d]">Active leads</span></div></section>
          <section className="flex h-[22%] flex-col justify-center rounded-md bg-[#0f766e] p-[8%] text-white"><span className="text-[0.34rem] font-bold tracking-[0.1em] text-[#a7f3e8] uppercase">Never miss a follow-up</span><strong className="mt-[7%] text-[0.53rem] leading-[1.25]">Retries and next steps stay organised.</strong></section>
          <div className="h-[5%] rounded-md bg-[#d7f1eb]" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-hidden bg-[#f5fffc] text-[#163832]">
      <div className={cn('flex h-[200%] flex-col gap-[3%] p-[5%] transition-transform duration-[1.2s] ease-[cubic-bezier(0.45,0,0.25,1)] *:flex-none group-hover/device:-translate-y-1/2 group-hover/device:duration-[4s] motion-reduce:transition-none', scrolled && '-translate-y-1/2 duration-[4s]')}>
        <header className="flex h-[5%] items-center justify-between border-b border-[#d8eee9] pb-[2%]"><strong className="font-display text-[clamp(0.58rem,1.2vw,0.9rem)] tracking-tight text-[#0f766e]">⌕ Dialwise</strong><span className="rounded-full bg-[#d7f1eb] px-[4%] py-[1%] text-[0.5rem] font-bold tracking-wide text-[#0f766e]">CRM</span></header>
        <section className="flex h-[27%] flex-col justify-center rounded-lg border border-[#b8e4db] bg-white p-[7%] shadow-[0_8px_20px_rgba(15,118,110,0.08)]"><span className="text-[0.6rem] font-semibold tracking-[0.13em] text-[#0f766e] uppercase sm:text-[0.7rem] sm:tracking-[0.16em]">Cold-calling CRM</span><strong className="mt-[5%] font-display text-[clamp(0.7rem,1.35vw,1.15rem)] leading-[1.05]">Call leads at the right time, every time.</strong><span className="mt-[7%] w-fit rounded-full bg-[#14b8a6] px-[7%] py-[3%] text-[0.5rem] font-bold text-white sm:text-[0.62rem]">Open workspace →</span></section>
        <section className="h-[22%] rounded-lg border border-[#d8eee9] bg-white p-[5%]"><div className="mb-[7%] flex justify-between"><strong className="text-[clamp(0.6rem,1.2vw,0.9rem)]">Call queue</strong><span className="text-[0.65rem] font-semibold text-[#0f766e]">View all</span></div>{['Ready for follow-up', 'Scheduled callback', 'New lead'].map((item, index) => <div key={item} className="mb-[4%] flex items-center gap-[4%]"><i className={cn('block size-[0.52rem] rounded-full', index === 0 ? 'bg-[#14b8a6]' : 'bg-[#cbe8e2]')} /><span className="text-[0.68rem] text-[#52736d]">{item}</span></div>)}</section>
        <section className="grid h-[15%] grid-cols-3 gap-[4%]">{[['12', 'Follow-ups'], ['8', 'Calls'], ['70', 'Leads']].map(([value, label]) => <div key={label} className="rounded-md bg-[#e6f8f4] p-[12%]"><strong className="block text-[clamp(0.65rem,1.3vw,1rem)]">{value}</strong><span className="text-[0.5rem] text-[#52736d]">{label}</span></div>)}</section>
        <section className="flex h-[20%] flex-col justify-center rounded-lg bg-[#0f766e] p-[6%] text-white"><span className="text-[0.62rem] font-bold tracking-[0.12em] text-[#a7f3e8] uppercase">Stay on track</span><strong className="mt-[4%] text-[clamp(0.65rem,1.2vw,0.9rem)] leading-tight">Retries wait their gap and follow-ups never slip.</strong></section>
        <footer className="h-[6%] rounded-md bg-[#d7f1eb]" />
      </div>
    </div>
  )
}

export default function HeroShowcase() {
  const [main, second] = projects
  const [previewScrolled, setPreviewScrolled] = useState(false)
  const togglePreview = () => setPreviewScrolled((isScrolled) => !isScrolled)
  const handlePreviewKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      togglePreview()
    }
  }

  return (
    <div
      className="relative aspect-[4/3] w-full justify-self-center sm:aspect-[5/4] sm:max-w-[520px] lg:max-w-[560px] lg:justify-self-end"
    >
      {/* Laptop: screen + base */}
      <div className="group/device absolute inset-[4%_0_10%_10%] sm:inset-[6%_2%_12%_17%]">
        <button type="button" onClick={togglePreview} onKeyDown={handlePreviewKeyDown} aria-pressed={previewScrolled} aria-label="Scroll the Dialwise preview" className="absolute inset-[0_0_6%] cursor-pointer overflow-hidden rounded-[14px_14px_4px_4px] border-[7px] border-pine-800 bg-card text-left shadow-[0_30px_60px_-30px_rgba(5,31,32,0.55)] sm:border-[10px]">
          {main.visual === 'dialwise' ? <DialwiseMiniSite scrolled={previewScrolled} /> : <MiniSite project={main} scrolled={previewScrolled} />}
        </button>
        <div className="absolute -inset-x-[6%] bottom-0 h-[6%] rounded-[2px_2px_14px_14px] bg-linear-to-b from-primary to-pine-800" />
      </div>

      {/* Phone, floating gently in front of the laptop */}
      {second && (
        <button type="button" onClick={togglePreview} onKeyDown={handlePreviewKeyDown} aria-pressed={previewScrolled} aria-label="Scroll the Dialwise mobile preview" className="group/device absolute bottom-0 left-0 aspect-[9/18] w-[22%] animate-float-slow cursor-pointer overflow-hidden rounded-[14px] border-4 border-pine-800 bg-card text-left shadow-[0_24px_40px_-20px_rgba(5,31,32,0.55)] sm:w-[27%] sm:rounded-[18px] sm:border-[6px] motion-reduce:animate-none">
          {main.visual === 'dialwise' ? <DialwiseMiniSite compact scrolled={previewScrolled} /> : <MiniSite project={second} compact scrolled={previewScrolled} />}
        </button>
      )}

      {/* Floating badges (hidden on phones) */}
      {BADGES.map((b) => (
        <div
          key={b.title}
          className={cn(
            'absolute hidden animate-float items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[0_16px_30px_-18px_rgba(5,31,32,0.45)] sm:flex motion-reduce:animate-none',
            b.place,
          )}
        >
          <svg viewBox="0 0 24 24" className="size-[30px] rounded-lg bg-pine-600/10 fill-none stroke-current stroke-2 p-1.5 text-primary [stroke-linecap:round] [stroke-linejoin:round]">
            {b.icon}
          </svg>
          <div>
            <strong className="block font-display text-[0.95rem] font-bold text-foreground">{b.title}</strong>
            <span className="block text-[0.72rem] text-muted-foreground">{b.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
