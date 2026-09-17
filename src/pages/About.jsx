import Avatar from '../components/Avatar'
import profile from '../data/profile.json'

const checklist = [
  'B.Tech in Computer Science',
  `Full Stack Developer @ ${profile.employment.name}`,
  'Security-minded developer',
  'Loves building real-time features',
]

export default function About() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-20 md:py-24 dark:bg-gray-800">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-2 md:px-8">
        <span className="rounded-xl bg-gray-200 px-5 py-1 text-[14px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
          About me
        </span>

        <div className="flex w-full flex-wrap items-start gap-12">
          <div className="flex min-w-[300px] flex-1 justify-center">
            <Avatar className="relative h-[400px] w-[340px] md:h-[480px] md:w-[400px]" />
          </div>

          <div className="flex min-w-[300px] flex-1 flex-col items-start gap-6">
            <p className="text-[24px] font-semibold tracking-tight text-gray-900 md:text-[30px] dark:text-gray-50">
              Curious about me? Here you have it:
            </p>
            <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                {"I'm a Full Stack Developer who specializes in building with "}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  React, Angular, and Node.js
                </span>
                {
                  '. What I care about most is shipping products that just work — ones that hold up smoothly even as more people start using them, not just in a demo.'
                }
              </p>
              <p>
                {`I began my career in ${profile.employment.start} at ${profile.employment.name}, where I've spent the time since building and maintaining two production platforms: `}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  International School Services
                </span>
                {', a hiring platform used by international schools worldwide, and '}
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  Clearpath
                </span>
                {', a healthcare scheduling platform with live chat and an AI assistant that books appointments.'}
              </p>
              <p>
                I'm a progressive thinker who enjoys working on products end to end —
                from the big architecture calls down to the small details that keep
                everything secure and running smoothly.
              </p>
              <p>Finally, some quick bits about me:</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {checklist.map((item) => (
                  <ul key={item}>
                    <li className="ms-6 list-disc">{item}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
