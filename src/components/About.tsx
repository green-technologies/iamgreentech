import { Clock, HeartHandshake, ShieldCheck, Target } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Results-focused',
    description: 'Every project is measured against the business outcome it was built for.',
  },
  {
    icon: HeartHandshake,
    title: 'True partnership',
    description: "We work as an extension of your team, not just an outside vendor.",
  },
  {
    icon: ShieldCheck,
    title: 'Reliable delivery',
    description: 'Clear timelines, transparent communication, and dependable support.',
  },
  {
    icon: Clock,
    title: 'Built to last',
    description: 'Modern, maintainable solutions that scale as your business grows.',
  },
]

function About() {
  return (
    <section id="about" className="bg-zinc-900/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-400">
              Why Green Technologies
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A technology partner that grows with you
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              We combine engineering expertise with marketing know-how to help businesses
              launch, scale, and stand out online. No jargon, no bloat — just solutions that
              work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
