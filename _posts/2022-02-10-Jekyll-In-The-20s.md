p---
title: Bulding a Jekyll Site in the 20s
tags: 
    - jekyll 
    - jamstack 
    - static sites
categories: 
    - personal
date: 2022-02-10 16:19:31 --600
---
*🧠 This is part one series on Jekyll. The following is a personal piece on what it feels like to work with Jekyll in {{page.date | date: "%Y"}}, and a brief exploration of static sites* 

*🔭 Article Scope: This article is written from the viewpoint of a 20-something who spent most of his teens and early adulthood exclusively with PHP, Laravel, WordPress, and the LAMP stack. However, this 20-something has also been falling in love with Ruby. Totally not biased.*

<hr>

## WordPress

I like WordPress. I've been using it since around 2012 and developing on it since 2015. There's always been some elitist attitudes surrounding it in the web dev community. The greatest hits include: “it's so slow”,  “PHP sucks”,  “it's so bloated”, "it's all site builders" *ad infinitum*. I've made my peace with it, it's part of the job.

I don't want to evangelize WordPress. While it's robust, easy to set up, and extensible, there are a *lot* of things I don't like about the platform. But, unfortunately, much of what I hear critized is often a misconceptions, half truths, or general dislike of PHP.

Either way, my experience with it has taught me a lot, and has been (mostly) positive. I certainly wouldn't know as much if I hadn't been involved with it. There's a  very clear correlation between my knowledge about servers, the LAMP stack, and time spent with WordPress.

I still use it today, but mainly in a professional context. Around 2019 I started getting a little burn out since much of my work revolved around it. Over time, I began to feel like, *yeah, maybe my rarely updated website doesn't need a database*. So I started to look elsewhere. 

## Static Sites, JAMStack, and Beyond 

### Static Generators & Jekyll At a Glance

At this point, I hope Jekyll requires little introduction&#151;but if you don't know what it is, that's okay! Consider yourself one of today's lucky 10,000. 

<img src="https://imgs.xkcd.com/comics/ten_thousand.png" alt="XKCD Coming: 1053" width="462" height="316" >

Jekyll is a *slightly* opinionated static site generator. That slight opinion is in how it treats blogging. In Jekyll, blogging is treated as a first-class citizen. 

It was released in 2008, written in Ruby, and initially authored by GitHub co-founder Tom Preseton-Werner. For a long time, it was *the* premier static site generator; sparking a passionate community of enthusiasts, evangelists, and developers. For many, it was their introduction to static site generators.

Since 2008, the landscape around static site generators has changed significantly. For one, there are now *hundreds* of them. [jamstack.org](jamstack.org) currently lists 333, while [staticsitegenerators.com](staticsitegenerators.com) lists 460. From Gatsby to Hugo to 11ty and beyond.

Jekyll, I'd argue, was the catalyst as to why there are so many. So while it may not enjoy the *shiny new toy* treatments other generators receive as of lately, its importance cannot be understated. It's robust, tried, true, and stable.

### My Introduction

My introduction to Jekyll happened in the spring of 2017. A friend of mine was talking to me about Ruby on Rails and in one of the conversations, they mentioned Jekyll. I took a look at it, played with and…didn't quite see what was special about it.

*I can already do this in WordPress 😎*

But, come 2019, I wanted to maintain my own website again. Until that point my site comprised a single HTML file. I wanted to make something larger and maintaining HTML without templating is just not something you *should* do anymore. 

I thought about making my site in PHP, maybe with some framework, but that felt like overkill; I was tring to cut overhead after all. 

Then, as if the fog had cleared, I remembered Jekyll. I began to read the docs again. This time it clicked. *This is **EXACTLY** what I need* 

I'm not sure how to describe the feeling, but working with Jekyll gave me that *I just made things happen on the browser* feeling I got when I first started making website. It made things fun. 

Due to…well, *gestures at the state of the world*, I put the site on hold until September 2021. But once I started, boy, did I start. 

## The Jekyll Confessional

I didn't really plan out how I wanted to make my site. So, since I'm a millennial, I took a YOLO approach and made decisions based on the order that they appeared in my head. 

What I did know is that I wanted to build as much of it as possible myself and as quickly as possible. 

Following this ethos, I decided on the following:

 - No starting theme or template 
 - Accessible
 - Bootstrap to speed up the design and structure
 - Minimal use of external plugins because I wanted to learn new things
 - Fast load times
 - Auto-deployment on my own server
 - Some sort of CMS

### How do you install Jekyll in {{page.date | date: "%Y"}}?

I remeber seeing an article some time ago comparing various site generators; their pros, cons, etc. One con I remember seeing for Jekyll was that it had a confusing installation process.

Starting a Jekyll site seemed fairly straightforward to me. You make sure Ruby is installed, you install a few gems, you run: `jekyll new . —blank` to make a blank Jekyll site. Then, you run `bundle exec jekyll server` to start the web sever/compile and finally—BAM! You have a bare-bones Jekyll site that you are now free to design to your heart's desire...in theory.

Admitedlly, articles like theirs (or mine) are subjective by nature, and of course, what might be easy for someone can be absolutely difficult for someone else. I do think the official documentation can get you there fairly painlessly...but the complexity I think lies in something less obvious.

#### Ruby Versions and Ruby Enviroments

Did you know a lot of operating systems have Ruby bundled already? MacOS ships with it. You can check if yours has it by running `ruby -v` in a terminal. 

What I didn't know is my Linux distro, KDE Neon, had quite a few core components that had Ruby dependencies. Wanna know how I found out? I blindly followed a tutorial about upgrading your Ruby version, which ended up purging Ruby...and in turn ended up purging a bunch of my system's core components. When did I realize this? After I had pressed enter.

Here are two things I learned (feel free to steal this for your LinkedIn feed; emphasize how this experience changed you as a person):

1) I know better. I should *know* better than to blindly paste commands. But I did it because I was lazy and liability is fully on me. Thankfully (🥲), I've screwed up my OS in similar ways to this in the past and I know how to recover from them.
2) However, if someone that *doesn't* know better and just wants to get their version up to date (because they're curious or because a tutorial said to); if they end up with a borked system, the tool will be tainted in their eyes.

I know there's safeguards. I know I'm a tad dramatic; purging a language won't make your system explode (usually.) I know in most cases "damage" will be fairly inconsequential. But I also know it's easier to say "it's your fault bro" than to provide a way to mitigate situations like this. I don't subscribe to that mentality. If you don't work with a technology extensively, the quirks of it will be unknown to you. 

So what's the solution in this case? Use [rbenv](https://github.com/rbenv/rbenv). What does it do? it lets you install and run multiple versions of Ruby side by side. Below is the installation procedure I follow. 

Remember, don't blindly trust my commands!

```sh
# Installs dependencies you need
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
# Clones rbenv repo and creates .rbenv directory in your home folder
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
# Exports rbenv path to your .bashrc and registers it so you don't have to do it every time you start your shell.
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
#Reloads the shell
source ~/.bashrc
# Installs ruby build plugin—which allows you to install any Ruby version.
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
# Install latest stable Ruby version. Alternatively, you could just install the version you prefer. 
rbenv install $(rbenv install -l | grep -v - | tail -1)
# Now you can either do: 
rbenv global version.number #to install globally or
rbenv local version.number #to install locally
```
There we go! If you want to know more about how rbenv works, I highly encourage you to [check out this guide](https://www.honeybadger.io/blog/rbenv-rubygems-bundler-path/).

I don't want someone, especially beginners, to get a bad taste of Jekyll or Ruby because of a bad experience with the installation method. To Jekyll's credit, their docs [do mention Ruby version control](https://jekyllrb.com/docs/installation/macos/); it's just not really in the forefront. 

Though, I want to make it perfectly clear that ***this isn't an issue with Ruby or Jekyll.*** This issue isn't even exclusive to languages, rather related to documentation in software as a whole.  

Overall, sometimes documentation will have to assume some level of knowledge. Speaking as a technical writer, it's unrealistic to expect (especially for free/open-source software) to have documentation that aims at *every* skill level. I don't have a clear solution but I do think that it's important to consider technology quirks when writing guides.

#### Ruby Dependencies, Gems, and Bundler

For most Ruby-driven projects, Jekyll included, **always** use bundler and your Gemfile to manage dependencies. If you come from JavaScript, these two technologies work in a similar way that a `package.json` works in npm. They keep your dependencies in check and can help you avoid conflits. 

**Also!** If you followed Jekyll's official documentation, you should remove your `gems` folder from your home directory, remove the PATH from your `.bashrc` or `.bash_profile`, and restart your shell. Since rbenv is managing Ruby now, removing those references

That should take care of Ruby! As for Jekyll, you might need a few extra tools. 

#### Newer Versions of Ruby
If you are running a version of Ruby 3.0 or higher with Jekyll, you will need to include another gem. On your current project run `bundle add webrick`.  This will allow the local server to function properly. 

#### Windows Specific Quirks
If you're developing on the Windows Subsystem for Linux (WSL 2+), you'll also need to serve your site from within the Linux subsystem (e.g, not from any directory in `/mnt/c`). If you don't, auto-reload won't work and if you have any JavaScript dependency managers, those will break too. This issue is not Jekyll specific, [read more about it here.](https://github.com/microsoft/WSL/issues/216)

Lastly...you might wanna alias `bundle exec jekyll serve --force_polling --livereload` to serve your site.

### Time To Structure

Initially one of the things I spent  the most time on was deciding how I should organize things and how I should design it. I spent a good amount of time visiting personal home pages, blogs, and folks on the *indie web* and their repos to get some ideas. 

I settled on having only two layouts: one main wrapper (with two structures) and a layout for blog posts that inherits the main layout. In the early stages of the site I played around with the idea of having different layouts per page but with the (lack of) content I had so far, it didn't make too much sense. I opted on using Bootstrap 5 since their grid system makes things really easy to structure. 

I also went full in on Liquid compoents and made components out of every little piece of markup; if I needed to repeat it more than one time, it's going in the `_includes` directory. While initially tedious, it has made maintenance and debugging simple.

Lastly, I went back and fort on how I would use data files. They exists to make the separation of content and structure easier, but I still don't think I've found a great way to standardize them in my site. They handle the links for my navigation menu but some also handle content for a handful of pages.

### Liquid

Jekyll comes bundled with the Liquid templating language. The language is...interesting. It's kinda programmatic but limited. For example, you can loop with it it and it has variables, and most things function as objects. 

The main draw for me was that I could break everything into a component and  then import it into the page. You can also use liquid and external data files to create repetitive markup.   

For example, making a menu will usually require a bunch of wrappers and links. With Liquid you can define the main structure and the let Liquid take care of the rest; gathering the links from an external data file and building the rest of the structure via boilerplate.

<pre> 
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
</pre>
You can use it to do some pretty advanced things. As mentioned previously, my site only uses two layouts. However, my main layout includes two different configurations: one with and one without a sidebar. 

This is handled via if statements that check each page's front matter at build time for the variable that enables or disables it. Pretty cool! In theory this means you could do it for more layouts on a single page but...I'd advise against it. 
    
<pre>
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
</pre>

### Design, Flare, and SASS!

Jekyll works with SASS right out of the box. All you need to do is put files within a `_sass` directory and import it within your asset folder's main SCSS file. 

My customization was fairly small—only importing the components I needed and tweaking existing variables. It ended up being fairly lean but it definitely looks like a Bootstrap site. 

Bootstrap wasn't meant to be a long-term solution though; it was mainly included for the sake of time. Right now the site is in a good place functionality-wise so a redesign is around the corner.

### Content Management

A few years ago I would've been fine writing my posts on Atom in markdown and editing the site's metadata manually. Nowadays I'm more keen to the idea of having pretty front-end to facilitate the process. 

I tried to look for a headless CMS solution that could help. I landed on NetlifyCMS. As far as content management goes, it ticked all my boxes. The only issue would be that if you wanted to use NetlifyCMS outside of Netlify, you'd need an authentication point. 

There were community scripts to help with setting up.

## Complexity As a Form of Exercise

I gave myself many unseeded headaches while building this site. For example, making a tag and category page would be fairly easy had I used one of the many plugins that does it for you, such as [Jekyll Archives](https://github.com/jekyll/jekyll-archives). Deciding not to use plugins (at first) didn't come from a "I'm doing it all myself because I am an expert web dev, nyeh" mentality. From the very start of my journey in web dev, or programming as a whole, I tended to learn better if I just jumped on the deep end and tried to figure it out. The confusion to enlightenement pipeline, as I like to call it. 

In the past few months that has certainly been true. 

I learned how to work with GitHub actions to automate the build process. I learned how to set up an OAuth end point on my server to authenticate NetlifyCMS. I dove into modern JavaScript, web components, and how new front-ends are being built.

It has also been terrifying because I realized just how long I've been stuck on the back-end and how much the web has changed since 2017 (which was the year I began to mainly professionaly work with WordPress.) There's no shortage of things to learn. For me, the overwhelming thing isn't *what* to learn, it's more "dammit, I should probably finish that project in that last stack."

Making things from the bottom-up has been super fulfilling and I wanna keep doing it.