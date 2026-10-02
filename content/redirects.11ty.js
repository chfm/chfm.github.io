// One redirect page for each old URL a page lists under `redirect_from`

export default class {
  data() {
    return {
      pagination: { data: "collections.redirects", size: 1, alias: "redirect" },
      eleventyExcludeFromCollections: true,
      permalink: ({ redirect }) =>
        /\.[a-z]+$/.test(redirect.from) ? redirect.from : `${redirect.from.replace(/\/$/, "")}/index.html`,
    };
  }

  render({ redirect, site }) {
    const url = `${site.url}${site.baseurl}${redirect.to}`;
    return `<!DOCTYPE html>
<html lang="en-US">
  <meta charset="utf-8">
  <title>Redirecting&hellip;</title>
  <link rel="canonical" href="${url}">
  <script>location="${url}"</script>
  <meta http-equiv="refresh" content="0; url=${url}">
  <meta name="robots" content="noindex">
  <h1>Redirecting&hellip;</h1>
  <a href="${url}">Click here if you are not redirected.</a>
</html>
`;
  }
}
