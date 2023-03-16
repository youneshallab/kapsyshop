/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const imageConfig = {images: {
  domains: [
    'images.ctfassets.net'
  ],
},}

module.exports = {
  ...nextConfig,
  ...imageConfig
}
