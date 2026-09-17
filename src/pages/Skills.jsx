import {
  SiAngular,
  SiCss,
  SiDocker,
  SiGithubactions,
  SiHtml5,
  SiMysql,
  SiPostman,
  SiRedis,
} from 'react-icons/si'
import iconExpress from '../assets/figma/icon-express.svg'
import iconGit from '../assets/figma/icon-git.svg'
import iconJavascript from '../assets/figma/icon-javascript.svg'
import iconMongodb from '../assets/figma/icon-mongodb.svg'
import iconNodejs from '../assets/figma/icon-nodejs.svg'
import iconReact from '../assets/figma/icon-react.svg'
import iconSocket from '../assets/figma/icon-socket.svg'
import iconTypescript from '../assets/figma/icon-typescript.svg'

const imageSkills = [
  { name: 'JavaScript', icon: iconJavascript },
  { name: 'TypeScript', icon: iconTypescript },
  { name: 'React', icon: iconReact },
  { name: 'Node.js', icon: iconNodejs },
  { name: 'Express.js', icon: iconExpress },
  { name: 'Socket.io', icon: iconSocket },
  { name: 'MongoDB', icon: iconMongodb },
  { name: 'Git', icon: iconGit },
]

const glyphSkills = [
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
]

function Tech({ name, children }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex size-16 items-center justify-center">{children}</div>
      <p className="text-[18px] text-gray-600 dark:text-gray-400">{name}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="bg-white px-6 py-16 md:px-20 md:py-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-2 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-xl bg-gray-200 px-5 py-1 text-[14px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            Skills
          </span>
          <p className="max-w-[576px] text-center text-[20px] text-gray-600 dark:text-gray-400">
            The skills, tools and technologies I'm really good at:
          </p>
        </div>

        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:justify-between">
            {imageSkills.map((skill) => (
              <Tech key={skill.name} name={skill.name}>
                <div className="flex size-16 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
                  <img src={skill.icon} alt="" aria-hidden="true" className="size-full" />
                </div>
              </Tech>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:justify-between">
            {glyphSkills.map(({ name, Icon, color }) => (
              <Tech key={name} name={name}>
                <Icon size={48} color={color} aria-hidden="true" />
              </Tech>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
