import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

export default function RefLink({
  href,
  children,
  className,
  target = '_blank',
}: {
  href: Url
  children?: React.ReactNode
  className?: string
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <Link
      href={href} //+ "?ref=mahdimirshafiee.ir"
      target={target}
      rel="noreferrer"
      className={className}
    >
      {children}
    </Link>
  )
}
