import { Hono } from 'hono'
import { renderer } from './renderer'
import home from './pages/home'
import design from './pages/design'
import composable from './pages/composable-architecture'
import tech from './pages/tech'
import servicos from './pages/servicos'
import { NotFount } from './pages/404'

const app = new Hono()

app.get('*', renderer)

app.route('/', home)
app.route('/design', design)
app.route('/composable-architecture', composable)
app.route('/tech', tech)
app.route('/servicos', servicos)
app.notFound(c => {
    return c.render(<NotFount />)
})

export default app
