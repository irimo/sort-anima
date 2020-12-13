import gsap from "gsap";

import { characters } from "./characters";
import _ from 'lodash'
export class SortAnima {
    // canvas = <HTMLCanvasElement>document.getElementById('canvas');
    // p = 0;
    // base = 0;
    // watching = 0;
    private enable: boolean;
    // readonly ctx: CanvasRenderingContext2D;
    // readonly fontsize = 15;
    sorting:any = characters;
    sortingelems:any = [HTMLElement];
    sorting_len:Number = characters.length;
    fontsize = 30;
    public sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
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
            // sortingelem.className = "sorting"+i;
            // sortingelem.className="di-sorting-elem sorting"+i;
            sortingelem.className="di-sorting-elem";
            sortingelem.style.top = this.fontsize * i + "px";
            sortingelem.innerHTML = this.sorting[i].toString();
            // sortingelem.textContent = this.sorting[i].name.toString() + this.sorting[i].emoji ;
            // sortingelem.style.color = this.sorting[i].color;
            document.getElementById("numberlist").appendChild(sortingelem);

            // document.body.appendChild(sortingelem);
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
    // void sort() {					// ヒープソート(昇順)
    //     for (int i = (length - 2) / 2; i >= 0; i--) {
    //         downheap(i, length - 1);
    //     }
    //     for (int i = length - 1; i > 0; i--) {
    //         swap(0, i);
    //         downheap(0, i - 1);
    // }
    // }
    
    // void downheap(int k, int r) {
    //     int j, v;
    //     v = a[k];
    //     while (true) {
    //         j = 2 * k + 1;
    //         if (j > r) break;
    //         if (j != r) {
    //         if (a[j + 1] > a[j]) {
    //             j = j + 1;
    //         }
    //         }
    //         if (v >= a[j]) break;
    //         a[k] = a[j];
    //         k = j;
    //     }
    //     a[k] = v;
    // }
    async sort() {
        var length = this.sorting.length - 1;
        for (var i = Math.floor((length - 2) / 2); i >= 0; i--) {
            await this.downheap(i, length - 1);
            await this._draw();
        }
        for (var i = length - 1; i > 0; i--) {
            await this.swap(0, i);
            await this.downheap(0, i - 1);
        }
        // while (this.base < this.sorting.length - 1) {
            // await this.changeArrayIfNeeds();
            // await this._draw();
            // await this.advanceIteration();
        // }
    }

    async downheap(k, r) {
        var j, v;
        v = _.cloneDeep(this.sorting[k]);
        var vi = k;
        var sleep_delay = 0;

        // var vobj:HTMLElement = Object.assign(this.sortingelems[k],this.sortingelems[k]);
        console.log("vobj start");
        console.log("k="+k);

        // var vobj:HTMLElement = _.cloneDeep(this.sortingelems[k]);
        var vobj:HTMLElement = <HTMLElement>document.createElement('div');
        // // sortingelem.id = "sorting"+i;
        // console.log("create element");
        vobj.className="di-sorting-elem";
        // console.log("className");
        vobj.innerHTML = _.cloneDeep(this.sortingelems[k].textContent) + ":k-"+ k;
        // vobj.innerHTML = Object.assign(" ", this.sortingelems[k].innerHTML);
        console.log(this.sortingelems[k]);
        var vobjtop = k * this.fontsize;
        var vobj_posx = 200;
        vobj.style.top = vobjtop.toString() + "px";
        // console.log("top"+vobj.style.top);
        vobj.style.left = "0";
        vobj.style.position = "absolute";
        // console.log("left"+vobj.style.left);
        console.log(vobj);

        document.getElementById("numberlist").appendChild(vobj);

        var tl = gsap.timeline({repeat: 1});
        tl.to(vobj, {
            duration: 0, // 右側に2秒かけて移動するモーションを指定する
            alpha: 1,
            // x: "200px",
            // y: this.sortingelems[0].style.top,
            // y: elem1_top_diff,
            // left: "50px",
            // rotate: 0,
            // repeat: 1,
        });
        // var sortingelems_0:HTMLElement = this.sortingelems[0];
        var vobjy = 0 * this.fontsize - vobjtop;
        // console.log("vobjy="+vobjy);
        // console.log(sortingelems_0.style.top);
        // console.log(Number(vobj.style.top));

        tl.to(vobj, {
            duration: 1, // 右側に2秒かけて移動するモーションを指定する
            x: vobj_posx+"px",
            y: vobjy + "px",
            // y: elem1_top_diff,
            // left: "50px",
            // rotate: 0,
            // repeat: 1,
        });
        sleep_delay += 1000;
        // vobj.style.top = "200px";
        // // console.log("top"+vobj.style.top);
        // vobj.style.left = this.sortingelems[0].style.top;


        // var vi = k;
        while (true) {
            j = 2 * k + 1;
            if (j > r) break;
            if (j != r) {
                if (this.greaterThan(this.sorting[j + 1], this.sorting[j])) {
                    j = j + 1;
                }
            }
            if (this.greaterThanOrEqual(v, this.sorting[j])) break;
            this.sorting[k] = _.cloneDeep(this.sorting[j]);
            // this.sorting[k] = {name: this.sorting[j].name,
            //     emoji: this.sorting[j].emoji,
            //     color: this.sorting[j].color};
            // await this._drawWithSorting(k,j);   
            console.log("jobj start");
            // var jobj:HTMLElement = _.cloneDeep(this.sortingelems[j]);
            // console.log(jobj);
            var jobj:HTMLElement = <HTMLElement>document.createElement('div');
            // console.log("CREATE ELEMENT");
            // // sortingelem.id = "sorting"+i;
            jobj.className="di-sorting-elem";
            // console.log("CREclassName");
            jobj.innerHTML = _.cloneDeep(this.sortingelems[j].textContent) + ":j-" + j;
            console.log("textContent:"+jobj.innerHTML);
            var jobjtop = j * this.fontsize;
            jobj.style.top = jobjtop + "px";
            console.log("top:"+jobj.style.top);
            jobj.style.left = "0";
            // console.log("left:"+jobj.style.left);
            jobj.style.position = "absolute";

            console.log("jobj move start");
    
            // var jobj:HTMLElement = Object.assign(this.sortingelems[j],this.sortingelems[j]);
            document.getElementById("numberlist").appendChild(jobj);

            console.log(jobj);
    
            console.log("sortingelems=");
            console.log(this.sortingelems[k]);
            // tl.to(this.sortingelems[k], {
            //     duration: 1, // 右側に2秒かけて移動するモーションを指定する
            //     alpha: 0,
            //     // y: elem1_top_diff,
            //     // left: "50px",
            //     // rotate: 0,
            //     // repeat: 1,
            // }); 
            var jobjx = 0;

            // console.log("jobjx="+jobjx);
            // var jobjy = 0;
            // console.log("jobjy="+jobjy);
            tl.to(jobj, {
                duration: 0, // 右側に2秒かけて移動するモーションを指定する
                alpha: 1,
            //     // x: jobjx,
            //     // y: jobjy,
            //     // y: elem1_top_diff,
            //     // left: "50px",
            //     // rotate: 0,
            //     // repeat: 1,
            }); 
            tl.to(jobj, {
                duration: 1, // 右側に2秒かけて移動するモーションを指定する
                x: "0",
                y: (jobjtop - k * this.fontsize) + "px",
                // y: elem1_top_diff,
                // left: "50px",
                // rotate: 0,
                // repeat: 1,
            }); 
            sleep_delay += 1000;
            k = j;
        }
        console.log("v=");
        console.log(v);
        this.sorting[k] = _.cloneDeep(v);
        // this.sortingelems[k] = vobj;
        if (vi != k) {
            var vobjy = vobjtop - k * this.fontsize;
            tl.to(vobj, {
                duration: 1, // 右側に2秒かけて移動するモーションを指定する
                x: "0px",
                y: vobjy + "px",
                // y: elem1_top_diff,
                // left: "50px",
                // rotate: 0,
                // repeat: 1,
            });
            sleep_delay += 1000;
        }
        // tl.to(this.sortingelems[k], {
        //     duration: 0, // 右側に2秒かけて移動するモーションを指定する
        //     alpha: 1,
        //     // y: elem1_top_diff,
        //     // left: "50px",
        //     // rotate: 0,
        //     // repeat: 1,
        // }); 
        tl.to(vobj, {
            duration: 0, // 右側に2秒かけて移動するモーションを指定する
            alpha: 0,
        //     // y: elem1_top_diff,
        //     // left: "50px",
        //     // rotate: 0,
        //     // repeat: 1,
        }); 
        tl.to(jobj, {
            duration: 0, // 右側に2秒かけて移動するモーションを指定する
            alpha: 0,
        //     // y: elem1_top_diff,
        //     // left: "50px",
        //     // rotate: 0,
        //     // repeat: 1,
        }); 
        tl.pause();
        tl.resume();
        // await this._drawWithSorting(k,j);  
        await this.sleep(sleep_delay);  
        // await function() {jobj = void 0,vobj = void 0}
        await this._draw();
        // await tl.clear();
    }    
    // async changeArrayIfNeeds() {
    //     if (this.greaterThan(this.sorting[this.watching], this.sorting[this.watching+1])) {
    //         this.swap(this.watching, this.watching+1)
    //         await this._drawWithSorting(this.watching,this.watching+1);
    //         await sleep(4000);
    //     }
    // }
    async swap(var1, var2) {
        var work = _.cloneDeep(this.sorting[var1]);
        this.sorting[var1] = _.cloneDeep(this.sorting[var2]);
        this.sorting[var2] = work;
        await this._drawWithSorting(var1,var2);
}
    public greaterThan(obj1, obj2) {
        // if (obj1.name > obj2.name) {
        if (obj1 > obj2) {
                return true;
        }
        return false;
    }
    public greaterThanOrEqual(obj1, obj2) {
        // if (obj1.name >= obj2.name) {
        if (obj1 >= obj2) {
                return true;
        }
        return false;
    }
    // public advanceIteration() {
    //     if (this.watching + 1 < this.sorting.length -1) {
    //         this.watching++;
    //     }  else {
    //         this.base++;
    //         this.watching = this.base;
    //     }
    // }
    // timer = 0;
    async _drawWithSorting(var1, var2) {
        console.log("_drawWithSorting");
        var elem1:HTMLElement = this.sortingelems[var1];
        var elem2:HTMLElement = this.sortingelems[var2];
        // var elem1_x = Object.assign(" ", elem1.style.left);
        // var top_diff_n:number = Number(elem2.style.top) - Number(elem1.style.top);
        var elem1_top_diff:string = String((var2 - var1) * 30);
        var elem2_top_diff:string = String((var1 - var2) * 30);
        console.log("top diff: " + elem1_top_diff);
        var tl = gsap.timeline({repeat: 1});
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
        await this.sleep(4000);
        // await this._draw();
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
        for(var i=0; i < this.sorting_len; i++) {
            console.log("@draw i="+i);
            var elem:HTMLElement = this.sortingelems[i];
            // sortingelem.id = "sorting["+i+"]";
            // sortingelem.className="di-sorting-elem";
            // sortingelem.textContent = this.sorting[i];
            // document.body.appendChild(sortingelem);
            // this.sortingelems.push(sortingelem);
            if (!this.sorting[i])return;
            elem.innerHTML = this.sorting[i].toString() + ":i-" + i;
            // elem.textContent = this.sorting[i].name.toStrig() + this.sorting[i].emoji;
            console.log("this.sortingelems[i].textContext"+this.sortingelems[i].innerHTML);
        }

    }
    // public transtrationGreeting(country: string) {
    //     const addDiv = documenåt.createElement('div');
    //     addDiv.innerHTML = `こんにちはを${country}で言うと${this.sub.hello(country)}`;
    //     document.getElementsByTagName('body').item(0).appendChild(addDiv);
    // }
}

// const main = new Main()
