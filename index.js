import "normalize.css";
// import "./index.css";
import styles from "./index.css";
import $ from "jquery";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello WebPack 3";

  console.log(styles);

  element.classList = styles.helloWebpack;
  return element;
}

document.body.appendChild(component());
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION_MODE: ${IS_PRODUCTION}`);
