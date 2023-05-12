import { error } from '@sveltejs/kit'

import createClient from '$lib/prismicio'

export async function load({ fetch, params, request }) {
  const client = createClient({ fetch, request })
  const document = await client.getByUID('technology', 'technology')

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}