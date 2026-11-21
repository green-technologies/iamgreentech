import { Code2, Megaphone, type LucideIcon, Wrench } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'Fast, responsive, and accessible websites built on modern frameworks, tailored to your brand.',
    points: ['Custom design & UI', 'E-commerce & CMS', 'SEO-ready performance'],
  },
  {
    icon: Wrench,
    title: 'Business Software',
    description:
      'Custom tools and internal systems that automate workflows and scale with your business.',
    points: ['Workflow automation', 'Internal dashboards', 'Third-party integrations'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns that build your brand online and turn visitors into customers.',
    points: ['SEO & content strategy', 'Social media campaigns', 'Paid ads & analytics'],
  },
]

function Services() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            What we do
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services built for growth
          </p>
          <p className="mt-4 text-lg text-zinc-400">
            From your first line of code to your next campaign, we cover the full stack of
            your digital presence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-brand-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-zinc-400">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
