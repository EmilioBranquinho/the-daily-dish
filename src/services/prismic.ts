import * as prismic from '@prismicio/client'
import { IncomingMessage } from 'http'

export function getPrismicClient(req?: IncomingMessage) {
  const endpoint = prismic.getRepositoryEndpoint('the-daily-dish') 
  const client = prismic.createClient(endpoint, {
    accessToken: '', 
    fetch: async (url, options) => {
      return fetch(url, { ...options, cache: "no-store" });
    },
  })
  return client
}
