# Senior Travel

A responsive, multi-page static website for senior citizens exploring travel options — with a dark-mode toggle, interactive quiz, and travel tips.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Live demo:** [https://tiny-begonia-b95eea.netlify.app](https://tiny-begonia-b95eea.netlify.app)

## Overview

Senior Travel helps older adults discover and compare three tiers of travel — Luxury, Comfort, and Budget — alongside practical trip tips and a knowledge quiz. The site uses no frameworks; all interactivity is plain JavaScript.

## Pages

| File | Description |
|------|-------------|
| `home.html` | Landing page with animated word-switch headline |
| `index2.html` | Luxury Travel listings |
| `index3.html` | Comfort Travel listings |
| `index4.html` | Budget Travel listings |
| `lifehacks.html` | Packing and travel tips for seniors (image cards) |
| `contactUs.html` | Feedback form with EmailJS integration |

## Features

- Responsive layout — mobile hamburger menu and fluid grids
- Dark / light theme toggle (persisted via JavaScript)
- Animated word-switch headline on the home page
- Travel category cards with flip/toggle animation
- FAQ accordion and interactive travel quiz
- Contact form sent via EmailJS (no backend required)

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Font Awesome icons (CDN)
- EmailJS for form submissions
- Hosted on Netlify

## Getting Started

No build step needed — all files are static.

```bash
git clone https://github.com/Adilforest/senior-travel.git
cd senior-travel
open home.html    # macOS — or open in any browser
```

To use the contact form in your own fork, replace the EmailJS service and template IDs in `js/index.js`.

---

Adil Ormanov — [GitHub](https://github.com/Adilforest)
