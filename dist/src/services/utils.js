export const getType = (query) => {
    const params = new URLSearchParams(query)
    console.log(`from utils.js getType >> ${query}`)
    return params.get('type')
}
  