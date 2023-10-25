const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const { parseString, Builder } = require('xml2js');
var axios = require('axios')
// const xml = fs.readFileSync('./build/Sitemap/weed-deliveries.xml', 'utf-8');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Define a route
function modifystr(str) {
  str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
  str = str.trim().replaceAll(' ', "-");
  let a = 0;
  while (a < 1) {
    if (str.includes("--")) {
      str = str.replaceAll("--", "-")
    } else if (str.includes("//")) {
      str = str.replaceAll("//", "/")
    } else if (str.includes("//")) {
      str = str.replaceAll("-/", "/")
    } else if (str.includes("//")) {
      str = str.replaceAll("/-", "/")
    } else {
      a++
    }
  }

  return str
}



app.post('/api-data', (req, res) => {
  try {
    const xml = fs.readFileSync('./build/Sitemap/weed-deliveries.xml', 'utf-8');
    parseString(xml, (err, result) => {
      if (err) {
        console.error('Error parsing XML');
      } else {
        const jsonObject = result;
        const json = jsonObject.urlset.url.map((data) => data.loc[0])
        if (!json.includes('https://www.weedx.io' + req.body.data)) {
          json.push('https://www.weedx.io' + req.body.data);
        }
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
        fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml);

        axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/4`,
          {
            Xml: json
          },
        ).then((res) => {}).catch((err) => {
  
        })
      }
    });
  } catch (error) {
    console.log('error')
    axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/4`,
    ).then((res) => {
      if (res.data.length === 0) {
        const url = modifystr('https://www.weedx.io' + req.body.data)
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${url}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
      </urlset>`;
        fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml);
        axios.post(`https://api.cannabaze.com/UserPanel/Add-SiteMap/`,
          {
            Xml: url
          },
        ).then((res) => { console.log(res) }).catch((err) => {
          console.log(err)
        })
      }
      else {
        const json = res.data[0].Xml

        if (!json.includes('https://www.weedx.io' + req.body.data)){
          json.push('https://www.weedx.io' + req.body.data);
        }
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

        fs.writeFileSync("./build/Sitemap/weed-deliveries.xml", sitemapXml);
        axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/4`,
          {
            Xml: json
          },
        ).then((res) => {
          // console.log(res) 
        }).catch((err) => {
        })
      }
    }).catch(() => {

    })

  }
})

app.listen(5000, () => {
  console.log(`Node Server is running on port ${5000}`);
});
