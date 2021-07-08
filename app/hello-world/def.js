const template = document.createElement('template');

template.innerHTML = /*html*/`
  <link rel="stylesheet" href="app/reset.css" />
  <link rel="stylesheet" href="app/hello-world/style.css" />

  <!-- blocked by CSP -->
  <style>
    p { color: black; }
  </style>

  <p>Hello, world!</p>
`;

export class HelloWorld extends HTMLElement {
  constructor() {
    super()
      .attachShadow({ mode: 'open' })
      .append(template.content.cloneNode(true));
  }
}

export const defineHelloWorld = () => customElements.define('hello-world', HelloWorld);