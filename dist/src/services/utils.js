export const getType = (query) => {
    const params = new URLSearchParams(query)
    return params.get('type')
}
  