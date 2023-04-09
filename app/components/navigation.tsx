interface NavigationProps {
  href: string
}

export const NavigationProps: React.FC<NavigationProps> = ({
  href,
  children,
}) => {
  return (
    <a href = {href} className="hover:text-blue-500 dark:hover:text-blue-600 cursor-pointer"
    >
      {children}
    </a>
  )
}
