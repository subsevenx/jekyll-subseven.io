# jekyll-subseven.io
Repo for site

## Structure
Site uses a wrapper template and post template to manage structure. There are options to include a full width page and/or side bar via FrontMatter. 

```
---
layout: wrapper #global wrapper
title: "Test Page"
sidebar: true #true or false
seo-title: "This is a test seo title"
seo-description: "This is a test seo description"
seo-keywords: "blog, post, archive, live, love laugh" # you don't really need quotation marks
og-title: This is a test opengraph title
og-description: This is a test opengraph description
og-image: /assets/img/placeholder.png # can be absolute or relative link. Will fall back to featured image if not specified. 
featured: #relative path of featured image. Can be used anywhere but should be used for posts.
---
```

These variables have to be configured on the top-level pages (not _layouts or _includes.)
