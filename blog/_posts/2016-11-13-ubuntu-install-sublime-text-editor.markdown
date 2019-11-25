---
layout: post
title:  "Ubuntu. Install Sublime 2/3 text editor."
date:   2016-11-13
categories: [ubuntu, sublime, editor]
---

Sublime Text is a sophisticated text editor for code, markup and prose as we are told on the official [site][sublime-official-site] where you can download [Sublime Text 3, Build 3126, 64 bit *.deb][deb-download] (last on this moment) package and read more information about it.

Some editor features:
  * Goto Anything
  * Multiple Selections
  * Cross-platform support: Windows, Linux, and OS X.
  * A built-in package manager
  * Smart autocompletion
  * Command Palette
  * Distraction Free Mode
  * Split Editing
  * Instant Project Switch
  * Find and replace
  * Plugin API
  * Customize Anything

### Install Sublime in Ubuntu 16.04 (both 32&64bit) via PPA: ###


#### 1. Add PPA ####

Open terminal (Ctrl+Alt+T) and run the command:

version 2: `sudo add-apt-repository ppa:webupd8team/sublime-text-2`

version 3: `sudo add-apt-repository ppa:webupd8team/sublime-text-3`

#### 2. Update system package index via command: ####

`sudo apt update`

#### 3.Install Sublime editor via command: ####

version 2: `sudo apt-get install sublime-text`

version 3: `sudo apt-get install sublime-text-installer`


**For remove Atom text editor use Synaptic Package Manager or just run apt command with remove flag:**

vesion 2(instaled as above):`sudo apt remove --purge sublime-text`

vesion 3(instaled as above):`sudo apt remove --purge sublime-text-installer`

[sublime-official-site]: https://www.sublimetext.com
[deb-download]: https://download.sublimetext.com/sublime-text_build-3126_amd64.deb
