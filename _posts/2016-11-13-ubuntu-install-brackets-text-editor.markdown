---
layout: post
title:  "Ubuntu. Install Brackets text editor."
date:   2016-11-13
categories: [ubuntu, brackets, editor]
---

Brackets is an open-source code editor for web design and development built on top of web technologies such as HTML, CSS and JavaScript, available for Linux, Windows and Mac OS X. More information you can see on the official [site][atom-official-site] where you also can download [.deb][deb-download]] package (1.7 version, last for current time) for install editor.

Some editor features:
  * Made with Javascript
  * Node.js integration
  * Cross-platform support: Windows, Linux, and OS X.
  * A built-in package manager
  * Smart autocompletion
  * File system browser
  * Find and replace
  * Support themes
  * Inline Editors
  * Live Preview
  * Preprocessor Support

### Install Brackets in Ubuntu 16.04 (both 32&64bit) via PPA: ###


#### 1. Add PPA ####

Open terminal (Ctrl+Alt+T) and run the command:

`sudo add-apt-repository ppa:webupd8team/brackets`

#### 2. Update system package index via command: ####

`sudo apt update`

#### 3.Install Atom editor via command: ####

`sudo apt-get install brackets`


**For remove Brackets text editor use Synaptic Package Manager or just run apt command with remove flag:**

`sudo apt remove --purge brackets`

[atom-official-site]: http://brackets.io/
[deb-download]: https://github.com/adobe/brackets/releases/download/release-1.7/Brackets.Release.1.7.64-bit.deb
