// selectors
const usingSelector = document.querySelector(".using-items");
const learningSelector = document.querySelector(".learning-items");
const otherSelector = document.querySelector(".other-items");
const portfolioSelector = document.querySelector(".row");

const usingNow = [
  (html = {
    id: 1,
    img: "img/skills/html.svg",
    title: "html",
  }),
  (css = {
    id: 2,
    img: "img/skills/css.svg",
    title: "css",
  }),
  (sass = {
    id: 3,
    img: "img/skills/sass.svg",
    title: "sass",
  }),
  (javascript = {
    id: 4,
    img: "img/skills/js.svg",
    title: "javascript",
  }),
  (react = {
    id: 5,
    img: "img/skills/react.svg",
    title: "react",
  }),
  (bootstrap = {
    id: 6,
    img: "img/skills/bootstrap.svg",
    title: "bootstrap",
  }),
  (git = {
    id: 7,
    img: "img/skills/git.svg",
    title: "git",
  }),
  (figma = {
    id: 8,
    img: "img/skills/figma.svg",
    title: "figma",
  }),
];

const learning = [
  (nodejs = {
    id: 1,
    img: "img/skills/node.svg",
    title: "nodejs",
    continues: true,
  }),
  (mongodb = {
    id: 5,
    img: "img/skills/mongo.svg",
    title: "MongoDB",
    continues: true,
  }),
  (vuejs = {
    id: 2,
    img: "img/skills/vue.png",
    title: "vue js",
    continues: false,
  }),
  (tailwind = {
    id: 3,
    img: "img/skills/tailwindcss.svg",
    title: "tailwind css",
    continues: false,
  }),
  (mysql = {
    id: 4,
    img: "img/skills/mysql.svg",
    title: "MySQL",
    continues: false,
  }),
  (typescript = {
    id: 6,
    img: "img/skills/typescript.svg",
    title: "typescript",
    continues: false,
  }),
];

const otherSkills = [
  (english = {
    id: 1,
    img: "img/skills/english.svg",
    title: "english<br>B1",
  }),
  (python = {
    id: 2,
    img: "img/skills/python.png",
    title: "python",
  }),
  (csgo = {
    id: 3,
    img: "img/skills/csgo.jpg",
    title: "cs go",
  }),
];

const portfolio = [
  (item1 = {
    id: 1,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    category: "coded",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
  (item2 = {
    id: 2,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    category: "designed",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
  (item3 = {
    id: 3,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    category: "coded",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
  (item4 = {
    id: 4,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    category: "designed",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
  (item5 = {
    id: 5,
    img: "https://www.w3schools.com/w3images/cars1.jpg",
    category: "coded",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
  (item6 = {
    id: 6,
    img: "https://www.w3schools.com/w3images/cars2.jpg",
    category: "designed",
    title: "araba satış işi",
    info: "arabamız pek iyidir abee",
  }),
];

const getAllSkills = () => {
  usingNow.map((e) => {
    usingSelector.innerHTML += `
        <div class="item">
            <img src="${e.img}" alt="${e.title}" title="${e.title}" class="skill-img">
            <h3 class="item-name">${e.title}</h3>
        </div>
    `;
  });

  learning.map((e) => {
    if (e.continues === true) {
      return (learningSelector.innerHTML += `
        <div class="item">
            <img src="${e.img}" alt="${e.title}" title="${e.title}" class="skill-img">
            <h3 class="item-name">${e.title}</h3>
        </div>
    `);
    }
    return (learningSelector.innerHTML += `
        <div class="item">
            <img src="${e.img}" alt="${e.title}" title="${e.title}" class="skill-img soon">
            <div class="overlay">
              <div class="text">I will learn soon🙄</div>
            </div>
            <h3 class="item-name">${e.title}</h3>
        </div>
      `);
  });

  otherSkills.map((e) => {
    otherSelector.innerHTML += `
        <div class="item">
            <img src="${e.img}" alt="${e.title}" title="${e.title}" class="skill-img">
            <h3 class="item-name">${e.title}</h3>
        </div>
    `;
  });

  portfolio.map((e) => {
    portfolioSelector.innerHTML += `
    <div class="column ${e.category}">
        <img src="${e.img}" alt="${e.title}" style="width:100%; height:100%; object-fit:cover;">
       <div class="overlay">
          <div class="text">${e.title}</div>
          <div class="text">${e.info}</div>
        </div>
    </div>
    `;
  });
};

getAllSkills();

let favicon_images = [
    "./img/skills/html.svg",
    "./img/skills/css.svg",
    "./img/skills/sass.svg",
    "./img/skills/js.svg",
    "./img/skills/react.svg",
    "./img/skills/vue.png",
    "./img/skills/bootstrap.svg",
    "./img/skills/git.svg",
    "./img/github.png",
    "./img/skills/figma.svg",
  ],
  image_counter = 0;

setInterval(
  (changeIcon = () => {
    if (document.querySelector("link[rel='icon']") !== null)
      document.querySelector("link[rel='icon']").remove();
    if (document.querySelector("link[rel='shortcut icon']") !== null)
      document.querySelector("link[rel='shortcut icon']").remove();

    document
      .querySelector("head")
      .insertAdjacentHTML(
        "beforeend",
        '<link rel="icon" href="' +
          favicon_images[image_counter] +
          '" type="image/gif">'
      );

    if (image_counter == favicon_images.length - 1) image_counter = 0;
    else image_counter++;
  }),
  800
);
