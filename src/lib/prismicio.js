// @ts-nocheck
import * as prismic from '@prismicio/client'

const repoName = 'fluma' // Fill in your repository name
const accessToken = 'MC5aRjJFOHhFQUFDSUF4MDRt.GO-_ve-_vTJKEu-_ve-_vT3vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71eVQfvv73vv73vv701d--_ve-_vVTvv73vv70' // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'homepage',
    uid: 'home',
    path: '/',
  },
  {
    type: 'design',
    path: '/design',
  },
  {
    type: 'technology',
    path: '/technology',
  },
  {
    type: 'service',
    path: '/service',
  },
  {
    type: 'tech',
    path: '/tech/:uid',
  },
]

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client
}

export default createClient