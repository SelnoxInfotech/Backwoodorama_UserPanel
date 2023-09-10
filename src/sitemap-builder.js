require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('../src/Routes/ConfigRoute').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://www.weedx.io/')
          .save('./public/sitemap.xml')
  );