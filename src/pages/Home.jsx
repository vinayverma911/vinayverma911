import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'
import iconLocation from '../assets/figma/icon-location.svg'
import profile from '../data/profile.json'

export default function Home() {
  const firstName = profile.name.split(' ')[0]

  return (
    <section className="bg-white px-6 py-16 md:px-20 md:py-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-12 px-2 md:flex-nowrap md:px-8">
        <div className="flex max-w-[768px] flex-col items-start justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-start gap-2">
            <p className="text-[36px] font-bold leading-tight tracking-tight text-gray-900 md:text-[60px] dark:text-gray-50">
              {`Hi, I'm ${firstName} \u{1F44B}`}
            </p>
            <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
              {'I build web products that hold up in the real world — from a hiring platform used by 1,200+ schools to a healthcare tool that helps patients book real appointments. My toolkit is '}
              <span className="font-medium text-gray-900 dark:text-gray-200">
                React and Node
              </span>
              {", but what I actually care about is shipping things that work well as more people start using them."}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <img src={iconLocation} alt="" aria-hidden="true" className="size-6" />
              <p className="text-[16px] text-gray-600 dark:text-gray-400">
                {profile.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
              <p className="text-[16px] text-gray-600 dark:text-gray-400">
                Open to new opportunities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/work"
              className="rounded-xl bg-gray-900 px-5 py-2.5 text-[16px] font-medium text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-white"
            >
              See my work
            </Link>
            <Link
              to="/contact"
              className="rounded-xl px-5 py-2.5 text-[16px] font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex flex-1 justify-end">
          <Avatar className="relative h-[300px] w-[280px] shrink-0 md:h-[320px] md:w-[280px]" />
        </div>
      </div>
    </section>
  )
}
