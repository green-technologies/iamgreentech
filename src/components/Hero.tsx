import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-600 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-500 opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400">
          <Sparkles className="h-4 w-4" />
          Building digital growth, sustainably
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Technology solutions that help your business{' '}
          <span className="text-brand-400">grow</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Green Technologies partners with ambitious companies to design websites, build
          business software, and run digital marketing that delivers real results.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-black shadow-lg shadow-brand-500/20 transition-colors hover:bg-brand-400"
          >
            Start your project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-zinc-200 transition-colors hover:border-brand-400/50 hover:text-brand-400"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
