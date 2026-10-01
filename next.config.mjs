/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/testimonials",
        destination: "https://siddhartha-testimonials-api.onrender.com/api/testimonials",
      },
      {
        source: "/api/photos/:id",
        destination:
          "https://siddhartha-testimonials-api.onrender.com/api/photos/:id",
      },
    ]
  },
}

export default nextConfig