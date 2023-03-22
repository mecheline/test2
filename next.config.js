/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/api-handler",
        destination: "https://kunda-test2.vercel.app/api/api-handler",
      },
    ];
  };
  return {
    rewrites,
  };
};
