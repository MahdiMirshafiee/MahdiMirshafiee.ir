import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

export default function RefLink({
  href,
  children,
  className,
  target = '_blank',
}: {
  href: Url  //+ "?ref=mahdimirshafiee.ir"
  children?: React.ReactNode
  className?: string
  target?: HTMLAttributeAnchorTarget
}) {
  return (
    <Link href={href} target={target} rel="noreferrer" className={className}>
      {children}
    </Link>
  )
}
