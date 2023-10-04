// import React from 'react';
var fs = require('fs');
var axios = require('axios')
// import  Axios  from 'axios';
async function generateSitemap() {
    // Fetch dynamic URLs from your e-commerce website's data source.
    // You may need to make API calls or use your database here.
    // React.useEffect(() => {
      const fetchSitemapData = async () => {
        try {
          const response = await axios.get('https://api.cannabaze.com/UserPanel/Get-Categories/');
          return response.data;
        } catch (error) {
          console.error('Error fetching sitemap data:', error);
          return [];
        }
      };
      console.log( fetchSitemapData)
  
    // Create the sitemap XML string
    // const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //     ${Category.map((url) => `
    //       <url>
    //         <loc>https://example.com${url}</loc>
    //         <changefreq>daily</changefreq>
    //         <priority>0.7</priority>
    //       </url>
    //     `).join('')}
    //   </urlset>`;
  
    // // Write the sitemap XML to a file
    // fs.writeFileSync('../public/Sitemap/sitemap.xml', sitemapXml);
    // fs.writeFileSync('../public/Sitemap/sitemap1.xml', sitemapXml);
  
    console.log('Sitemap generated and saved as sitemap.xml');
  }
  
  // Generate the sitemap
  generateSitemap();