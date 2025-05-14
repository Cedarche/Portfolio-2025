import { useEffect, useRef } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useAnimationFrame } from 'framer-motion'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { AcademicCapIcon, } from '@heroicons/react/20/solid'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import LandingSlider from '@/components/LandingSlider'
import { Divider } from '@/components/catalyst/divider'
import { Badge } from '@/components/catalyst/badge'
import { technologies, education } from '@/components/Constants'
import { GridPattern } from '@/components/GridPattern'
import avatarImage from '@/images/Headshot.jpg'
import { TechnologiesScroll } from '@/components/TechnologiesScroll'


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

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Education() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/60">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <Divider className="mt-4" />
      <div className="mt-4 flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={education.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">University</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {education.university}
          </dd>
          <dt className="sr-only">Degree</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {education.degree}
          </dd>
          <dt className="sr-only">Date and Location</dt>
          <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
            {education.graduationDate} • {education.location}
          </dd>
          <dt className="sr-only">Description</dt>
          <dd className="mt-2 w-full text-sm text-zinc-600 dark:text-zinc-400">
            {education.description}
          </dd>
        </dl>
      </div>
    </div>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/60"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Interested in working together?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Enter your email and I&apos;ll get back to you as soon as possible.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/60">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-28">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="aspect-square w-full lg:mr-2 lg:w-1/4">
            <Image
              src={avatarImage}
              alt="Tom Carruthers"
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="w-full lg:w-3/4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hi, I&apos;m Tom
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m a mechanical engineer and a self-taught developer with 5+
              years of experience designing, developing, and managing fullstack
              applications and internal tools. I&apos;m a mechanical engineer
              and a self-taught developer with 5+ years of experience designing,
              developing, and managing fullstack applications and internal
              tools. I&apos;ve built a number of both personal and commercial
              projects over the years, and I&apos;m currently looking for work
              in London, UK as a front-end/fullstack software engineer.
            </p>
            <TechnologiesScroll />
            <div className="mt-6 flex items-center justify-end gap-6 md:justify-start">
              <SocialLink
                href="#"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="#"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <Button href="#" variant="primary" className="group">
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-6 md:mt-10">
        <Divider />
      </Container>
      {/* <Photos /> */}
      <Container className="mt-6 md:mt-10">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <LandingSlider articles={articles} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Education />
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
      <div className="fixed inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50 to-transparent dark:from-neutral-800/50 dark:to-transparent">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5 dark:[mask-image:linear-gradient(to_bottom_left,black_40%,transparent_70%)] dark:fill-neutral-700/50 dark:stroke-neutral-100/5"
          yOffset={-270}
        />
      </div>
    </>
  )
}
