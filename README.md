# Web components with CSP

## What is this repo?

This is an example of web components working with strict CSP.

## What is this repo not?

This is **not** an example of best practices of any sort.

## Why does this repo exist?

I wanted to use web components in a project that applies a strict CSP. This proved to be a challenging question to get an answer for. So after a bit more searching than I would have liked, I found my answer and I hope this repo will provide you an answer as well.

## What is the solution in plain words?

In the web component html template, use a link element that points to a css file.

If you clone this repo and run a server where you can see this tiny app in action, you can see in the console that the style element, which is the more natural way to apply a style for a web component, gets blocked by the CSP, but the link elements above it are applied.

this will have to do until we get strict-dynamic for style-src.

DONT USE STYLES OUTSIDE OF CSS FILES!
