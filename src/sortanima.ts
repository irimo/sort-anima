import gsap from "gsap";

import { characters } from "./characters";

export class SortAnima {
    // canvas = <HTMLCanvasElement>document.getElementById('canvas');
    p = 0;
    base = 0;
    watching = 0;
    private enable: boolean;
    // readonly ctx: CanvasRenderingContext2D;
    // readonly fontsize = 15;
    sorting = characters;
    sortingelems:any = [HTMLElement];
    // const roulette = new Roulette(canvas, 500);
    constructor(canvas: HTMLCanvasElement) {
            //カンバスが使用できるかチェック
        // if (!canvas.getContext) {
        //     console.log('[Roulette.constructor] カンバスが使用できません');
        //     // this.enable = false;
        //     return;
        // }
        // this.canvas = canvas;
        // this.ctx = canvas.getContext('2d');
        // this.ctx.font = "bold 15px '游ゴシック'";
        // this.ctx.textAlign = 'center';
        // this.ctx.shadowBlur  = 2;
        this.enable = true;
        for(var i=0; i<this.sorting.length; i++) {
            const sortingelem:HTMLElement = <HTMLElement>document.createElement('div');
            sortingelem.id = "sorting"+i;
            sortingelem.className="di-sorting-elem";
            sortingelem.textContent = this.sorting[i].name;
            sortingelem.style.color = this.sorting[i].color;
            var rect = sortingelem.getBoundingClientRect();

            document.body.appendChild(sortingelem);
            this.sortingelems[i] = sortingelem;
        }
        // this.sub = new Sub();
        // const body = document.getElementsByTagName('body');
        // const element = body.item(0);
        // const div = document.createElement('div');
        // div.innerHTML = '「こんにちは」を他言語に変換します。<br>好きな言語を入れてください。<br>※ちなみに対応しているのは日本語、英語、スペイン語、ドイツ語です。<br>';
        // const input = document.createElement('input');
        // input.id = 'country'
        // const button = document.createElement('button');
        // button.textContent = '変換';
        // button.addEventListener('click', () => {
        //     this.transtrationGreeting(document.getElementById('country')['value']);
        // });
        // div.appendChild(input);
        // div.appendChild(button);
        // element.appendChild(div);
    }

    public drawLoop() {
        //描画可能状態か判定
        if (!this.enable) {
            console.log('[Roulette.start] 描画不可状態です');
            return;
        }
        //duration をミリ秒に変換
        const duration = 1000;
        //duration 秒間描画不可状態にする
        this.enable = false;    // ??
        setTimeout(() => {
            this.enable = true;
        }, duration);
        // this._draw();
        // const loop = () => {
            // const animation = requestAnimationFrame(loop);
            // if (this.base < this.sorting.length - 1) {
            //     return;
            // }
            // cancelAnimationFrame(animation);
            // loop();
        this.sort();
    }
    async sort() {
        while (this.base < this.sorting.length - 1) {
            await this.changeArrayIfNeeds();
            await this._draw();
            await this.advanceIteration();
        }
    }
    async changeArrayIfNeeds() {
        const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
        if (this.greaterThan(this.sorting[this.watching], this.sorting[this.watching+1])) {
            console.log("入れ替わってる〜！？"+this.sorting[this.watching]+"<->"+this.sorting[this.watching+1]);
            var work = this.sorting[this.watching];
            this.sorting[this.watching] = this.sorting[this.watching+1];
            this.sorting[this.watching+1] = work;
            await this._drawWithSorting(this.watching,this.watching+1);
            await sleep(4000);
        }
    }
    public greaterThan(obj1, obj2) {
        if (obj1.name.charCodeAt(0) > obj2.name.charCodeAt(0)) {
            return true;
        }
        return false;
    }
    public advanceIteration() {
        if (this.watching + 1 < this.sorting.length -1) {
            this.watching++;
        }  else {
            this.base++;
            this.watching = this.base;
        }
    }
    // timer = 0;
    public _drawWithSorting(var1, var2) {
        console.log("_drawWithSorting");
        var elem1:HTMLElement = this.sortingelems[var1];
        var elem2:HTMLElement = this.sortingelems[var2];
        // var elem1_x = Object.assign(" ", elem1.style.left);
        // var top_diff_n:number = Number(elem2.style.top) - Number(elem1.style.top);
        var elem1_top_diff:string = String((var2 - var1) * 30);
        var elem2_top_diff:string = String((var1 - var2) * 30);
        console.log("top diff: " + elem1_top_diff);
        var tl = gsap.timeline();
        tl.to(elem1, {
            duration: 1, // 右側に2秒かけて移動するモーションを指定する
            x: "100px",
            y: elem1_top_diff,
            // left: "50px",
            // rotate: 0,
            // repeat: 1,
        });
        tl.to(elem2, {
            duration: 1, // 右側に2秒かけて移動するモーションを指定する
            x: "100px",
            y: elem2_top_diff,
            // rotate: 0,
            // repeat: 1,
        });
        tl.to(elem1, {
            duration: 1, // 右側に2秒かけて移動するモーションを指定する
            x: "0px",
            y: elem1_top_diff,
            // rotate: 0,
            // repeat: 1,
        });
        tl.to(elem2, {
            duration: 1, // 右側に2秒かけて移動するモーションを指定する
            x: "0px",
            y: elem2_top_diff,
            // rotate: 0,
            // repeat: 1,
        });
        tl.to(elem1, {
            duration: 0, // 右側に2秒かけて移動するモーションを指定する
            x: "0px",
            y: "0px",
            // rotate: 0,
            // repeat: 1,
        });
        tl.to(elem2, {
            duration: 0, // 右側に2秒かけて移動するモーションを指定する
            x: "0px",
            y: "0px",
            // rotate: 0,
            // repeat: 1,
        });
        tl.pause();
        tl.resume();
        // tl = void 0;
        // var work = this.sortingelems[var1];
        // this.sortingelems[var1] = this.sortingelems[var2];
        // this.sortingelems[var2] = work;
        // tl.seek(1.5);
        // tl.reverse();
        // gsap.to(elem1, {
        //     duration: 2, // 右側に2秒かけて移動するモーションを指定する
        //     top: elem1.style.top,
        //     rotate: 360,
        //     repeat: 1,
        // });
        // gsap.to(elem2, {
        //     duration: 2, // 右側に2秒かけて移動するモーションを指定する
        //     top: elem2.style.top,
        //     rotate: 360,
        //     repeat: 1,
        // });
        // this.ctx.clearRect(0,0,800,600);
        // this.ctx.fillStyle = '#000';
        // for (var i = 0; i < this.sorting.length; i++) {
        //     if (i == var1) {
        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);
        //     } else if (i == var2) {
        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);
        //     } else {
        //         this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);
        //     }
        // }
        
        // this.timer++;
    }

    public _draw() {
        // if (this.i % 2 == 0) {
        //     this.ctx.fillStyle = '#fff';
        //     this.ctx.fillRect(50,50,50,50);
        // } else {
        //     this.ctx.fillStyle = '#000';
        //     this.ctx.fillRect(50,50,50,50);
        // }
        // this.ctx.clearRect(0,0,800,600);
        // this.ctx.fillStyle = '#000';
        // for (var i = 0; i < this.sorting.length; i++) {
        //     this.ctx.fillText(this.sorting[i],50,50+this.fontsize*i);
        // }
        for(var i=0; i < this.sorting.length; i++) {
            var elem:HTMLElement = this.sortingelems[i];
            // sortingelem.id = "sorting["+i+"]";
            // sortingelem.className="di-sorting-elem";
            // sortingelem.textContent = this.sorting[i];
            // document.body.appendChild(sortingelem);
            // this.sortingelems.push(sortingelem);
            elem.textContent = this.sorting[i].name;
            console.log("this.sortingelems[i].textContext"+this.sortingelems[i].textContext);
        }

    }
    // public transtrationGreeting(country: string) {
    //     const addDiv = documenåt.createElement('div');
    //     addDiv.innerHTML = `こんにちはを${country}で言うと${this.sub.hello(country)}`;
    //     document.getElementsByTagName('body').item(0).appendChild(addDiv);
    // }
}

// const main = new Main()
