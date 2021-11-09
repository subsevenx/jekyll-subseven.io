---
title: Building A Jekyll Site In 2021
date: 2021-10-21 16:31:34
category: Web Development
tags: [jekyll, web development, static sites, test, more more, lesss yes]
excerpt: With an abundant choice of modern static site generators, why would someone still use Jekyll in 2021?

seo-title: Building A Jekyll Site in 2021
seo-description: With an abundant choice of modern static site generators, why would someone still use Jekyll in 2021? 
---
## The World of Static Site Generators


## Background.
Until 2019, this domain had a static HTML site (not using Jekyll.) In the fall of 2019 I transitioned it to Jekyll but I wasn't happy with the results. In the last few weeks I got an itch to make something, and thus, decided to rebuild it from scratch. 

This time around I took full advantage of the external data files and Liquid templating. Around 90% of the site's content is being delivered via a handful of YAML files&mdash;with the exception of posts. 

This allows me to decouple structure from content and makes managing plages much easier. 

## What's the Catch?
- The content loop I'm using to deliver the content to the pages is very linear&mdash;thus, I if want to experiment with per-page layouts, I would have to modify it on a per-page basis. This isn't an issue so far since most pages on this site <em>are</em> pretty linear but that would make this theme pretty one-dimensional.
    
- I am using a <em>lot</em> of components. Build time isn't horrible now but I do expect performance issues if my content grows substantially. 