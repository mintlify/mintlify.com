import Link from 'next/link'
import isAbsoluteUrl from 'is-absolute-url'

export default function (props) {
  if (props.href && isAbsoluteUrl(props.href)) {
    return <a {...props} target="_blank" rel="noopener" />
  }
  return <Link {...props} />
}
