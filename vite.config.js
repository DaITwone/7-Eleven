import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function mtoApi() {
  return {
    name: 'mto-api',
    configureServer(server) {
      server.middlewares.use('/api/mto/entries', async (req, res) => {
        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const body = Buffer.concat(chunks).toString('utf8')
          req.body = body ? JSON.parse(body) : undefined

          const [{ default: handler }, { createServerResponse }] = await Promise.all([
            import('./api/mto/entries.js'),
            import('./api/_lib/viteResponse.js'),
          ])
          const response = createServerResponse(res)
          await handler(req, response)
          response.finish()
        } catch (error) {
          console.error('MTO API request failed', error)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Unable to process inventory request.' }))
        }
      })
    },
  }
}

export default defineConfig({ plugins: [react(), mtoApi()] })
