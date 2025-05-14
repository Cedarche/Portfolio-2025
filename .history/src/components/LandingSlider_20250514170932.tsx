'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { experience, projects } from '@/components/constants'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Blog({ articles }: { articles: ArticleWithSlug[] }) {
  return (
    <div className="flex flex-col gap-16">
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  )
}

function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {experience.map((job) => (
        <div key={job.id} className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                {job.title}
              </h3>
              <p className="text-sm font-semibold text-zinc-600 italic dark:text-zinc-400">
                {job.company} • {job.location}
              </p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {job.dates}
            </p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <p className="mb-2">{job.content[0]}</p>
            <ul className="list-disc space-y-1 pl-4">
              {job.content.slice(1).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project) => (
        <div
          key={project.name}
          className="group relative flex items-start gap-4 rounded-lg border border-zinc-100 p-4 dark:border-zinc-700/60"
        >
          <div className="absolute -inset-x-2 -inset-y-2 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-2 sm:rounded-2xl dark:bg-zinc-800/50" />
          <div className="relative mt-1 z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={project.logo} alt="" className="h-7 w-7" unoptimized />
          </div>
          <div className="flex z-10 flex-auto flex-wrap gap-x-2">
            <div className="w-full flex-none text-sm font-medium text-zinc-800 dark:text-zinc-100">
              {project.name}
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </div>
            <div className="ml-auto text-sm">
              <Link
                href={project.link.href}
                className="relative z-20 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
              >
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LandingSlider({
  articles,
}: {
  articles: ArticleWithSlug[]
}) {
  const [activeTab, setActiveTab] = useState('blog')

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
  ]

  return (
    <div className="w-full">
      <div className="overflow-none mb-8 flex space-x-1 rounded-lg border border-zinc-200 p-1 dark:dark:border-zinc-700/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'rounded px-4 py-2 text-sm font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'flex-1 bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          className={clsx(
            'transition-opacity duration-300',
            activeTab === 'experience' ? 'opacity-100' : 'absolute opacity-0',
          )}
        >
          <Experience />
        </div>
        <div
          className={clsx(
            'transition-opacity duration-300',
            activeTab === 'projects' ? 'opacity-100' : 'absolute opacity-0',
          )}
        >
          <Projects />
        </div>
        <div
          className={clsx(
            'transition-opacity duration-300',
            activeTab === 'blog' ? 'opacity-100' : 'absolute opacity-0',
          )}
        >
          <Blog articles={articles} />
        </div>
      </div>
    </div>
  )
}
