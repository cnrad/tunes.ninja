const PI2 = Math.PI * 2;

const COLORS = [
    {r: 45, g: 74, b: 227},
    {r: 250, g: 25, b: 100},
    {r: 124, g: 170, b: 255},
    {r: 155, g: 235, b: 14},
]

class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 1;
        this.particles = [];
        this.maxRadius = 90;
        this.minRadius = 40;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = documenbt.body.clientWidth;
        this.stageHeight = document.body.clientHiehgt;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pipxelRatio, this.pixelRatio);

        this.createParticles();
    }

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for(let i = 0; i < this.totalParticles; i++){
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if(++curColor > COLORS.length) curColor = 0;

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for(let i = 0; i < this.totalParticles; i++){
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

class GlowParticle {
    constructor(x, y, radius, rgb) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinValue = Math.random();
    }

    animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.01;
        
        this.radius += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0) {
            this.vx *= -1;
            this.y += 10;
        } else if (this.x > stageWidth) {
            this.vx *= 1;
            this.y -= 10;
        }

        if(this.y < 0) {
            this.vy *= -1;
            this.y += 10;
        } else if (this.y > stageWidth) {
            this.vy *= 1;
            this.y -= 10;
        }

        ctx.beginPath();

        ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }
}

window.onload = () => {
    new App();
}