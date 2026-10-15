export function createServerResponse(res) {
  let statusCode = 200
  let payload

  const response = {
    status(code) {
      statusCode = code
      return response
    },
    json(data) {
      payload = data
      return response
    },
    setHeader(name, value) {
      res.setHeader(name, value)
      return response
    },
    finish() {
      res.statusCode = statusCode
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(payload))
    },
  }

  return response
}
