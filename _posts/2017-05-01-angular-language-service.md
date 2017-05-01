---
author: Diedrik De Mits
authorurl: /about.html
authoravatar: /img/diedrik-avatar.png
title: Angular Language Service
layout: layout
---
<p>One of the best extensions you can find for your Angular programming needs is called the "Angular Language Service", especially if you're using VS Code.</p>
<!--more-->
<h3>What is the Angular Language Service?</h3>
<p>The <a  target="_blank" href="https://github.com/angular/angular/tree/master/packages/language-service">Angular Language Service</a> is a plugin built for the TypeScript [TS] language. It allows to evaluate the templates (inline and html files) at development time, from your IDE. In other words you will get "true" autocompletion when trying to use properties from an interpolation directive or red squiggly lines if you made a mistake in your template.</p>
<h3>How does it work (without going into too much detail)?</h3>
<p>On 27 April 2017, the TS team made an announcement for version 2.3 of the language. <a  target="_blank" href="https://blogs.msdn.microsoft.com/typescript/2017/04/27/announcing-typescript-2-3/#language-server-plugin-support">The team states</a> that together with the Angular team they were able to create a public Language Server Plugin API. This allows people to augment their editing experience by creating plugins that make use of the Language Server.</p>
<p>The internal name for the Language Server is called "tsserver" which stands for <a target="_blank" href="https://github.com/Microsoft/TypeScript/wiki/Standalone-Server-(tsserver)">"TypeScript standalone server"</a>. It is a node executable that includes the TypeScript compiler and language services. "tsserver" exposes an API through a JSON protocol.</p>
<p>In other words, the Angular Language Service will talk to this tsserver executable in JSON to get tsserver to compile and evaluate the templates so that we can make use of TypeScript in those same templates! Which is a great step forward for us as an Angular Developer - or teacher!</p>
<h3>How do I make use of it in VS Code?</h3>
<p>Open your extensions menu and look for "Angular Language Service". The author is Angular, it is pretty hard to miss ;-).</p>
<h3>What about other editors?</h3>
<p>Some editors don't make use of the tsserver when evaluating TS code, so it might be that your editor already supports template evaluation! I've found a blog post from Brian Love explaining how to install it for WebStorm and Sublime <a target="_blank" href="http://brianflove.com/2017/04/11/angular-language-service/">right here</a></p>
<p>Enjoy coding!</p>

