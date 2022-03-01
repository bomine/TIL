import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 5; // 웨이브 수
    this.totalPoints = 6; // 웨이브 안 포인트 수

    this.color = [
      "rgba(0,199,235,0.4)",
      "rgba(0,146,199,0.4)",
      "rgba(0,87,158,0.4)",
      "rgba(100,87,122,0.4)",
      "rgba(133,0,87,0.4)",
    ];

    this.waves = [];

    // 웨이브 수 만큼 웨이브 생성
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
