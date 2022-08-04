// Todo: Make an entire web application
//
// Components:
// - Hero banner
// - Title banner
// - Article
// - Button
// - paragraph?

class HeroBanner {
  constructor(imgUrl) {
    this.imgUrl = imgUrl;
  }

  render() {
    return `<header class="header"> <img class="header__image" src="${this.imgUrl}" /> </header>`;
  }
}

class TitleBanner {
  constructor(text) {
    this.text = text;
  }

  render() {
    return `<div class="main-title">
    <h1 class="main-title__heading">
        ${this.text}
    </h1>
</div>`;
  }
}

class Article {
  constructor(paragraphs) {
    this.paragraphs = paragraphs || [];
  }

  render() {
    // Transform array into a string
    let transformedPar = "";

    // Render array of paragraphs
    this.paragraphs.forEach((paragraph) => {
      transformedPar += "<p>" + paragraph + "</p>";
    });

    // render the text
    return `<article> ${transformedPar} </article>`;
  }
}

class Button {
  constructor(text, type) {
    this.text = text;
    this.type = type; // undefined || "" || "primary"
  }

  render() {
    if (this.type === "primary")
      return `<button class=' button button--primary'> ${this.text}</button>`;
    else if (this.type === "secondary")
      return `<button class=' button button--secondary'> ${this.text}</button>`;
  }
}

class HomePage {
  constructor() {
    this.heroBanner = new HeroBanner("./images/dog-banner.jpg");
    this.titleBanner = new TitleBanner("Welcome to Puppy World");
    this.article = new Article([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed molestiae alias. Dolorum ipsa, fuga alias nostrum ab voluptatem iste facilis. Sed repellat sit voluptatum quis, quisquam vitae unde itaque?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident libero quod nemo incidunt. Enim ipsum omnis libero nemo fugiat modi eligendi. Vel harum odit, nisi at rerum soluta aspernatur.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus quibusdam facere ea expedita aliquam! Deserunt suscipit tenetur optio harum nobis praesentium ducimus dolores, reiciendis magni, libero accusantium. Eum, blanditiis.'
    ]);
    this.primButton = new Button("Sign up", "primary");
    this.secButton = new Button("Login", "secondary");
  }

  render() {
    return `${this.heroBanner.render()}
        ${this.titleBanner.render()}
            ${(this.article.render())}
                ${this.primButton.render()}
                    ${this.secButton.render()}`;
  }
}

// 0. Select our "app" element
const appEl = document.getElementById("app");

// 1. Make an instance of our home page component
const homePage = new HomePage();

// 2. Render that home page into our app
appEl.innerHTML = homePage.render();
