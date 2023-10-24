const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const { parseString, Builder } = require('xml2js');

// const xml = fs.readFileSync('./build/Sitemap/weed-deliveries.xml', 'utf-8');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Define a route
app.post('/api-data', (req, res) => {
  console.log('https://www.weedx.io'+req.body.data)
  try {
    const xml = fs.readFileSync('./build/Sitemap/weed-deliveries.xml', 'utf-8');
    parseString(xml, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        const jsonObject = result;
  
        const json = jsonObject.urlset.url.map((data) => data.loc[0])
        console.log(json[0] === 'https://www.weedx.io/'+req.body.data)
        if (!json.includes('https://www.weedx.io/'+req.body.data)) {
          // Value doesn't exist, so update the array
          json.push('https://www.weedx.io'+req.body.data);
        }
        console.log(json)
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${json.map((url) => `
            <url>
              <loc>${url}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `).join('')}
        </urlset>`;
  
     const f = fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml );
      }
    });
  } catch (error) {
    console.log('error')
    const url =  'https://www.weedx.io'+req.body.data
          const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
      </urlset>`;
      fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml );
      // fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml );
  }
})

    
//    console.log(f)
// });

// Start the server
app.listen(5000, () => {
  console.log(`Node Server is running on port ${5000}`);
});
