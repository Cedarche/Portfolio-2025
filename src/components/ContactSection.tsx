'use client'
import { useState } from "react"
import { Button } from '@/components/Button'
import Link from 'next/link'


function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
    )
  }
export function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setStatus('loading')
  
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: 'Interested in working together',
      }
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
  
        if (!response.ok) {
          throw new Error('Failed to send message')
        }
  
        setStatus('success')
        e.currentTarget.reset()
      } catch (error) {
        console.error('Error sending message:', error)
        setStatus('error')
      }
    }
  
    return (
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-md dark:border-zinc-700/60 dark:bg-zinc-800/80"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Interested in working together?</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Enter your email and I&apos;ll get back to you as soon as possible. Or{' '}
          <Link href="/contact" className="text-blue-500">
            send me a message
          </Link>{' '}
          with more info.
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
            className="min-w-0 mr-4 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            aria-label="Company"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
        </div>
        <div className="mt-4 flex">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10"
          />
          <Button 
            type="submit" 
            className="ml-4 flex-none"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Submit'}
          </Button>
        </div>
        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600 dark:text-green-400">
            Message sent successfully! I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 dark:text-red-400">
            Failed to send message. Please try again later.
          </p>
        )}
      </form>
    )
  }