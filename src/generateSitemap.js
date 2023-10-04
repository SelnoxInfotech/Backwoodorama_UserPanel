
var fs = require('fs');

function generateSitemap() {
    // Fetch dynamic URLs from your e-commerce website's data source.
    // You may need to make API calls or use your database here.
    const dynamicUrls = [
      '/products/product-1',
      '/products/product-2',
      // Add more dynamic URLs here
    ];
  
    // Create the sitemap XML string
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${dynamicUrls.map((url) => `
          <url>
            <loc>https://example.com${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `).join('')}
      </urlset>`;
  
    // Write the sitemap XML to a file
    fs.writeFileSync('/public/sitemap.xml', sitemapXml);
  
    console.log('Sitemap generated and saved as sitemap.xml');
  }
  
  // Generate the sitemap
  generateSitemap();