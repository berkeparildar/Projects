import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-particle-background',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { display: block; }']
})
export class ParticleBackgroundComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private numParticles = 40;
  private maxConnectionDistance = 100;

  ngOnInit(): void {
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;
    this.ctx = this.canvasRef.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.initializeParticles();
    this.animate();
  }
  private initializeParticles(): void {
    for (let i = 0; i < this.numParticles; i++) {
      const x = Math.random() * this.canvasRef.nativeElement.width;
      const y = Math.random() * this.canvasRef.nativeElement.height;
      this.particles.push(new Particle(x, y, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
    }
  }
  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.particles.forEach(particle => {
      particle.move();
      this.drawParticle(particle);

      this.particles.forEach(otherParticle => {
        if (particle !== otherParticle) {
          const distance = particle.distanceTo(otherParticle);

          if (distance < this.maxConnectionDistance) {
            this.drawConnection(particle.x, particle.y, otherParticle.x, otherParticle.y, distance);
          }
        }
      });
    });

    requestAnimationFrame(() => this.animate());
  }
  private drawParticle(particle: Particle): void {
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, 4, 0, 360);
    this.ctx.fillStyle = 'rgb(88, 91, 112)';
    this.ctx.fill();
    this.ctx.closePath();
  }
  private drawConnection(x1: number, y1: number, x2: number, y2: number, distance: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.strokeStyle = `rgba(88, 91, 112, ${1 - distance / this.maxConnectionDistance})`;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;
  }
}
class Particle {
  constructor(public x: number, public y: number, public xMove: number, public yMove: number) {}
  move(): void {
    this.x += this.xMove;
    this.y += this.yMove;
    if (this.x >= window.innerWidth) {
      this.xMove = -1 * this.xMove;
    }
    if (this.x <= 0) {
      this.xMove = -1 * this.xMove;
    }
    if (this.y >= window.innerHeight) {
      this.yMove = -1 * this.yMove;
    }
    if (this.y <= 0) {
      this.yMove = -1 * this.yMove;
    }
  }
  distanceTo(otherParticle: Particle): number {
    const dx = this.x - otherParticle.x;
    const dy = this.y - otherParticle.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

