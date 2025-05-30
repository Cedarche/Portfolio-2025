'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from '@/components/catalyst/fieldset'
import { Input } from '@/components/catalyst/input'

import { Textarea } from '@/components/catalyst/textarea'

const metadata = {
  title: 'Contact',
  description: 'Contact me',
}

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: `${formData.get('first_name')} ${formData.get('last_name')}`,
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log('response: ', response)

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      //   e.currentTarget.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    }
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="mx-auto max-w-xl sm:mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Want to learn more?
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&apos;m currently seeking Front-end/Fullstack developer roles in
          London, or fully remote positions across the UK. If you&apos;re
          looking for a passionate developer with experience in modern web
          technologies, I&apos;d love to hear from you.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <Fieldset className="mt-10 w-full sm:w-xl">
          <FieldGroup>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
              <Field>
                <Label>First name</Label>
                <Input name="first_name" required />
              </Field>
              <Field>
                <Label>Last name</Label>
                <Input name="last_name" required />
              </Field>
            </div>
            <Field>
              <Label>Company</Label>
              <Input name="company" />
            </Field>
            <Field>
              <Label>Email</Label>
              <Input name="email" type="email" required />
            </Field>

            <Field>
              <Label>Message</Label>
              <Textarea name="message" required />
            </Field>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                className="group cursor-pointer"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send'}
                <PaperAirplaneIcon className="h-4 w-4 transition group-active:stroke-blue-600 dark:group-hover:stroke-blue-50 dark:group-active:stroke-blue-50" />
              </Button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                Failed to send message. Please try again later.
              </p>
            )}
          </FieldGroup>
        </Fieldset>
      </form>
    </Container>
  )
}
