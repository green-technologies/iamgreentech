import { Leaf } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-black">
            <Leaf className="h-4 w-4" strokeWidth={2.5} />
          </span>
          Green Technologies
        </a>

        <p className="text-sm text-zinc-500">
          &copy; {year} Green Technologies. All rights reserved.
        </p>

        <a
          href="mailto:info@iamgreen.tech"
          className="text-sm font-medium text-zinc-400 hover:text-brand-400"
        >
          info@iamgreen.tech
        </a>
      </div>
    </footer>
  )
}

export default Footer
