import clsx from 'clsx'

interface SectionProps {
  className?: string
  as?: React.ElementType
  extrapolate?: boolean
}

export const Section: React.FC<SectionProps> = ({
  as: Tag = 'section',
  className,
  children,
  extrapolate = false,
}) => {
  return (
    <Tag
      className={clsx(className, 'px-4 mx-100vw lg:mx-auto px-0 lg:px-2', {
        'max-w-screen-lg': !extrapolate,
        'max-w-screen': extrapolate,
      })}
    >
      {children}
    </Tag>
  )
}
