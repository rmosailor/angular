class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

        // shadow.innerHTML = `
        //    <link rel="stylesheet" href="./styles/card.css">

        //     <div class="container">
        //             <div class="card">
        //                 <div class="card__left">
        //                     <span>${this.getAttribute('Author')}</span>
        //                     <a href="${this.getAttribute('url')}">${this.getAttribute('title')} </a>
        //                     <p>${this.getAttribute('description')}</p>
        //                 </div>

        //                 <div class="card__right">
        //                     <img src="${this.getAttribute('img')}" alt="Foto" srcset="">
        //                 </div>
        //             </div>
        //     </div>

        //     `;
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        const author = document.createElement('span');
        author.textContent = "By " + (this.getAttribute('author') || "Anonymous");

        const title = document.createElement('a');
        title.textContent = this.getAttribute('title');
        title.href = this.getAttribute('url') || "#";

        // title.setAttribute('href', this.getAttribute('url'));

        const description = document.createElement('p');
        description.textContent = this.getAttribute('description');


        cardLeft.appendChild(author);
        cardLeft.appendChild(title);
        cardLeft.appendChild(description);

        const img = document.createElement('img'); 
        // img.setAttribute('src', this.getAttribute('img'));
        img.src = this.getAttribute('img') || "./assets/defaultPhoto.png";
        img.alt = this.getAttribute('imgAlt') || "Foto da notícia";

        cardRight.appendChild(img);


        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        
        style.textContent = `
            .card {
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            
            }

            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card__left > a:hover {
                color: #007BFF;
            }

            .card__left > p {
                color: gray;
            }

            .card__left > span {
                font-weight: 400;
            }
            .card__right {
                display: flex;
                align-items: center;
                padding-right: 10px;
            }
            .card__right > img {
                width: 300px;
                height: 200px;
                margin: 10px;
            }
            `;
        return style;
        // <link rel="stylesheet" href="./styles/card.css"></link>
    }
}

customElements.define('card-news', CardNews);
