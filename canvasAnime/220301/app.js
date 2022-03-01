// import { Wave } from "./wave.js";
import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    // 캔버스 생성
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // this.wave = new Wave();
    this.wavegroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // 애니메이션 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 레티나 디스플레이에서 잘보이도록 더블사이즈
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    // this.wave.resize(this.stageWidth, this.stageHeight);
    this.wavegroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    // 캔버스 clear
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // this.wave.draw(this.ctx);
    this.wavegroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
