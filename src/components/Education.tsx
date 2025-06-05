import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Divider } from './catalyst/divider'
import { AcademicCapIcon } from '@heroicons/react/20/solid'

import {  education } from '@/components/Constants'

export function Education() {
    return (
      <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-md dark:border-zinc-700/60 dark:bg-zinc-800/80">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <AcademicCapIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
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
              <Link
                href={education.link}
                target="_blank"
                className="hover:underline"
              >
                {education.university}
              </Link>
            </dd>
            <dt className="sr-only">Degree</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              <Link
                href={education.link2}
                target="_blank"
                className="hover:underline"
              >
                {education.degree}
              </Link>
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