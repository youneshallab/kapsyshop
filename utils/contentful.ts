const contentful = require('contentful')
const contentfulClient = contentful.createClient({
    space: '1islbq58yv4m',
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })
export default contentfulClient;
