class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    console.log(this.shadowRoot);
    this.render();
  }

  render() {
    const getTemp = document.getElementById("my-template");
    getTemp.innerHTML = `<style>
    #container {
      text-align: center;
      width: 350px;
      border: 2px solid black;
      background: white;
      padding: 20px;
      margin: 20px 0;

    }
  </style>
  <div id="container">
    <slot class="heading" name="heading"></slot>
    <slot class="text" name="content"> </slot>
    <slot class="btn"  name="btn"></slot>
  </div>`;

    const tempContent = getTemp.content;
    this.shadowRoot.appendChild(tempContent.cloneNode(true));

    if (this.hasAttribute("heading-color")) {
      this.shadowRoot.querySelector(
        ".heading"
      ).style.cssText = `color:${this.getAttribute("heading-color")}`;
    }
    if (this.hasAttribute("bg-color")) {
      this.shadowRoot.querySelector("#container").style.backgroundColor =
        this.getAttribute("bg-color");
      this.shadowRoot.querySelector(".text").style.color = "greenyellow";
    }
  }
}

customElements.define("my-card", Card);
