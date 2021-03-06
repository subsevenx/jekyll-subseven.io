---
title: Fixing the Annoying Full Brightness Issue Under Linux and AMD Ryzen APUs
author: Daniel Hernandez
excerpt: Why doesn't the brightness just work? I don't know man, but here's how to fix it (after my rambling).
thumbnail: 
seo:
  og:
    title: Fixing the Annoying Full Brightness Issue Under Linux and AMD Ryzen APUs
    description: Why doesn't the brightness just work? I don't know man, but here's how to fix it (after my rambling).
    type: article
    image:
tags:
  - laptop
categories:
  - quick post
date: 2022-04-01 00:40:05 -500
---

**TL; DR**: What fixed the brightness issue was a mix between [this](https://askubuntu.com/questions/1329928/legion-5-pro-brightness-control-doesnt-work-on-ubuntu-20-04-with-nvidia-driver){: target="_blank"} [and this](https://askubuntu.com/questions/1317748/any-issues-running-20-04-with-a-ryzen-5000-cpu){: target="_blank"} StackOverflow post. Though I mainly attribue it to setting `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash amdgpu.backlight=0"` in `/etc/default/grub` (make sure to `sudo update-grub` after changing this.) Though It doesn't hurt to upgrade your kernel, especially if you're in an earlier build of Ubuntu. You mileage may vary wildly.

## Just Like Ten Years Ago

Oh GNU/Linux, I love you. Even when things don't quite work, I enjoy the challenges. I remember trying to get my damn GPU to play nice with Ubuntu 12.04. Ten years later, things have gotten so much better. But as they say: the more things change, the more they stay the same. 

### New Laptop, Who's This?

My last laptop is a used Lenovo Y-series that I bought off a very cautious dude from craigslist back in 2015.
It was actually a titan of a laptop and it served me very well though all of these years. 

The laptop is still very usable for most tasks (and part of me wonders just how much *more* use I can squeeze out of it). But, unfortunately, the model itself is almost 10 years old, has a tiny resolution, the GPU died a while ago, and the CPU is starting to choke with heavier loads. In short, I needed an upgrade. 

I have been out of the laptop (and PC part) buying space since 2015, so I really didn't know where to start; much less what to buy. So I did what anyone would do and submerged myself in Laptop YouTube for around two weeks. 

Come to find out, laptop tech has gotten pretty good. While there's a lot of options and critiques of said options, for me, almost anything made in the last 5 years was going to be a huge upgrade. So I set myself some parameters: powerful CPU, okayish display, a GPU, and relatively affordable. 
I settled for an HP Pavillion Gaming laptop&#8212;the model from MicroCenter specifically. It has an AMD 5600H, NVIDIA 1660 GPU, and 10809. I've had it for less than a week but it has been a great experience. Although I think that happiness mainly stems from the fact that I can actually *see* everything on screen. The magic of 1080p. 


## The Issue

As per tradition, I will now contradict myself. Everything has worked swimingly *\*\*under Windows.* Thing is, I don't use Windows unless I'm either gaming or making music. As of lately, I haven't been doing much of either, so I spend my days in Linux. 

Installing a distro on this laptop was pretty painless. Everything just works&#8482; (even the secure boot stuff)...except for the brightness. No matter how many times I pressed F2/F3, the brightness was stuck at 100%. At first I thought it wasn't playing nice with the NVIDIA card, since, in the past, most of my issues on Linux came as a result of NVIDIA drivers. 

I tried installing the proprietary driver and nothing. I updated my kernel to the latest mainline, disabled the card altogether, still nothing. I even got rid of KDE Neon in favour of regular Ubuntu. Nothing! What gives?

## The Solution

The solution to fix it in my case was changing the `GRUB_CMDLINE_LINUX_DEFAULT` setting in `/etc/default/grub` to `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash amdgpu.backlight=0"`. Turns out it was the AMD APU. 

It might not be as simple as that though, there's a lot of conflicting info about the issue:

- Some say it's an outdated kernel issue
- Others say it's the NVIDIA driver
- Perhaps it's a Wayland issue?
- A lot of claims say that it was already fixed

Regardless, I'm sure this will be a nonissue in the future. While this fixed the issue for me, your mileage may vary. Let me know if it helps.