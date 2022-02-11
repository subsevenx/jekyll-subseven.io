---
title: Bulding a Jekyll Site in the 20s
tags: 
    - jekyll 
    - jamstack 
    - static sites
categories: 
    - personal
date: 2022-02-10 16:19:31 --600
---
*🧠 This is part one series on Jekyll. The following is a personal piece on what it feels like to work with Jekyll in the year 202X, and an exploration of static sites* 

*🔭 Article Scope: This article is written from the viewpoint of a 20-something who spent most of his teens and early adulthood exclusively with PHP, WordPress, and the LAMP stack.*

<hr>

## WordPress

I like WordPress. I’ve been using it since around 2012 and developing on it since 2015. There’s always been some elitist attitudes around it. The greatest hits include: “it’s so slow”,  “PHP sucks”,  “it’s so bloated”, *ad infinitum*. I’ve made my peace with it, it’s part of the job.

I don’t want to evangelize either though—there’s a lot of gripes I have with the platform, but much of what I hear is based on misconceptions or half truths. But a lot of the things that I feel *should* be critiqued, aren’t.   

Either way, My experience with it taught me a lot, and has been (mostly) positive. I certainly wouldn’t know as much if I hadn’t been involved with it. There’s a  very clear correlation of my knowledge about server maintenance and time spent with WordPress.

I still use it today, but mainly in a professional context. Around 2019 I started getting a little burn out since much of my work revolved around it. Over time, I began to feel like, *yeah, maybe my rarely updated website doesn’t need a database*. So I started to look elsewhere. 

## Static Sites, JAMStack, and Beyond 

### Static Generators & Jekyll At a Glance

At this point, I hope Jekyll requires little introduction&#151;but if you don’t know what it is, that’s okay! Consider yourself one of today's lucky 10,000. 

<img src="https://imgs.xkcd.com/comics/ten_thousand.png" alt="XKCD Coming: 1053">

Jekyll is an opinionated static site generator that treats blogging as a first-class citizen. 

It was released in 2008, written in Ruby, and created by GitHub co-founder Tom Preseton-Werner. For a long time, it was *the* premier static site generator; sparking a passionate community of enthusiasts, evangelists, and developers. For many, it was their introduction to static site generators.

Since 2008, the landscape around static site generators has changed significantly in the last few years. For one, there are now *hundreds* of them! [jamstack.org](jamstack.org) currently lists 333, while [staticsitegenerators.com](staticsitegenerators.com) lists 460. Jekyll, I’d argue, was the catalyst as to why there are so many. So while it may not enjoy the *shiny new toy* treatments other generators receive as of lately, its importance cannot be understated

### My Introduction

My introduction to Jekyll happened in the spring of 2017. A friend of mine was talking to me about Ruby on Rails and in one of the conversations, they mentioned Jekyll. I took a look at it, played with and…didn’t quite see what the big deal was. Little did I know I should have probably spent more time reading the documentation. 

Come 2020, I wanted to maintain my own website again. I remembered Jekyll and began to read the docs again. This time it clicked. I’m not sure how to describe the feeling, but working with Jekyll gave me that *I just made things happen on the browser* feeling I got when I first started making website. It made things fun. 

Due to…well, *gestures at the state of the world*, I put the site on hold until September 2021. But once I started, boy, did I start. 

## The Jekyll Confessional

I didn’t really plan out how I wanted to make my website. I’m a millennial so I took a YOLO approach and made decisions based on the order that they appeared in my head. 

What I did know is that I wanted to build as much of it as possible myself and as quickly as possible. 

Following this ethos, I decided on the following:

 - No starting theme or template 
 - Accessible 
 - Bootstrap to speed up the design and structure
 - Minimal use of outside plugins because I wanted to learn new things
 - Fast to load
 - Auto-deployment on my own server
 - CMS integration 

Starting a site was fairly straightforward. You install Ruby, you install a few gems, and then you run: `jekyll new . —blank` to make a blank Jekyll site.

Then you `bundle exec jekyll server` to start the web sever/compile and then—BAM! You have a bare-bones Jekyll site you are now free to design to your heart’s content. Pretty easy! The Jekyll documentation is well written (and in my opinion) it’s pretty accessible in almost all fronts… except one.

### Ruby and its Dependents

Oh good ol’ Ruby. I actually really like the language but setting up a proper dev environment is just a *tad* bit less confusing than setting one up with Node. I will fully admit this is likely due to my lack of experience. However, it did take a bit of research to wrap my head around a few essential things.

#### Ruby Versions

Following Jekyll’s [documentation](https://jekyllrb.com/docs/installation/ubuntu/) should get most people up and running. But let’s say that playing around with Jekyll made you curious about Ruby and making your own Gems. So you decided to update your system’s Ruby version because your system’s version is 2 years out of date and…now things are broken!

A borked system is an excellent teacher. Shortly after I read up on rvm/rbenv and local/global versions. The following commands can save you a headache: 


```sh
# Installs dependencies you need
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
# Clones rbenv repo
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
# Exports rbenv path to your .bashrc and registers for use
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
#Reloads the shell
source ~/.bashrc
# Installs plugin
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
# Install latest stable Ruby version. Alternatively, you could just install the version you want via rbenv {{version.number}}
rbenv install $(rbenv install -l | grep -v - | tail -1)
# Now you can either do: 
rbenv global version.number #to install globally or
rbenv local version.number #to install locally
```

Additionally! If you are running a version of Ruby 3.0 or higher with Jekyll, you will need to include another gem. On your current project run:

`bundle add webrick` 

#### Bundle and Gems

If you run `gem update` on your Jekyll site, you’re gonna have a bad time. When you want to update gem version, make sure you do it from within the Gemfile and with bundler! If things break, thankfully all you’ll likely have to do is to remove your `gems` directory and `bundle install` on your site’s directory. 

### Time To Structure

Initially one of the things I spent  the most time on was deciding how I should organize things and how I should design it. I spent a good amount of time visiting personal home pages, blogs, and folks on the *indie we*b and their repos to get some ideas. 

I settled on having only two layouts: one main wrapper (with two structures) and a layout for blog posts that inherits the main layout. In the early stages of the site I played around with the idea of having different layouts per page but with the (lack of) content I had so far, it didn’t make too much sense. I opted on using Bootstrap 5 since their grid system makes things really easy to structure. 

I also went full in on Liquid imports and made components out of every little piece of markup; if I needed to repeat it more than one time, it’s going in the `\_includes` directory. While initially tedious, it has made maintenance and debugging simple.

Lastly, I went back and fort on how I would use data files. They exists to make the separation of content and structure easier, but I still don’t think I’ve found a great way to standardize them in my site. They handle the links for my navigation menu but some also handle content for a handful of pages.  

### Liquid

Jekyll comes bundled with the Liquid templating language. The language is interesting. It’s kinda programmatic but limited. For example, you can loop with it it and it has variables, but they work unlike most languages. 

The main draw for me was that I could break everything into a component and  then import it into the page. You can also use liquid and external data files to create repetitive markup.   

For example, making a menu will usually require a bunch of wrappers and links. With Liquid you can define the main structure and the let Liquid take care of the rest; gathering the links from an external data file and building the rest of the structure via boilerplate.

```html
{% raw %} 
{% for nav-item in site.data.nav.menu %}
{%- comment -%} Checks to see if there's nested items {%- endcomment -%} 
{% if nav-item.child[0] %}
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="{{nav-item.link}}" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="{%if nav-item.link == page.url %}true{%else%}false{%endif%}"><img class="img-fluid" height="28" width="28" src="{{nav-item.icon}}" alt="">{{nav-item.name}}</a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    {% for child in nav-item.child %}
    <li><a class="dropdown-item {%if child.link == page.url %}active{%endif%}" href="{{child.link}}" {%if child.link == page.url%}aria-current="page"{%endif%}>{{child.name}}</a></li>
    {%- endfor -%}  
    </ul>
</li>
{%- comment -%} Normal iteration, if item with child exists already, it won't render {%- endcomment -%}
{% elsif nav-item != nav-item.child %}
<li class="nav-item" role="menuitem">
    <a class="nav-link {%if nav-item.link == page.url %}active{%endif%}" href="{{nav-item.link}}" {%if nav-item.link == page.url%}aria-current="page"{%endif%}><img class="img-fluid" height="28" width="28" src="{{nav-item.icon}}" alt="">{{nav-item.name}}</a> 
</li>
{% endif %}
{%- endfor -%}
{% endraw %}
```

You can use it to do some pretty advanced things. As mentioned previously, my site only uses two layouts. However, my main layout includes two different configurations: one with and one without a sidebar. 

This is handled via if statements that check each page’s front matter at build time for the variable that enable/disables it. Pretty cool! In theory this means you could do it for more layouts on a single page…but I’d advise against it! At that point you should consider just making a separate layout. 
    
```html
{% raw %}
    {% if page.sidebar == true %}
            <div class="row">
                <div class="col-lg-9">
                    {%- if page.blurb -%}
                        {{page.blurb}}
                    {%- endif -%}
                    {{content}}
                </div>
                <div class="col-lg-3">
                    {% include components/sidebar/sidebar.html %}
                </div>
            </div>   
        {% else %} 
        {%- if page.blurb -%}
        {{page.blurb}}
        {% endif %}
            {{- content -}} 
        {% endif %}
{% endraw %}
```

### Design, Flare, and SASS!

Jekyll works with SASS right out of the box. All you need to do is put files within a `\_sass` directory and import it within your asset folder’s main SCSS file. 

My customization was fairly small—only importing the components I needed and tweaking existing variables. It ended up being fairly lean but it definitely looks like a Bootstrap site. 

Bootstrap wasn’t meant to be a long-term solution though; it was mainly included for the sake of time. Right now the site is in a good place functionality-wise so a redesign is around the corner.

The current hurdle I’m trying to get over is just understand the new front-end world. I’ve been living under a rock and the complexity of building a front-end seems to have grown significantly. Wrapping my head around bundlers, npm, 

### Content Management

A CMS in a static site?! Yeah, I know. I coudln't believe it either

## Complexity As a Form of Exercise

I gave myself many unseeded headaches while building this site. For example, making a tag and category page would be fairly easy if I had used one of the many plugins that does it for you, such as [Jekyll Archives](https://github.com/jekyll/jekyll-archives). However, it seems I tend to learn better if I just jump on the deep end and try to figure it out.

###  