import "normalize.css";
// import "./index.css";
import styles from "./index.module.scss";
import $ from "jquery";
import slackImg from "./images/slack.jpg";
import slackSvg from "./images/slack.svg";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello WebPack 3";

  const imgElement = document.createElement("img");
  imgElement.src = slackSvg;

  console.log(slackImg);
  console.log(styles);

  element.appendChild(imgElement);
  element.classList = styles.helloWebpack;
  return element;
}

document.body.appendChild(component());
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION_MODE: ${IS_PRODUCTION}`);
