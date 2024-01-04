import { Hono } from 'hono'
import { renderer } from './renderer'
import home from './pages/home'
import design from './pages/design'
import composable from './pages/composable-architecture'
import tech from './pages/tech'
import servicos from './pages/servicos'
import { NotFount } from './pages/404'
import { Sitemap } from './pages/sitemap'

const app = new Hono()

app.get('*', renderer)

app.get('robots.txt', c => {
    return c.text("User-agent: *\nAllow: /\n\nSitemap: https://htmx.fluma.pages.dev/sitemap.xml"
    )
}
)

app.get('sitemap.xml', c => {
    return c.text(Sitemap)
})

app.route('/', home)

app.route('/design', design)
app.route('/composable-architecture', composable)
app.route('/tech', tech)
app.route('/servicos', servicos)
app.notFound(c => {
    return c.render(<NotFount />)
})

export default app
