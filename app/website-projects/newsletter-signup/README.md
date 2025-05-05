# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of Newsletter Sign Up Form](../../../public/images/newsletter-signup/screenshot-desktop.png)

### Links

- Solution: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/responsive-newsletter-sign-up-w-nextjstailwindzodreact-hook-form-bpOQ_XiMD0)
- Live Site: [Newsletter Sign Up Form Deployed on Vercel](https://learning-tailwind-inky.vercel.app/website-projects/newsletter-signup)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [tailwindcss](https://tailwindcss.com/) - A utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference

### What I learned

The primary piece that stuck out for me on this particular challenge was using a gradient background. This was pretty trivial using `tailwindcss`, although I'd never done it in `tailwindcss` before and have only used CSS in the past for `linear-gradient` backgrounds.

The `tailwindcss` classes needed to produce the gradient are as follows:

```html
<button className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500">
```

Using `bg-gradient-to-r` produces a linear gradient that starts left and moves right. The left value is set using `from-orange-500` and the right value is set using `to-rose-500`.

## Author

- GitHub - [ecarlste](https://github.com/ecarlste)
- Frontend Mentor - [@ecarlste](https://www.frontendmentor.io/profile/ecarlste)
- LinkedIn - [Erik Carlsten](https://www.linkedin.com/in/erikcarlsten)
