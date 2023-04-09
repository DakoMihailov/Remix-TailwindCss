import {
    Links,
    LinksFunction,
    LiveReload,
    LoaderFunction,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    json,
    useLoaderData
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import appStyles from "../app/styles/tailwind.css";
import { Theme, ThemeProvider, useTheme } from './providers/theme-provider';
import { getThemeSession } from './server/sessions/theme.server'
import { getDomainUrl, } from './utils/misc'
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { TopBtn } from "./components/topButton";

export type RootLoaderData = {
    theme: Theme
    url: {
      origin: string
      path: string
    }
  }
  
  export const links: LinksFunction = () => {
    return [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com/',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
      },
      { rel: 'stylesheet', href: styles },
      { rel: 'stylesheet', href: appStyles },

    ]
  }

export const meta: MetaFunction = () => {
    return { title: "Home Task" };
};

export const loader: LoaderFunction = async ({ request }) => {
    const { getTheme } = await getThemeSession(request)
  
    return json<RootLoaderData>({
      theme: getTheme(),
      url: {
        origin: getDomainUrl(request),
        path: new URL(request.url).pathname,
      },
    })
  }
  
  function App() {
    const { theme } = useTheme()
  
    return (
      <Document theme={theme}>
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    )
  }
  export const Layout = ({children}: {
    children: React.ReactNode
  }) => {
    return (
        <div>
            <Navbar/>
            {children}
            <TopBtn />
            <Footer/>
        </div>
    )
}
  
  export default function AppWithProviders() {
    const data = useLoaderData<RootLoaderData>()
  
    return (
      <ThemeProvider initialTheme={data.theme}>
        <App />
      </ThemeProvider>
    )
  }
  
  function Document({
    children,
    title,
    theme = 'dark',
  }: {
    children: React.ReactNode
    title?: string
    theme?: Theme
  }) {
    return (
      <html lang="en" className={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <noscript>
            <link rel="stylesheet"  />
          </noscript>
        </head>
        <body className="dark:bg-gray-900 min-h-screen overflow-x-hidden'">
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
// export default function App() {
//     return (
//         <html lang="en">
//             <head>
//                 <meta charSet="utf-8" />
//                 <meta
//                     name="viewport"
//                     content="width=device-width,initial-scale=1"
//                 />
//                 <Meta />
//                 <Links />
//             </head>
//             <body>
//                 <Outlet />
//                 <ScrollRestoration />
//                 <Scripts />
//                 {process.env.NODE_ENV === "development" && <LiveReload />}
//             </body>
//         </html>
//     );
// }
