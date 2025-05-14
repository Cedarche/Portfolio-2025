import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { GridPattern } from '@/components/GridPattern'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div> */}
      <div className="fixed inset-x-0 top-0 z-110 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50 to-transparent dark:from-neutral-800/50 dark:to-transparent">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5 dark:[mask-image:linear-gradient(to_bottom_left,black_40%,transparent_70%)] dark:fill-neutral-700/50 dark:stroke-neutral-100/5"
          yOffset={-270}
        />
      </div>
    </>
  )
}
