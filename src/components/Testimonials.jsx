import { useState } from 'react'
import { StarIcon } from 'lucide-react'
import { googleReviews, testimonials, visible } from '../data.js'
import SectionHeader from './SectionHeader.jsx'
import SampleTag from './SampleTag.jsx'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

function ReviewCard({ review, onReadMore, clone = false }) {
  const needsMore = review.quote.length > 170
  return (
    <figure className="m-0 flex h-[255px] w-[min(410px,calc(100vw-3rem))] flex-none flex-col rounded-xl border border-pine-800/10 bg-card/95 p-6 shadow-[0_12px_30px_rgba(11,43,38,0.08)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex gap-0.5 text-amber-500" role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => <StarIcon key={index} aria-hidden="true" className={`size-4 ${index < review.rating ? 'fill-current' : 'opacity-30'}`} />)}
        </div>
        {review.sample && <SampleTag />}
      </div>
      <blockquote className="m-0 text-[0.97rem] leading-relaxed text-foreground">
        <span className={needsMore ? 'line-clamp-4' : undefined}>“{review.quote}”</span>
      </blockquote>
      {needsMore && (
        <button type="button" tabIndex={clone ? -1 : undefined} onClick={() => !clone && onReadMore(review)} className="mt-2 w-fit text-[0.88rem] font-semibold text-pine-600 underline decoration-pine-600/30 underline-offset-4 transition-colors hover:text-primary">
          Read more
        </button>
      )}
      <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        <span aria-hidden="true" className="grid size-10 flex-none place-items-center rounded-full bg-linear-135 from-primary to-pine-600 text-sm font-bold text-primary-foreground">{initials(review.name)}</span>
        <span className="flex min-w-0 flex-col"><span className="truncate font-semibold text-foreground">{review.name}</span><span className="text-[0.85rem] text-muted-foreground">{review.role}</span></span>
      </figcaption>
    </figure>
  )
}

// Google reviews shown as a slow, continuous carousel. The second copy makes the loop seamless.
export default function Testimonials() {
  const items = visible(testimonials)
  const [selectedReview, setSelectedReview] = useState(null)
  if (items.length === 0) return null

  return (
    <section className="py-18 md:py-25" id="testimonials">
      <div className="wrap">
        <SectionHeader
          eyebrow="Google reviews"
          title="What the reviews say"
          text="Words shared on our Google Business Profile."
        />
        <a href={googleReviews.href} target="_blank" rel="noopener noreferrer" className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-4 py-2 text-[0.9rem] font-semibold text-foreground transition-colors hover:bg-amber-100">
          <StarIcon aria-hidden="true" className="size-4 fill-amber-500 text-amber-500" />
          {googleReviews.rating} on Google · {googleReviews.count} reviews
        </a>
        <div className="group/reviews -mx-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max [animation:review-marquee_55s_linear_infinite] group-hover/reviews:[animation-duration:130s] motion-reduce:animate-none">
            {[false, true].map((clone) => (
              <div key={String(clone)} aria-hidden={clone || undefined} className="flex shrink-0 gap-5 pr-5">
                {items.map((review, index) => <ReviewCard key={`${clone}-${review.name}-${index}`} review={review} onReadMore={setSelectedReview} clone={clone} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={Boolean(selectedReview)} onOpenChange={(open) => !open && setSelectedReview(null)}>
        <DialogContent className="max-w-xl bg-card p-7">
          <DialogTitle className="font-display text-[1.4rem]">{selectedReview?.name}'s Google review</DialogTitle>
          <DialogDescription className="sr-only">The complete review from {selectedReview?.name}</DialogDescription>
          <div className="flex gap-0.5 text-amber-500" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <StarIcon key={index} aria-hidden="true" className="size-5 fill-current" />)}</div>
          <p className="mb-0 text-[1rem] leading-relaxed text-foreground">“{selectedReview?.quote}”</p>
        </DialogContent>
      </Dialog>
    </section>
  )
}
