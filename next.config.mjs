import { TESTIMONIALS_API_BASE } from "./src/lib/testimonials.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // R3F's <Canvas> creates its WebGL renderer inside a layout effect whose
  // cleanup calls unmountComponentAtNode() -> gl.forceContextLoss().
  // React StrictMode (on by default for the App Router in dev) double-invokes
  // effects, so the remount reuses the same <canvas> whose context is already
  // lost, leaving a permanently blank hero canvas. Keep StrictMode off.
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/testimonials",
        destination: `${TESTIMONIALS_API_BASE}/api/testimonials`,
      },
      {
        source: "/api/photos/:id",
        destination: `${TESTIMONIALS_API_BASE}/api/photos/:id`,
      },
    ]
  },
}

export default nextConfig