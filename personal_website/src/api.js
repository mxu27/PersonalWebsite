/**
 * Base URL for the backend API. Set via VITE_API_URL in .env.development or .env.production.
 * No trailing slash.
 */
const API_BASE = import.meta.env.VITE_API_URL ?? ''

export function apiUrl(path) {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE}${p}`
}

/**
 * Example: call the backend /hello endpoint.
 * @param {string} [name]
 * @returns {Promise<string>}
 */
export async function getHello(name) {
  const url = new URL(apiUrl('/hello'))
  if (name) url.searchParams.set('name', name)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.text()
}
