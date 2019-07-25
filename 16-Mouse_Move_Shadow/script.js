const heroUnit = document.querySelector(".hero");
const heroText = heroUnit.querySelector("h1");

const maxShadowLength = 300;

heroUnit.addEventListener("mousemove", moveShadow);

function moveShadow(e) {
  const { offsetWidth: width, offsetHeight: height } = heroUnit;
  let { offsetX: x, offsetY: y } = e;

  if (heroUnit !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const shadowLengthX = Math.round((x / width) * maxShadowLength - maxShadowLength / 2);
  const shadowLengthY = Math.round((y / height) * maxShadowLength - maxShadowLength / 2);

  heroText.style.textShadow = `
  ${shadowLengthX}px ${shadowLengthY}px 5px red,
  ${shadowLengthX * -1}px ${shadowLengthY * -1}px 5px green,
  ${shadowLengthY * -1}px ${shadowLengthX}px 5px blue,
  ${shadowLengthY}px ${shadowLengthX * -1}px 5px yellow
  `;
}
