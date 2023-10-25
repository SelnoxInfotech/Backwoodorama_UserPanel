// import React from 'react';
var fs = require('fs');
var axios = require('axios')
const cron = require("node-cron");
var value =  0
async function generateSitemap() {

  axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/10`,
  ).then((respones) => {
     const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${respones.data[0].Xml.map((url) => `
        <url>
          <loc>${url}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;

  // Write the sitemap XML to a file
  fs.writeFileSync('./build/Sitemap/weed-dispensaries.xml', sitemapXml);
  })

  axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/11`,
  ).then((respones) => {
     const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${respones.data[0].Xml.map((url) => `
        <url>
          <loc>${url}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`;

  // Write the sitemap XML to a file
  fs.writeFileSync('./build/Sitemap/weed-deliveries.xml', sitemapXml);
  value = 0
  })
}
cron.schedule("*/5 * * * * *", function () {
 if(value === 0){
  value = 1
  generateSitemap()
 }
 
});