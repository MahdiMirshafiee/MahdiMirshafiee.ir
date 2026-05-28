import { FaMapMarkerAlt } from 'react-icons/fa'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaXTwitter,
} from 'react-icons/fa6'

export const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'mirshafieemahdi001@gmail.com',
    href: 'mailto:mirshafieemahdi001@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '(+98) 933 063 3752',
    href: 'tel:+989330633752',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Mashhad, Iran',
    href: 'https://maps.app.goo.gl/81sBqu778ikvcBgMA',
  },
]

export const socialContact = [
  {
    icon: FaGithub,
    href: 'https://github.com/MahdiMirshafiee',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/mahdi-mirshafiee',
    label: 'LinkedIn',
  },
  { icon: FaXTwitter, href: 'https://x.com/mirpoker', label: 'X' },
  {
    icon: FaInstagram,
    href: 'https://instagram.com/mirpoker',
    label: 'Instagram',
  },
  { icon: FaTelegram, href: 'https://t.me/mirpokerr', label: 'Telegram' },
]
