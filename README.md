# jekyll-subseven.io
Repo for site

## Structure
Site uses a wrapper template and post template to manage structure. There are options to include a full width page and/or side bar via FrontMatter. 

```
---
sidebar: true or false
full: true or false
seo-title:
seo-description:
keywords:
---
```

These variables have to be configured on the top-level pages (not _layouts or _includes.)

## TODO

- Remove different layouts in the main wrapper. It's just not maintainable. I'll bite the bullet and just do per page sidebar specification. 
