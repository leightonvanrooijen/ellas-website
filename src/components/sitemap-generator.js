require("isomorphic-fetch");

let slugs = [];

function getData() {
  fetch("http://139.180.169.89:81/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      entries {
    ... on blog_blog_Entry {
      slug
    }
  }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      logData(res.data);
    });
}

function logData(data) {
  data.entries.map((entry) => {
    entry.slug ? slugs.push(entry.slug) : null;
  });
  generateSitemap();
}

require.extensions[".png"] = function () {
  return null;
};
require.extensions[".jpg"] = function () {
  return null;
};

require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./Routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  console.log(slugs);
  const pathsConfig = {
    "/blog/:id": [
      {
        id: slugs,
      },
    ],
  };
  return new Sitemap(router())
    .applyParams(pathsConfig)
    .build("http://139.180.169.89")
    .save("./public/sitemap.xml");
}

getData();
