import profile from '../data/profile.json'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Avatar({ className }) {
  return (
    <div className={className}>
      <div className="absolute inset-0 translate-x-5 translate-y-5 bg-gray-200 dark:bg-gray-700" />
      <div className="absolute inset-0 flex items-center justify-center border-8 border-white bg-gradient-to-br from-gray-700 to-gray-900 dark:border-gray-900">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-6xl font-bold text-white/90">{initials}</span>
        )}
      </div>
    </div>
  )
}
