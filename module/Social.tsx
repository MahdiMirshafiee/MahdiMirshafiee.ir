import { socialLinks } from '@/data/social'
import RefLink from './RefLink'

export default function Social() {
  return (
    <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4">
      {socialLinks.map((value) => (
        <li key={value.id}>
          <RefLink
            href={value.url}
            className="group flex items-center border-b border-zinc-200 dark:border-b-zinc-600"
          >
            <value.icon
              className="h-5 w-5 shrink-0 text-zinc-500 duration-300 group-hover:text-zinc-800 group-hover:dark:text-white"
              aria-hidden="true"
            />
            &nbsp;
            {value.name}
          </RefLink>
        </li>
      ))}
    </ul>
  )
}
