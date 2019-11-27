const apiUrl = process.env.VUE_APP_API_URL

export default (state) => {
  const buildPayload = (authorization, body) => ({
    headers: { authorization, 'content-type': 'application/json' },
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors'
  })

  const post = async ({ url, body }) => {
    const authorization = state.authToken
    const payload = buildPayload(authorization, body)

    const response = await fetch(`${apiUrl}/${url}`, payload)
    const content = await response.json()

    if (response.status >= 400 && response.status < 600) {
      throw new Error(content.error)
    }

    return content
  }

  const fetchGraphql = async (query) => {
    const authorization = state.authToken
    const payload = buildPayload(authorization, { query })

    const response = await fetch(`${apiUrl}/graphql`, payload)
    const json = await response.json()

    return json.data
  }

  return {
    fetchGraphql,
    post
  }
}
