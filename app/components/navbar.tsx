import { useEffect, useState } from 'react'
import { useLocation, useTransition } from 'remix'
import {
  IoMoon as MoonIcon,
  IoSunny as SunIcon,
  IoMail as MailIcon,
  IoBook as BookIcon,
  IoLogoGithub as GithubIcon,
  IoList as HamburgerIcon,
  IoClose as CloseIcon,
  IoHome as HomeIcon,
  IoLogoTwitter as TwitterLogo,
} from 'react-icons/io5'

import { useTheme } from '~/providers/theme-provider'

import { Anchor } from '~/components/anchor'
import { Section } from '~/components/section'
import { Button, LinkButton } from '~/components/button'
import { Drawer } from '~/components/drawer'
import { NavigationProps } from './navigation'

const ThemeChanger = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div className="rounded-lg p-1 rounded-xl flex gap-1 noscript-hidden">
      <Button
        label="Dark Theme"
        onClick={() => changeTheme('dark')}
        active={theme === 'dark'}
      >
        <MoonIcon />
      </Button>
      <Button
        label="Light Theme"
        onClick={() => changeTheme('light')}
        active={theme === 'light'}
      >
        <SunIcon />
      </Button>
    </div>
  )
}

const DrawerMenu = ({ path }: { path: string }) => {
  return (
    <div>
      <span className="flex flex-col gap-1">
        <LinkButton
          href="/"
          className="text-left text-gray-200"
          active={path === '/landning'}
          disableHover
          plainActive
        >
          <HomeIcon /> Home
        </LinkButton>
        <LinkButton
          href="/contact"
          active={path.startsWith('/contact')}
          disableHover
          plainActive
          className="text-left text-gray-200"
        >
          <BookIcon /> Blog
        </LinkButton>
      </span>
      <p className="pl-3 mt-5 mb-2 text-gray-400 font-bold">Social</p>
      <span className="flex flex-col gap-1">
        <LinkButton
          href="https://github.com"
          className="text-left text-gray-200"
          external
          disableHover
        >
          <GithubIcon /> Github
        </LinkButton>
        <LinkButton
          href="https://twitter.com"
          className="text-left text-gray-200"
          external
          disableHover
        >
          <TwitterLogo /> Twitter
        </LinkButton>
        <LinkButton
          href="/"
          className="text-left text-gray-200"
          external
          disableHover
        >
          <MailIcon /> Contact
        </LinkButton>
      </span>
    </div>
  )
}

export const Navbar:React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const transition = useTransition()
  const { pathname } = useLocation()

  useEffect(() => {
    if (transition.state === 'loading') setIsDrawerOpen(false)
  }, [transition.state])

  return ( 
    <>
      <Section className="z-50 fixed top-0 w-full dark:drop-shadow-2xl rounded-xl rounded-lg py-4 lg:py-4 dark:bg-gray-800 dark:bg-opacity-60 p-1 drop-shadow-2xl bg-gray-200 bg-opacity-60"  as="div" extrapolate>
        <nav className="text-black dark:text-white flex justify-between items-center mx-auto drop-shadow-md md:drop-shadow-2xl">
          <Button
            className="flex lg:hidden w-fit"
            onClick={() => setIsDrawerOpen((p) => !p)}
          >
            <HamburgerIcon />
          </Button>
          <div className="ml-24">
          <Anchor
            href="/"
            className="dark:text-white text-2xl ml-24 lg:text-4xl font-bold hidden lg:block"
          >
            <img src="https://oddstorm.company/img/logo.webp" alt="OddStorm Company"></img>
            {/* <svg viewBox="0 0 248 31" className="text-slate-900 dark:text-white w-auto h-5"><path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg> */}
          </Anchor>
          </div>
          <nav className="text-lg leading-6 font-bold text-slate-900 dark:text-slate-100 flex gap-6 space-x-8">
            <NavigationProps href="/">
              Home
            </NavigationProps>
            <NavigationProps href="/contact">
              Contact
            </NavigationProps>
            <NavigationProps href="/">
              ...
            </NavigationProps>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden ml-6 lg:flex lg:gap-1">
              <LinkButton
                label="Contact"
                href="/"
                external
                className="dark:hover:bg-blue-800 hover:bg-blue-600"
              >
                <MailIcon />
              </LinkButton>
              <LinkButton label="Contact" href="/blog"className="dark:hover:bg-blue-800 hover:bg-blue-600">
                <BookIcon />
              </LinkButton>
              <LinkButton
                label="Github"
                href="https://github.com"
                external className="dark:hover:bg-blue-800 hover:bg-blue-600"
              >
                <GithubIcon />
              </LinkButton>
            </span>
            <ThemeChanger />
          </div>
        </nav>
      </Section>
      <Drawer isOpen={isDrawerOpen}>
        <Button
          className="flex lg:hidden w-fit text-gray-300"
          onClick={() => setIsDrawerOpen((p) => !p)}
        >
          <CloseIcon />
        </Button>
        <DrawerMenu path={pathname} />
      </Drawer>
    </>
  )
}

