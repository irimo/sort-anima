import { SortAnima } from "./sortanima";

document.addEventListener('DOMContentLoaded', () => {
    //カンバスをセット
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const sortanima = new SortAnima(canvas);
    const numberlist:HTMLButtonElement = <HTMLButtonElement>document.getElementById('numberlist');
    // button.textContent = "ボタン";
    // button.onclick = function() {
    //   alert('yes');
// }
// document.body.appendChild(button);
      //スタート
  document.getElementById('button').addEventListener('click', () => {
    const piece = sortanima.drawLoop();
    });
});