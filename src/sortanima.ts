export class SortAnima {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    i = 0;
    private enable: boolean;
    readonly ctx: CanvasRenderingContext2D;
    // const roulette = new Roulette(canvas, 500);
    constructor(canvas: HTMLCanvasElement) {
            //カンバスが使用できるかチェック
        if (!canvas.getContext) {
            console.log('[Roulette.constructor] カンバスが使用できません');
            // this.enable = false;
            return;
        }
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "bold 15px '游ゴシック'";
        this.ctx.textAlign = 'center';
        this.ctx.shadowBlur  = 2;
        this.enable = true;
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
        const millDuration = 1000;
        //duration 秒間描画不可状態にする
        this.enable = false;    // ??
        setTimeout(() => {
            this.enable = true;
        }, millDuration);

        const loop = () => {
            const animation = requestAnimationFrame(loop);
            this._draw();
            this.i++;

            if (this.i < 100) {
                return;
            }
            cancelAnimationFrame(animation);
            }
        loop();
    }

    public _draw() {
        if (this.i % 2 == 0) {
            this.ctx.fillStyle = '#fff';
            this.ctx.fillRect(50,50,50,50);
        } else {
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(50,50,50,50);
        }
    }
    // public transtrationGreeting(country: string) {
    //     const addDiv = documenåt.createElement('div');
    //     addDiv.innerHTML = `こんにちはを${country}で言うと${this.sub.hello(country)}`;
    //     document.getElementsByTagName('body').item(0).appendChild(addDiv);
    // }
}

// const main = new Main()
