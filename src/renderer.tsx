import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html lang='pt-BR'>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Fluma // Agência digital</title>
          <meta name="description" content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos." />
          <meta property="og:url" content="https://fluma.dev/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Fluma // Agência digital" />
          <meta property="og:description" content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="fluma.dev" />
          <meta property="twitter:url" content="https://fluma.dev/" />
          <meta name="twitter:title" content="Fluma // Agência digital" />
          <meta name="twitter:description" content="Agência digital especializada em e-commerce, desenvolvimento web e aplicativos." />
          <meta name="twitter:image" content="https://fluma.dev/og.png" />
          <meta name="keywords" content="sistemas,sites,aplicativos,software,desenvolvimento de software,desenvolvimento de aplicativos,desenvolvimento de sites,agência de desenvolvimento,criação de sites,empresa de desenvolvimento de sites " />
          {/* <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous" /> */}
          <link href="/static/style.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Serif+Display&display=swap" rel="stylesheet" />
        </head>
        <body class='bg-orange-100'>{children}</body>
      </html>
    )
  },
  {
    docType: true
  }
)
