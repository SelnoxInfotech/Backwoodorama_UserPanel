// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const PORT = 3000;

// // Middleware to replace dynamic content in HTML
// const renderHTML = (req, res, next) => {
//     // Fetch dynamic content here
//     let dynamic_title = "Dynamic Title";
//     let dynamic_description = "Dynamic Description";
//     let dynamic_image = req.path === "/" ? "https://example.com/home-image.jpg" : "https://example.com/default-image.jpg";

//     // Read the index.html file asynchronously
//     fs.readFile("./build/index.html", "utf8", (err, htmlContent) => {
//         if (err) {
//             console.error("Error reading HTML file:", err);
//             res.status(500).send("Internal Server Error");
//             return;
//         }

//         // Replace dynamic content in the HTML
//         htmlContent = htmlContent.replace("__PAGE_TITLE__", dynamic_title);
//         htmlContent = htmlContent.replace("__OG_DESCRIPTION__", dynamic_description);
//         htmlContent = htmlContent.replace("__OG_IMAGE__", dynamic_image);

//         // Set modified HTML to response locals for use in routes
//         res.locals.modifiedHTML = htmlContent;
//         next(); // Proceed to the next middleware or route handler
//     });
// };

// // Serve static files from the build directory
// app.use(express.static(path.join(__dirname, "./build")));

// // Use the renderHTML middleware for all routes
// app.use(renderHTML);

// // Route to serve the modified HTML for all routes
// app.get("*", (req, res) => {
//     // Send the modified HTML as the response
//     res.send(res.locals.modifiedHTML);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Express app running on port ${PORT}.`);
// });




const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();

// Middleware to serve static files
app.use(express.static(path.resolve(__dirname, 'build')));

// API endpoint to fetch news post data
app.get('/cannabis-news/:news?/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        // Make API call to fetch news post data including OG image URL
        const response = await axios.get(`https://api.cannabaze.com/UserPanel/Get-GetNewsById/${postId}`);
        const postData = response.data[0]; // Assuming response is an array

        // Generate dynamic meta tags and title
        const ogImageMetaTag = `<meta property="og:image" content="${postData.Image}">`;

        let indexHtml = fs.readFileSync(path.resolve(__dirname, 'build', 'index.html'), 'utf-8');
        indexHtml = indexHtml.replace(/<meta\s+property="og:image"\s+content="[^"]*">/, ogImageMetaTag);
        res.send(indexHtml);
    } catch (error) {
        // console.error('Error fetching news post data:', error);
        res.status(500).send('Error fetching news post data');
    }
});
app.get("/Sitemap/:category", async (req, res) => {
    switch (req.url) {
        case "/Sitemap/weed-dispensaries.xml":
            const response1 = await axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/14`);
            if (response1.data[0].Xml) {

                const sitemapXmll = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${response1.data[0].Xml.map((url) => `
              <url>
                <loc>${url}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `).join('')}
          </urlset>`;
                res.setHeader('Content-Type', 'text/xml');
                res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
                res.write(sitemapXmll);
                res.end();
                //   fs.writeFileSync('./build/Sitemap/weed-dispensaries.xml', sitemapXmll);
            }
            break;
        case "/Sitemap/weed-deliveries.xml":
            const response2 = await axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/11`);

            if (response2.data[0].Xml) {

                const sitemapXmll = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${response2.data[0].Xml.map((url) => `
              <url>
                <loc>${url}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `).join('')}
          </urlset>`;
                res.setHeader('Content-Type', 'text/xml');
                res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
                res.write(sitemapXmll);
                res.end();
                //   fs.writeFileSync('./build/Sitemap/weed-dispensaries.xml', sitemapXmll);
            }
            break;
        // additional cases as needed
        default:
        // code block executed if expression doesn't match any case
    }
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
