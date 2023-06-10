const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '5rn9yb33',
  dataset: 'production',
  apiVersion: '2021-04-02',
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client
