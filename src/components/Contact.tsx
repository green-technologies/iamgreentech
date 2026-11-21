import { ArrowUpRight, Mail } from 'lucide-react'

const CONTACT_EMAIL = 'info@iamgreen.tech'

function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-gradient-to-br from-brand-700 to-brand-900 px-8 py-16 text-center sm:px-16">
          <div
            className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-400 opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-950 opacity-40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something great together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">
              Tell us about your project and we'll get back to you with how Green
              Technologies can help.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
