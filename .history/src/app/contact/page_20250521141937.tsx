import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from '@/components/catalyst/fieldset'
import { Input } from '@/components/catalyst/input'
import { Select } from '@/components/catalyst/select'
import { Text } from '@/components/catalyst/text'
import { Textarea } from '@/components/catalyst/textarea'

export const metadata = {
  title: 'Contact',
  description: 'Contact me',
}

export default function Contact() {
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
      <form action="/orders" method="POST" className="mt-10 max-w-xl">
        {/* ... */}
        <Fieldset className="mt-10 max-w-xl">
          <FieldGroup>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
              <Field>
                <Label>First name</Label>
                <Input name="first_name" />
              </Field>
              <Field>
                <Label>Last name</Label>
                <Input name="last_name" />
              </Field>
            </div>
            <Field>
              <Label>Street address</Label>
              <Input name="street_address" />
            </Field>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
              <Field className="sm:col-span-2">
                <Label>Country</Label>
                <Select name="country">
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>United States</option>
                </Select>
              </Field>
              <Field>
                <Label>Postal code</Label>
                <Input name="postal_code" />
              </Field>
            </div>
            <Field>
              <Label>Delivery notes</Label>
              <Textarea name="notes" />
              <Description>
                If you have a tiger, we&apos;d like to know about it.
              </Description>
            </Field>
          </FieldGroup>
        </Fieldset>
        {/* ... */}
      </form>
    </Container>
  )
}
