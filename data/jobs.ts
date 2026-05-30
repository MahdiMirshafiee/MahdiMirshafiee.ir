interface Job {
  id: number
  url: string
  logo: string
  name: string
  jobTitle: string
  startDate: string
  endDate: string | null
  description: string
}

export const jobs: Job[] = [
  {
    id: 1,
    url: 'https://github.com/MahdiMirshafiee',
    logo: '/icons/self-employee.png',
    name: 'Self-Employed',
    jobTitle: 'Full-Stack Web Developer',
    startDate: '7-1-2024',
    endDate: null,
    description:
      'Building full-stack web applications with TypeScript, React, Next.js, Node.js, and Express. Working on user interfaces, backend APIs, and database design.',
  },
]
