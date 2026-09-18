/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16: the React Compiler is stable and memoises components automatically.
  // Worth it here because the page is animation-heavy — it removes the need to
  // hand-place useMemo/useCallback around scroll and pointer handlers.
  reactCompiler: true,

  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback: a meaningful LCP win on the project
    // grid. Every image is local now, so there is no remote allowlist.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          // `no-referrer` strips the Referer header entirely, which broke the
          // LeetCode GraphQL call. same-origin keeps it for our own requests
          // while still not leaking paths to third parties.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "microphone=(), camera=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Generated OG cards and the static profile image never change per user.
        source: "/:path*.(png|jpg|jpeg|svg|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
