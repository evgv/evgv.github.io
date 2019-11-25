---
layout: post
title:  "Ubuntu. Install Atom text editor."
date:   2016-11-08
categories: [ubuntu, atom, editor]
---

Atom a hackable text editor for the 21st Century as we are told on the official [site][atom-official-site] where you can download [.deb][deb-download] or [.rpm][rpm-download] packages and read more information about it.

Some editor features:
  * Tweak its UI with CSS and add new features with HTML or Javascript
  * Node.js integration
  * Cross-platform support: Windows, Linux, and OS X.
  * A built-in package manager
  * Smart autocompletion
  * Split Atom interface into multiple panes
  * File system browser
  * Find and replace
  * Support themes

### Install Atom in Ubuntu 16.04 (both 32&64bit) via PPA: ###


#### 1. Add PPA ####

Open terminal (Ctrl+Alt+T) and run the command:

`sudo add-apt-repository ppa:webupd8team/atom`

#### 2. Update system package index via command: ####

`sudo apt update`

#### 3.Install Atom editor via command: ####

`sudo apt install atom`


**For remove Atom text editor use Synaptic Package Manager or just run apt command with remove flag:**

`sudo apt remove --purge atom`

[atom-official-site]: https://atom.io/
[deb-download]: https://atom.io/download/deb
[rpm-download]: https://atom.io/download/rpm
