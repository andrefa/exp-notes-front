const apiUrl = process.env.VUE_APP_API_URL

export default (state) => {
  const buildPayload = (authorization, query) => ({
    headers: { authorization, 'content-type': 'application/json' },
    body: JSON.stringify({ query }),
    method: 'POST',
    mode: 'cors'
  })

  const fetchGraphql = async (query) => {
    const authorization = state.authToken
    const payload = buildPayload(authorization, query)

    const response = await fetch(`${apiUrl}/graphql`, payload)
    const json = await response.json()

    return json.data
  }

  return {
    fetchGraphql
  }
}
