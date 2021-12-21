![Website Build](https://github.com/subsevenx/jekyll-subseven.io/actions/workflows/deploy.yml/badge.svg)

# Source Code for subseven.io, made in Jekyll
Source for [subseven.io](https://subseven.io/). A personal homepage and portfolio built with [Jekyll](https://jekyllrb.com), [NetlifyCMS](https://www.netlifycms.org/), [Bootstrap 5](https://getbootstrap.com/), [DigitalOcean](https://digitalocean.com/) and GitHub Actions.

This repo isn't set up to work with as a "theme", although you are more than free to fork and use it in your project. I do plan to make it a proper theme in the future™. This *should* work on GitHub (everything but the OAuth/CMS stuff) pages since most of the functionality is Liquid-based but I have not tested it.

## Projects Used

- [Mendeo Jekyll Minifier](https://github.com/Mendeo/jekyll-minifier) 
- [Allejo’s Table of Contents:](https://github.com/allejo/jekyll-toc)
- [Oliver van Porten’s OAuth PHP Solution for NetlifyCMS](https://github.com/mcdeck/netlify-cms-oauth-provider-php)
- [Arthur Gareninyan’s Privacy Policy Boilerplate](https://github.com/ArthurGareginyan/privacy-policy-template)
- [Cats as a Service](https://cataas.com/)

## Quirks

This site is built around my workflows: PHP, Apache, Millennial irony, and CDNs. I'm still actively developing the site and things will change as I continue to learn and implement new things. If you plan on using, please note that there's a lot of cleanup needed. Namely: analytics code, images, recaptcha, etc.

## Features
* Easily extensible sidebar that features latest posts, tags, and categories. Can be dis/enabled via front matter. Supports conditional checks if no blog posts/tags/categories exist. 
* Tags/Archive explorer page in Liquid.
* Self-updating sitemap. Respects indexability of pages.
* Full NetlifyCMS integration
    - "SEO" management via CMS, ala Yoast (but without charging you hundreds a year for fancy meta tags). Including: OpenGraph, Meta Tags, Indexability. A lot of fallbacks if you don't want to bother with it.
    - Edit all the **content** from the CMS. No need too update via FrontMatter.
* Repeatable content loops for consistent structure.
* Navigation menu with active selection, menu items,  (Powered by Bootstrap).
* [Now Page](https://nownownow.com/about), sorted by most recent post.
* 404/403 error pages OTB via .htaccess
* Simple and fast 
* Semantic structuring and accessibility as a foundation, not an afterthought.

## Future Plans
A lot, will document later.
