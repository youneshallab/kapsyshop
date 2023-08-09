const contentful = require('contentful')
const contentfulClient = contentful.createClient({
    space: '1islbq58yv4m',
    environment: 'master', // defaults to 'master' if not set
    accessToken: "_w7SOCXsYNpLzGpIS9IzQU6NCLgsklsO_wy9hK3v1gY"
  })
export default contentfulClient;
