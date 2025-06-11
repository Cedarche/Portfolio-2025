export function Silhouette(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 2048 1638"
      fill="none"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={3}
        d="m914 38 38 3 26 23-62-1-60 25-30 40 7-5-14 38 6 13-114 107h12l-11 18 11 1-5 14 8 4-30 53 20-14-2 121 18 30-1 43-23 16 9 74 30 90 23 22 13 75 29 57 3 92-36 92-18 22-378 191-49 55-29 53-71 247h1637l-77-225-107-203-66-36-345-126-45-38-33-48v-61l34-67 11-59 25-20 46-106 6-119 15-6-1-45 5 6-9-117 21-14-122-185-69-36-62 17-8-19-23-13 13 8-5 9 12-1-4 11-12-3-50-58-37-16-28-27Z"
      />
    </svg>
  )
}
