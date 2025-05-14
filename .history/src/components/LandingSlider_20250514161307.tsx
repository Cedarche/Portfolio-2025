'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
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
    <div className="flex flex-col gap-16">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Experience</h2>
      {/* Experience content will go here */}
    </div>
  )
}

function Projects() {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Projects</h2>
      {/* Projects content will go here */}
    </div>
  )
}

export default function LandingSlider({ articles }: { articles: ArticleWithSlug[] }) {
  const [activeTab, setActiveTab] = useState('blog')

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
  ]

  return (
    <div className="w-full">
      <div className="flex space-x-2 mb-8 border rounded-lg border-gray-500 overflow-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'px-4 py-2 rounded transition-all duration-200',
              activeTab === tab.id
                ? 'bg-zinc-800 text-white dark:bg-zinc-500 dark:text-zinc-200'
                : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
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
            activeTab === 'experience' ? 'opacity-100' : 'opacity-0 absolute'
          )}
        >
          <Experience />
        </div>
        <div
          className={clsx(
            'transition-opacity duration-300',
            activeTab === 'projects' ? 'opacity-100' : 'opacity-0 absolute'
          )}
        >
          <Projects />
        </div>
        <div
          className={clsx(
            'transition-opacity duration-300',
            activeTab === 'blog' ? 'opacity-100' : 'opacity-0 absolute'
          )}
        >
          <Blog articles={articles} />
        </div>
      </div>
    </div>
  )
}
