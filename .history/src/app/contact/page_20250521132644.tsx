// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'

// function ToolsSection({
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof Section>) {
//   return (
//     <Section {...props}>
//       <ul role="list" className="space-y-16">
//         {children}
//       </ul>
//     </Section>
//   )
// }

// function Tool({
//   title,
//   href,
//   children,
// }: {
//   title: string
//   href?: string
//   children: React.ReactNode
// }) {
//   return (
//     <Card as="li">
//       <Card.Title as="h3" href={href}>
//         {title}
//       </Card.Title>
//       <Card.Description>{children}</Card.Description>
//     </Card>
//   )
// }

// export const metadata = {
//   title: 'Uses',
//   description: 'Software I use, gadgets I love, and other things I recommend.',
// }

// export default function Contact() {
//   return (
//     <SimpleLayout
//       title="Software I use, gadgets I love, and other things I recommend."
//       intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
//     >
//       <div className="space-y-20">
//         <ToolsSection title="Workstation">
//           <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
//             I was using an Intel-based 16” MacBook Pro prior to this and the
//             difference is night and day. I’ve never heard the fans turn on a
//             single time, even under the incredibly heavy loads I put it through
//             with our various launch simulations.
//           </Tool>
//           <Tool title="Apple Pro Display XDR (Standard Glass)">
//             The only display on the market if you want something HiDPI and
//             bigger than 27”. When you’re working at planetary scale, every pixel
//             you can get counts.
//           </Tool>
//           <Tool title="IBM Model M SSK Industrial Keyboard">
//             They don’t make keyboards the way they used to. I buy these any time
//             I see them go up for sale and keep them in storage in case I need
//             parts or need to retire my main.
//           </Tool>
//           <Tool title="Apple Magic Trackpad">
//             Something about all the gestures makes me feel like a wizard with
//             special powers. I really like feeling like a wizard with special
//             powers.
//           </Tool>
//           <Tool title="Herman Miller Aeron Chair">
//             If I’m going to slouch in the worst ergonomic position imaginable
//             all day, I might as well do it in an expensive chair.
//           </Tool>
//         </ToolsSection>
//         <ToolsSection title="Development tools">
//           <Tool title="Sublime Text 4">
//             I don’t care if it’s missing all of the fancy IDE features everyone
//             else relies on, Sublime Text is still the best text editor ever
//             made.
//           </Tool>
//           <Tool title="iTerm2">
//             I’m honestly not even sure what features I get with this that aren’t
//             just part of the macOS Terminal but it’s what I use.
//           </Tool>
//           <Tool title="TablePlus">
//             Great software for working with databases. Has saved me from
//             building about a thousand admin interfaces for my various projects
//             over the years.
//           </Tool>
//         </ToolsSection>
//         <ToolsSection title="Design">
//           <Tool title="Figma">
//             We started using Figma as just a design tool but now it’s become our
//             virtual whiteboard for the entire company. Never would have expected
//             the collaboration features to be the real hook.
//           </Tool>
//         </ToolsSection>
//         <ToolsSection title="Productivity">
//           <Tool title="Alfred">
//             It’s not the newest kid on the block but it’s still the fastest. The
//             Sublime Text of the application launcher world.
//           </Tool>
//           <Tool title="Reflect">
//             Using a daily notes system instead of trying to keep things
//             organized by topics has been super powerful for me. And with
//             Reflect, it’s still easy for me to keep all of that stuff
//             discoverable by topic even though all of my writing happens in the
//             daily note.
//           </Tool>
//           <Tool title="SavvyCal">
//             Great tool for scheduling meetings while protecting my calendar and
//             making sure I still have lots of time for deep work during the week.
//           </Tool>
//           <Tool title="Focus">
//             Simple tool for blocking distracting websites when I need to just do
//             the work and get some momentum going.
//           </Tool>
//         </ToolsSection>
//       </div>
//     </SimpleLayout>
//   )
// }

'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </div>
  )
}
