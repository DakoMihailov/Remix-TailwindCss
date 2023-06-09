import clsx from 'clsx'

interface HeadingProps {
  className?: string
  id?: string
  colorScheme?: 'default' | 'primary'
}

const H1: React.FC<HeadingProps> = ({
  className,
  id,
  children,
  colorScheme = 'default',
}) => {
  return (
    <h1
      id={id}
      className={clsx(
        'text-2xl lg:text-4xl  font-bold',
        {
          'text-gray-800 dark:text-gray-300': colorScheme === 'default',
          'text-accent': colorScheme === 'primary',
        },
        className,
      )}
    >
      {children}
    </h1>
  )
}

const H2: React.FC<HeadingProps> = ({
  className,
  id,
  children,
  colorScheme = 'default',
}) => {
  return (
    <h2
      id={id}
      className={clsx(className, 'text-xl', {
        'text-gray-700 dark:text-gray-200': colorScheme === 'default',
        'text-accent': colorScheme === 'primary',
      })}
    >
      {children}
    </h2>
  )
}

const H3: React.FC<HeadingProps> = ({ className, id, children }) => {
  return (
    <h3 id={id} className={clsx(className, 'dark:text-white 2xl:text-6xl lg:text-5xl mt-8 text-lg font-black text-3xl')}>
      {children}
    </h3>
  )
}

const H4: React.FC<HeadingProps> = ({ className, id, children }) => {
  return (
    <h4 id={id} className={clsx(className, '2xl:text-5xl lg:text-4xl mt-8 text-lg font-black  text-3xl text-blue-600')}>
      {children}
    </h4>
  )
}

const H5: React.FC<HeadingProps> = ({
  className,
  id,
  children,
  colorScheme = 'default',
}) => {
  return (
    <h2
      id={id}
      className={clsx(className, 'text-xl', {
        'text-black dark:text-black': colorScheme === 'default',
        'text-accent': colorScheme === 'primary',
      })}
    >
      {children}
    </h2>
  )
}

interface ParagraphProps {
  className?: string
  isDescription?: boolean
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  isDescription = false,
  children,
}) => {
  return (
    <p
      className={clsx(className, 'text-lg mb-5 leading-relaxed', {
        // 'lg:text-xl': bigger,
        'text-gray-800 dark:text-gray-300': !isDescription,
        'text-gray-400': isDescription,
      })}
    >
      {children}
    </p>
  )
}

export { H1, H2, H3, H4, H5 }
