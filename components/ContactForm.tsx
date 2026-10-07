'use client'

import { useCallback, useMemo, useState } from 'react'
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
import { useLanguage, usePageTitle } from '@/providers/LanguageProvider'

type ToastState = { type: 'success' | 'error'; message: string } | null

export default function ContactForm() {
  const { t } = useLanguage()
  usePageTitle('contact')
  const [toast, setToast] = useState<ToastState>(null)

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(2, t.contact.errors.nameRequired)
          .max(100, t.contact.errors.nameTooLong),
        email: z
          .string()
          .email(t.contact.errors.invalidEmail)
          .max(100, t.contact.errors.emailTooLong),
        message: z
          .string()
          .min(10, t.contact.errors.messageTooShort)
          .max(5000, t.contact.errors.messageTooLong),
      }),
    [t]
  )

  type ContactFormValues = z.infer<typeof contactSchema>

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

        showToast('success', t.contact.toastSuccess)
        reset()
      } catch {
        showToast('error', t.contact.toastError)
      }
    },
    [reset, showToast, t]
  )

  return (
    <section className="overflow-x-hidden px-4 sm:px-6 md:px-16">
      <div className="mx-auto mt-12 max-w-5xl sm:mt-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center sm:mb-16"
        >
          <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl dark:text-neutral-100">
            {t.contact.h1}
          </h1>
          <p className="font-incognito mx-auto max-w-xl text-base sm:text-lg dark:text-neutral-400">
            {t.contact.sub}
          </p>
        </MotionDiv>

        <div className="grid gap-4 sm:gap-8 lg:grid-cols-5">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 backdrop-blur-sm sm:p-6 md:p-8 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-4 text-base font-semibold text-zinc-800 sm:mb-6 sm:text-xl dark:text-neutral-100">
                {t.contact.sendMessage}
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-600 sm:mb-2 sm:text-sm dark:text-neutral-400">
                    {t.contact.yourName}
                  </label>
                  <input
                    {...register('name')}
                    className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder={t.contact.namePlaceholder}
                  />
                  <p className="mt-1.5 min-h-[1.25rem] text-xs text-red-400 sm:mt-2 sm:min-h-[1.375rem] sm:text-sm">
                    {errors.name?.message}
                  </p>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-600 sm:mb-2 sm:text-sm dark:text-neutral-400">
                    {t.contact.yourEmail}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    dir="ltr"
                    className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder={t.contact.emailPlaceholder}
                  />
                  <p className="mt-1.5 min-h-[1.25rem] text-xs text-red-400 sm:mt-2 sm:min-h-[1.375rem] sm:text-sm">
                    {errors.email?.message}
                  </p>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-600 sm:mb-2 sm:text-sm dark:text-neutral-400">
                    {t.contact.message}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 transition-all focus:border-zinc-400/50 focus:ring-1 focus:ring-zinc-400/20 focus:outline-none sm:px-4 sm:py-3 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-gray-300/50 dark:focus:ring-gray-300/20"
                    placeholder={t.contact.messagePlaceholder}
                  />
                  <p className="mt-1.5 min-h-[1.25rem] text-xs text-red-400 sm:mt-2 sm:min-h-[1.375rem] sm:text-sm">
                    {errors.message?.message}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-gray-600 to-gray-700 px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:from-gray-500 hover:to-gray-600 disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      {t.contact.send}
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
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 backdrop-blur-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-4 text-base font-semibold text-zinc-800 sm:mb-5 sm:text-lg dark:text-neutral-100">
                {t.contact.directContact}
              </h2>
              <div className="space-y-2 sm:space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  const label =
                    t.contact.labels[method.label] ?? method.label
                  const value =
                    method.label === 'Location'
                      ? t.contact.locationValue
                      : method.value
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100 sm:gap-4 sm:p-4 dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:hover:border-gray-500/30 dark:hover:bg-neutral-800/70"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-200/60 text-zinc-500 transition-colors group-hover:bg-zinc-200 sm:h-10 sm:w-10 dark:bg-gray-500/10 dark:text-gray-400 dark:group-hover:bg-gray-500/20">
                        <Icon className="text-base sm:text-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="mb-0.5 text-xs text-zinc-500 dark:text-neutral-500">
                          {label}
                        </p>
                        <p
                          className="truncate text-xs text-zinc-800 sm:text-sm dark:text-neutral-200"
                          dir="auto"
                        >
                          {value}
                        </p>
                      </div>
                      <FaExternalLinkAlt className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-600 dark:text-neutral-500 dark:group-hover:text-gray-400" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-4 backdrop-blur-sm sm:p-6.5 dark:border-neutral-800 dark:bg-neutral-900/60">
              <h2 className="mb-4 text-base font-semibold text-zinc-800 sm:mb-5 sm:text-lg dark:text-neutral-100">
                {t.contact.connectOnline}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialContact.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2 text-zinc-600 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 sm:gap-2 sm:px-4 sm:py-3 dark:border-neutral-700/50 dark:bg-neutral-800/40 dark:text-neutral-400 dark:hover:border-gray-500/30 dark:hover:bg-neutral-800/70 dark:hover:text-gray-200"
                    >
                      <Icon className="text-base sm:text-xl" />
                      <span className="text-xs font-medium sm:text-sm">
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
