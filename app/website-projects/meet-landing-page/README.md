# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Screenshot of Meet Landing Page](../../../public/images/meet-landing-page/screenshot-desktop.png)

### Links

- Solution: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/)
- Live Site: [Meet Landing Page Deployed on Vercel](https://learning-tailwind-inky.vercel.app/website-projects/meet-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework

### What I learned

I learned how to use the z-index for html elements being displayed. In order to get the number heading div to render on top of the bg in the call to action footer, I had to set the z index higher than the div containing the bg. I also used a div with a background color of cyan to make the footer image appear cyan like an image mask.

I also used `@variant` for the first time since I wasn't able to apply custom classes using prefixes such as `md` or `xl`. This allowed me to simply use one custom class for the bg image such as `bg-footer-cta` and then the variant kicks in at the breakpoints specified by the prefix.

### Continued development

I'd like to work on the semantic html on this project a bit more to clean it up. I also feel like there are opportunities to clean up the classNames that were potentially applied and not doing anything in the end.

## Author

- GitHub - [ecarlste](https://github.com/ecarlste)
- Frontend Mentor - [@ecarlste](https://www.frontendmentor.io/profile/ecarlste)
- LinkedIn - [Erik Carlsten](https://www.linkedin.com/in/erikcarlsten)
