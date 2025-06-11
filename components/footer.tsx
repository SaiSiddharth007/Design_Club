export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-[#FF5500]"></div>
            <span className="text-sm font-bold uppercase tracking-widest">Design Club IIT T</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Home
            </a>
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              About
            </a>
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Disciplines
            </a>
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Projects
            </a>
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Contact
            </a>
          </div>
          <div className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} Design Club IIT T</div>
        </div>
      </div>
    </footer>
  )
}
