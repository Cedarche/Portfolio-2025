import Image, { type ImageProps } from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import LandingSlider from '@/components/LandingSlider'
import { Divider } from '@/components/catalyst/divider'
import { technologies } from '@/components/Constants'
import avatarImage from '@/images/Headshot-nobg.png'
import { TechnologiesScroll } from '@/components/TechnologiesScroll'
import { ContactSection } from '@/components/ContactSection'
import { ArrowDownIcon, SocialLink } from '@/components/Icons'
import { Education } from '@/components/Education'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-10 md:mt-28">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="aspect-square w-full rounded-2xl border border-zinc-200 bg-zinc-100 shadow-lg lg:mr-2 lg:w-1/4 dark:border-zinc-700/60 dark:bg-zinc-800">
            <Image
              src={avatarImage}
              alt="Tom Carruthers Headshot"
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="w-full overflow-hidden sm:overflow-visible lg:w-3/4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hi, I&apos;m Tom
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m a mechanical engineer and self-taught developer with 5+
              years of experience designing, developing, and managing fullstack
              applications and internal tools. I&apos;ve built a number of both
              personal and commercial projects over the years, and I&apos;m
              currently looking for work in London, UK as a front-end/fullstack
              software engineer.
            </p>
            <TechnologiesScroll items={technologies} showTooltip={true} />
            <div className="mt-6 flex items-center justify-end gap-6 md:justify-start">
              <SocialLink
                href="https://github.com/Cedarche"
                target="_blank"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/tom-carruthers-1b8709184/"
                target="_blank"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <Button
                href="/TC_FULLSTACK_RESUME_2025.pdf"
                target="_blank"
                variant="secondary"
                className="group"
              >
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
      <Container className="mt-6 md:mt-10">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <LandingSlider articles={articles} />
          <div className="space-y-6 lg:pl-16 xl:pl-24">
            <Education />
            <ContactSection />
          </div>
        </div>
      </Container>
    </>
  )
}
