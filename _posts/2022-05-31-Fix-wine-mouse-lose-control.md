---
layout: post
title: Mengatasi Mouse Kehilangan fokus di wine
date: 2022-05-31 18:32:00 -0500
categories: [Linux, Tutorial]
---

### Mengatasi Mouse Di Wine Kehilangan Fokus
I had a problem one year ago, when doing alt+tab in some games in wine. Every time I did alt+tab I lost the focus and the game didn´t get my mouse and keyboard input. I tried with a solution that I found in some page that said that in Regedit, I had to create a new entry named "UseTakeFocus" with value "N" in `HKEY_CURRENT_USER\Software\Wine\X11 Driver`

> Create New Folder if you don't see 'X11 Driver' folder.
{: .prompt-info }

This worked, and I was able to alt+tab without any problem.

Reference : [Manjaro Forum](https://archived.forum.manjaro.org/t/lose-focus-of-window-in-wine/127097) 
