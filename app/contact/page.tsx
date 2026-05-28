'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FaPaperPlane,
  FaCheckCircle,
  FaTimes,
  FaExternalLinkAlt,
  FaSpinner,
} from 'react-icons/fa'
import { contactMethods, socialContact } from '@/data/contact'
import { AnimatePresence, motion } from 'framer-motion'
import { MotionDiv } from '@/animation/Motion'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email').max(100, 'Email is too long'),
  message: z
    .string()
    .min(10, 'Message is too short')
    .max(5000, 'Message is too long'),
})

type ContactFormValues = z.infer<typeof contactSchema>

type ToastState = { type: 'success' | 'error'; message: string } | null

export default function Contact() {
  const [toast, setToast] = useState<ToastState>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const showToast = useCallback(
    (type: 'success' | 'error', message: string) => {
      setToast({ type, message })
      window.setTimeout(() => setToast(null), 5000)
    },
    []
  )

  const onSubmit = useCallback(
    async (data: ContactFormValues) => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        const result = await res.json()

        if (!res.ok) {
          throw new Error(result?.error || 'Failed to send message')
        }

        showToast(
          'success',
          'Message sent successfully. I’ll get back to you soon.'
        )
        reset()
      } catch {
        showToast('error', 'Failed to send message. Please try again later.')
      }
    },
    [reset, showToast]
  )

  return (
    <section>
      <div className="mx-auto mt-20 max-w-5xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl dark:text-neutral-100">
            Get In Touch
          </h1>
          <p className="font-incognito mx-auto max-w-xl text-lg dark:text-neutral-400">
            Looking for a Web Developer? Let&apos;s connect and discuss how I
            can contribute to your team.
          </p>
        </MotionDiv>

        <div className="grid gap-8 lg:grid-cols-5">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 backdrop-blur-sm md:p-8 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-6 text-xl font-semibold text-zinc-800 dark:text-neutral-100">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-600 dark:text-neutral-400">
                    Your Name
                  </label>
                  <input
                    {...register('name')}
                    className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder="Mahdi Mirshafiee"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-600 dark:text-neutral-400">
                    Your Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder="mirshafieemahdi001@gmail.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-600 dark:text-neutral-400">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-gray-200 to-gray-300 px-6 py-3.5 font-semibold text-neutral-500 hover:from-gray-100 hover:to-gray-200 disabled:cursor-not-allowed disabled:opacity-70 dark:from-gray-600 dark:to-gray-700 dark:text-neutral-200 dark:hover:from-gray-500 dark:hover:to-gray-600"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 lg:col-span-2"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-5 text-lg font-semibold text-zinc-800 dark:text-neutral-100">
                Direct Contact
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-4 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100 dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:hover:border-gray-500/30 dark:hover:bg-neutral-800/70"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors group-hover:bg-zinc-200 dark:bg-gray-500/10 dark:text-gray-400 dark:group-hover:bg-gray-500/20">
                        <Icon className="text-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="mb-0.5 text-xs text-zinc-500 dark:text-neutral-500">
                          {method.label}
                        </p>
                        <p className="truncate text-sm text-zinc-800 dark:text-neutral-200">
                          {method.value}
                        </p>
                      </div>
                      <FaExternalLinkAlt className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-neutral-500 dark:group-hover:text-gray-400" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-5 text-lg font-semibold text-zinc-800 dark:text-neutral-100">
                Connect Online
              </h2>
              <div className="flex flex-wrap gap-3">
                {socialContact.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-4 py-3 text-zinc-600 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:text-neutral-400 dark:hover:border-gray-500/30 dark:hover:bg-neutral-800/70 dark:hover:text-gray-200"
                    >
                      <Icon className="text-xl" />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </MotionDiv>
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="pointer-events-none fixed top-6 left-1/2 z-9999 w-[min(92vw,420px)] -translate-x-1/2"
            >
              <div
                className={`pointer-events-auto flex items-center gap-3 rounded-xl px-5 py-3 shadow-2xl ${
                  toast.type === 'success'
                    ? 'bg-green-500/95 text-white'
                    : 'bg-red-500/95 text-white'
                }`}
              >
                {toast.type === 'success' ? (
                  <FaCheckCircle className="shrink-0 text-lg" />
                ) : (
                  <FaTimes className="shrink-0 text-lg" />
                )}
                <span className="text-sm font-medium">{toast.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
