import { projects } from '../data.js'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import { Badge } from '@/components/ui/badge'
import { liftCard, zoomOnHover } from '@/lib/card'
import { cn } from '@/lib/utils'
import ProjectVisual from './ProjectVisual.jsx'

export default function Projects() {
  return (
    <section className="bg-linear-to-b from-pine-50/70 to-background/55 py-18 md:py-25" id="work">
      <div className="wrap">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects we're proud of"
          text="A look at the kinds of websites and apps we design and build."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} index={i % 2} className="flex">
              <article className={cn(liftCard, 'w-full')}>
                <div className="overflow-hidden">
                  <a href={/^https?:\/\//.test(p.link) ? p.link : undefined} target={/^https?:\/\//.test(p.link) ? '_blank' : undefined} rel={/^https?:\/\//.test(p.link) ? 'noopener noreferrer' : undefined} className={cn('relative block aspect-video', zoomOnHover)}>
                    <ProjectVisual project={p} className="h-full w-full" />
                    {/* Browser window dots */}
                    <div className="absolute top-3.5 left-4 flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-white/60" />
                      <span className="size-2.5 rounded-full bg-white/60" />
                      <span className="size-2.5 rounded-full bg-white/60" />
                    </div>
                  </a>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-1.5 text-[0.8rem] tracking-[0.1em] text-pine-600 uppercase">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t}>
                        <Badge variant="outline" className="rounded-full bg-secondary px-3 py-1 text-[0.8rem] font-normal text-muted-foreground">{t}</Badge>
                      </li>
                    ))}
                  </ul>
                  {/^https?:\/\//.test(p.link) && (
                    <a href={p.link} className="mt-5 inline-flex items-center font-semibold text-pine-600 pointer-coarse:min-h-11 hover:underline" target="_blank" rel="noopener noreferrer">
                      View project →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
