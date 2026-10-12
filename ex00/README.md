# 🚀 Bader Al-Qutub | Personal Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

> A responsive personal portfolio website built **from scratch** with pure HTML5, CSS3 and JavaScript.
> No frameworks, no templates, no UI libraries. Every line written by hand.

---

## 📖 About the Project

This is my digital presence: a clean, modern one-page website that introduces who I am, what I know, and what I have built so far. It was created as **Exercise 00: Personal Portfolio** of the Discovery Web Piscine.

I'm a cybersecurity and cloud computing graduate, currently learning web development to build my own projects.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧭 **Sticky navbar** | Quick navigation to every section with smooth scrolling |
| 👤 **About Me** | Short introduction with a profile photo |
| 🛠️ **Skills grid** | Skills displayed as clean, hoverable chips |
| 📂 **Project showcase** | Square project cards with a direct "View on GitHub" button |
| ❤️ **Hobbies** | Interests presented in boxes side by side |
| ✉️ **Contact** | Clickable email and phone cards, plus a contact form |
| 🌗 **Theme switcher** | Light and dark modes using CSS variables |
| 📱 **Fully responsive** | Built with Flexbox, CSS Grid and media queries |

---

## 🗂️ Page Sections

1. **Header / Navbar**: logo, navigation links and the theme button
2. **About Me**: profile photo and introduction
3. **Skills**: Cybersecurity, Cloud Computing, Infrastructure, Git & GitHub, and more
4. **Project Showcase**: Projects 00 to 03 (see below)
5. **Hobbies**: Cybersecurity, Learning, Technology
6. **Contact**: email, phone and a contact form
7. **Footer**

---

## 📂 Project Showcase

| # | Project | Technologies | Repository |
|---|---|---|---|
| 00 | Kali Linux Terminal & Git-GitHub | Kali Linux, Git, GitHub, SSH, Markdown | [project00](https://github.com/BaderQu/project00) |
| 01 | HTML | HTML5 | [project01](https://github.com/BaderQu/project01) |
| 02 | CSS | HTML5, CSS3 | [project02](https://github.com/BaderQu/project02) |
| 03 | JavaScript | JavaScript, HTML5, CSS3 | [project03](https://github.com/BaderQu/project03) |

---

## 🧰 Tech Stack

- **HTML5**: semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3**: custom properties (variables), Flexbox, CSS Grid, media queries, transitions
- **JavaScript (ES6+)**: DOM manipulation and event handling
- **Git & GitHub**: version control and hosting

---

## ⚙️ How the Theme Switcher Works

The mandatory JavaScript feature is a button that changes the look of the whole page dynamically.

```
User action  ->  Event firing  ->  JavaScript callback  ->  DOM / CSS mutation
```

1. **User action:** the visitor clicks the *Dark mode* button.
2. **Event firing:** the browser fires a `click` event on the button.
3. **JavaScript callback:** the listener registered with `addEventListener` runs.
4. **DOM / CSS mutation:** the callback toggles the `dark` class on `<body>`. All colors are CSS variables (`--bg`, `--text`, `--card`, `--accent`...), and the `body.dark` rule redefines them, so the entire page changes at once. The button text is also updated with `textContent`.

---

## 📱 Responsive Design

- **Flexbox** for the navbar, About section, skills and contact cards
- **CSS Grid** for the project cards (2 columns) and hobby boxes (3 columns)
- **Media query** (`max-width: 600px`) that stacks everything into a single column and adapts the navbar on phones

---

## 📁 Folder Structure

```
ex00/
├── index.html      # page structure
├── style.css       # design, colors and responsive layout
├── script.js       # theme switcher and contact form
├── README.md       # project documentation
└── assets/
    └── photo.jpg   # profile photo
```

---

## ▶️ How to Run

No installation or build step is needed.

```bash
# 1. Clone the repository
git clone https://github.com/BaderQu/<repository-name>.git

# 2. Go to the exercise folder
cd <repository-name>/ex00

# 3. Open the page in your browser
xdg-open index.html
```

You can also just double-click `index.html`.

---

## 📬 Contact

- 📧 **Email:** [badernabeel02@gmail.com](mailto:badernabeel02@gmail.com)
- 📞 **Phone:** 00962785227889
- 🐙 **GitHub:** [BaderQu](https://github.com/BaderQu)

---

## 📝 Notes

- Built without Bootstrap, Tailwind, WordPress or any template, as required by the subject.
- The contact form is handled on the client side only and does not send messages to a server.

---

<p align="center">Built by hand with ❤️ and a lot of coffee by <b>Bader Al-Qutub</b> · 2026</p>
