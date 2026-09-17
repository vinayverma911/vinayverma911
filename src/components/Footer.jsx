import iconCopyright from '../assets/figma/icon-copyright.svg'
import profile from '../data/profile.json'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white px-6 py-6 md:px-20 dark:bg-gray-900">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-2 px-2 md:px-8">
        <img src={iconCopyright} alt="" aria-hidden="true" className="size-4" />
        <p className="text-[14px] text-gray-600 dark:text-gray-400">
          {`${year} · Built with `}
          <span className="text-red-500">{'❤'}</span>
          {` by ${profile.name}`}
        </p>
      </div>
    </footer>
  )
}
