/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'image.tmdb.org',
		  port: '',
		  pathname: '/t/p/**', // TMDB uses /t/p/ for images
		},
	  ],
	},
  };
  
  module.exports = nextConfig;
  