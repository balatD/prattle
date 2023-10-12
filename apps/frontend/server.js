const next = require('next')
const http = require('http')

const app = next({ dev: process.env.NODE_ENV !== 'production' })

app.prepare().then(() => {
    const server = http.createServer((req, res) => {
        if (req.url.startsWith('/api')) {
        } else {
            return app.getRequestHandler()(req, res)
        }
    })
    server.listen(3100, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3100')
    })
})