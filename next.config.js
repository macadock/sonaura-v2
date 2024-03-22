/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'omzwibopitojmqdieuml.supabase.co',
      },
      {
        hostname: 'localhost',
      },
      {
        hostname: 'tovacwhfjceywstgqzrd.supabase.co',
      },
    ],
  },
};
