import { SortAnima } from "./sortanima";

document.addEventListener('DOMContentLoaded', () => {
    //カンバスをセット
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const sortanima = new SortAnima(canvas);
});