import { fetchStack } from "../services/API.js";
export default class StackItem extends HTMLElement {
  constructor(index) {
    super();
  }

  connectedCallback() {
    console.log("inside callback", this);
    // const template = document.getElementById("stack-item-template");
    // let content = template.content.cloneNode(true);
    // this.appendChild(content);
    // this.querySelector
    //   const product = JSON.parse(this.dataset.product);
  }
}

customElements.define("stack-item", StackItem);
