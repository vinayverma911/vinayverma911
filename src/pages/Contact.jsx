import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import iconCopy from '../assets/figma/icon-copy.svg'
import iconInbox from '../assets/figma/icon-inbox.svg'
import iconPhone from '../assets/figma/icon-phone.svg'
import profile from '../data/profile.json'

const whatsappNumber = profile.phone.replace(/\D/g, '')

const socials = [
  { name: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { name: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, Icon: SiWhatsapp },
]

function CopyRow({ icon, value, onCopy }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      onCopy?.()
    }
  }

  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt="" aria-hidden="true" className="size-8" />
      <p className="text-[22px] font-semibold tracking-tight text-gray-900 sm:text-[36px] dark:text-gray-50">
        {value}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${value}`}
        className="rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img src={iconCopy} alt="" aria-hidden="true" className="size-6" />
      </button>
      {copied && <span className="text-[14px] text-emerald-600">Copied!</span>}
    </div>
  )
}

export default function Contact() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:px-20 md:py-24 dark:bg-gray-800">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-2 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-xl bg-gray-200 px-5 py-1 text-[14px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            Get in touch
          </span>
          <p className="max-w-[576px] text-center text-[20px] text-gray-600 dark:text-gray-400">
            {"What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <CopyRow icon={iconInbox} value={profile.email} />
          <CopyRow icon={iconPhone} value={profile.phone} />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[16px] text-gray-600 dark:text-gray-400">
            You may also find me on these platforms!
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="rounded-lg p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
