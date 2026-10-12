# Personal Portfolio

A responsive personal portfolio website built from scratch with HTML5, CSS3 and JavaScript (ES6+). No frameworks, templates or UI libraries are used.

Author: Bader Al-Qutub
Exercise: Chapter IV, Exercise 00 (Personal Portfolio), Discovery Web Piscine

---

## Overview

This website presents my background, skills, projects and contact information in a single page. I hold a bachelor's degree in cybersecurity and cloud computing from Applied Science Private University, and I am currently learning web development.

---

## Features

- Navigation bar with smooth scrolling to each section
- About Me section with a profile photo
- Skills grid
- Project Showcase with one square card per project and a direct link to its repository
- Hobbies section displayed as boxes side by side
- Contact section with clickable email and phone cards and a contact form
- Light and dark theme switcher
- Responsive layout for desktop and mobile screens

---

## Sections

1. Header and navigation bar
2. About Me
3. Skills
4. Project Showcase
5. Hobbies
6. Contact
7. Footer

---

## Project Showcase

| No. | Project | Technologies | Repository |
|-----|---------|--------------|------------|
| 00 | Kali Linux Terminal and Git-GitHub | Kali Linux, Git, GitHub, SSH, Markdown | [project00](https://github.com/BaderQu/project00) |
| 01 | HTML | HTML5 | [project01](https://github.com/BaderQu/project01) |
| 02 | CSS | HTML5, CSS3 | [project02](https://github.com/BaderQu/project02) |
| 03 | JavaScript | JavaScript, HTML5, CSS3 | [project03](https://github.com/BaderQu/project03) |

---

## Technologies

- HTML5: semantic structure (header, nav, main, section, article, footer)
- CSS3: custom properties, Flexbox, CSS Grid, media queries, transitions
- JavaScript (ES6+): DOM manipulation and event handling
- Git and GitHub: version control and hosting

---

## Theme Switcher

The mandatory JavaScript feature is a button that changes the appearance of the whole page dynamically. The event lifecycle is:

```
User action -> Event firing -> JavaScript callback -> DOM / CSS mutation
```

1. User action: the visitor clicks the theme button.
2. Event firing: the browser fires a `click` event on the button.
3. JavaScript callback: the listener registered with `addEventListener` is executed.
4. DOM / CSS mutation: the callback toggles the `dark` class on the `body` element. All colors are defined as CSS variables (`--bg`, `--text`, `--card`, `--accent`), and the `body.dark` rule redefines them, so the entire page updates at once. The button label is updated with `textContent`.

---

## Responsive Design

- Flexbox is used for the navigation bar, the About section, the skills and the contact cards.
- CSS Grid is used for the project cards (two columns) and the hobby boxes (three columns).
- A media query (`max-width: 600px`) stacks the content into a single column and adapts the navigation bar for phones.

---

## Folder Structure

```
ex00/
├── index.html      Page structure
├── style.css       Design, colors and responsive layout
├── script.js       Theme switcher and contact form
├── README.md       Project documentation
└── assets/
    └── photo.jpg   Profile photo
```

---

## Getting Started

No installation or build step is required.

```bash
git clone https://github.com/BaderQu/portfolio.git
cd portfolio/ex00
xdg-open index.html
```

Alternatively, open `index.html` directly in any modern web browser.

---

## Contact

- Email: [badernabeel02@gmail.com](mailto:badernabeel02@gmail.com)
- Phone: 00962785227889
- GitHub: [BaderQu](https://github.com/BaderQu)

---

## Notes

- The project does not use Bootstrap, Tailwind, WordPress or any other template, as required by the subject.
- The contact form is handled on the client side only and does not send messages to a server.
