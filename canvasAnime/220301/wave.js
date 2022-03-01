import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    // 캔버스 사이즈
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    // 캠버스 중앙
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // 포인트 간격 정의
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    // this.point = new Point(this.centerX, this.centerY);

    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    // ctx.fillStyle = "#ff0000";
    ctx.fillStyle = this.color;

    // this.point.update();
    // ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);

    // 첫 포인트와 마지막 포인트는 고정
    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      // 이전값과 현재값의 중간 값 -> 그대로 쓰면 직선이 됨
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      //   ctx.lineTo(cx, cy);
      ctx.quadraticCurveTo(prevX, prevY, cx, cy); // 곡선

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);

    ctx.fill();
    ctx.closePath();
  }
}
