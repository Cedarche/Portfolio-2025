import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import { Text } from './text'
import { type DialogProps } from '@headlessui/react'

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
}

interface AlertProps extends Omit<DialogProps<'div'>, 'children'> {
  children: ReactNode
  title?: string
}

export function Alert({ children, title, ...props }: AlertProps) {
  return (
    <Headless.Dialog {...props}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      />
      <Headless.DialogPanel
        transition
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg ring-1 ring-zinc-950/5 transition duration-100 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-white/10"
      >
        {title && (
          <Headless.DialogTitle className="text-base/7 font-semibold text-zinc-950 dark:text-white">
            {title}
          </Headless.DialogTitle>
        )}
        <div className="mt-2 text-sm/6 text-zinc-600 dark:text-zinc-400">
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  )
}

export function AlertTitle({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DialogTitleProps,
  'as' | 'className'
>) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        'text-center text-base/6 font-semibold text-balance text-zinc-950 sm:text-left sm:text-sm/6 sm:text-wrap dark:text-white',
      )}
    />
  )
}

export function AlertDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps<typeof Text>,
  'as' | 'className'
>) {
  return (
    <Headless.Description
      as={Text}
      {...props}
      className={clsx(className, 'mt-2 text-center text-pretty sm:text-left')}
    />
  )
}

export function AlertBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={clsx(className, 'mt-4')} />
}

export function AlertActions({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto',
      )}
    />
  )
}
