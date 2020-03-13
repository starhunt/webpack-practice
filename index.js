import "normalize.css";
// import "./index.css";
import styles from "./index.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello WebPack 3";

  console.log(styles);

  element.classList = styles.helloWebpack;
  return element;
}

document.body.appendChild(component());
