import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import iconExternalLink from '../assets/figma/icon-external-link.svg'
import profile from '../data/profile.json'

const projectCopy = {
  Clearpath: {
    description:
      "A healthcare scheduling platform I help build. Patients can message their care team instantly and use a smart assistant to book the next available appointment.",
    tags: ['React.js', 'Express.js', 'MongoDB', 'Redis'],
  },
  'International School Services': {
    description:
      "An enterprise hiring platform used by 1,200+ schools worldwide. I've worked on instant messaging between schools and candidates, plus smart candidate matching that speeds up hiring.",
    tags: ['Angular', 'TypeScript', 'MongoDB', 'Socket.IO'],
  },
}

function Picture({ title }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 shadow-lg">
      <p className="px-6 text-center text-[22px] font-semibold text-white">{title}</p>
    </div>
  )
}

function TechnicalDetails({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-1 text-[14px] font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
      >
        {open ? 'Hide technical details' : 'Show technical details'}
        {open ? <HiChevronUp size={18} /> : <HiChevronDown size={18} />}
      </button>

      {open && (
        <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          <ul className="flex flex-col gap-1.5 text-[15px] text-gray-600 dark:text-gray-400">
            {project.points.map((point) => (
              <li key={point} className="ms-5 list-disc">
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl bg-gray-100 px-4 py-1 text-[13px] font-medium text-gray-500 dark:bg-gray-800/60 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Work() {
  const projects = profile.employment.projects.slice().reverse()

  return (
    <section className="bg-white px-6 py-16 md:px-20 md:py-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-2 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-xl bg-gray-200 px-5 py-1 text-[14px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            Work
          </span>
          <p className="max-w-[576px] text-center text-[20px] text-gray-600 dark:text-gray-400">
            {`A couple of real products I've helped build, as a Full Stack Developer at ${profile.employment.name}:`}
          </p>
        </div>

        <div className="flex w-full max-w-[1152px] flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm sm:flex-row dark:bg-gray-900 dark:ring-1 dark:ring-gray-800"
            >
              <div
                className={`flex flex-1 items-center bg-gray-50 p-8 sm:p-12 dark:bg-gray-800/50 ${
                  index % 2 === 1 ? 'sm:order-2' : ''
                }`}
              >
                <Picture title={project.title} />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-6 p-8 sm:p-12">
                <div>
                  <p className="text-[20px] font-semibold text-gray-900 dark:text-gray-50">
                    {project.title}
                  </p>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400">
                    {project.start} - {project.end}
                  </p>
                </div>
                <p className="text-[16px] text-gray-600 dark:text-gray-400">
                  {projectCopy[project.title]?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectCopy[project.title]?.tags.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl bg-gray-200 px-5 py-1 text-[14px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="w-fit rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <img src={iconExternalLink} alt="" aria-hidden="true" className="size-6" />
                </a>

                <TechnicalDetails project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
