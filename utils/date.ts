import type { Locale } from './i18n'
import { toFaDigits } from './i18n'

const FA_MONTHS = [
  'ژانویه',
  'فوریه',
  'مارس',
  'آوریل',
  'مه',
  'ژوئن',
  'ژوئیه',
  'اوت',
  'سپتامبر',
  'اکتبر',
  'نوامبر',
  'دسامبر',
]

export function formatDate(date: string, lang: Locale = 'en') {
  const parsed = new Date(date)
  if (lang === 'fa') {
    return `${FA_MONTHS[parsed.getMonth()]} ${toFaDigits(parsed.getFullYear())}`
  }
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}
