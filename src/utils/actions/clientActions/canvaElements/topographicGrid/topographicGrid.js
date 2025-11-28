import canvasSketch from 'canvas-sketch';


export default function createTopographicGrid (canvasElement) {

  const settings = {
    canvas: canvasElement,
    animate: true,
    // dimensions: [2048, 2048],
  };

  let elCanvas;
  let points;

  const sketch = ({ canvas }) => {

    points = [
      new Point({ x: 200, y: 540 }),
      // new Point({ x: 600, y: 300, controller: true }),
      new Point({ x: 600, y: 300 }),
      new Point({ x: 880, y: 540 }),
      new Point({ x: 600, y: 700 }),
      new Point({ x: 640, y: 900 }),
    ];

    document.addEventListener("mousemove", onMouseMove)
    elCanvas = canvas

    return ({ context, width, height }) => {
      // context.fillStyle = "white";
      context.fillStyle = "#d9e2eb";
      context.fillRect(0, 0, width, height);

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i+= 1 ) {
        context.lineTo(points[i].x, points
          [i].y);
      }

      context.stroke();

      // context.beginPath();
      // context.moveTo(points[0].x, points[0].y);

      // for (let i = 1; i < points.length; i+= 2 ) {
      //   context.quadraticCurveTo(points[i].x, points
      //     [i].y, points[i + 1].x, points[i + 1].y);
      // }

      // context.stroke();

      context.beginPath();

      for (let i = 0; i < points.length -1; i++) {
        const curr = points[i + 0];
        const next = points[i + 1];

        const mx = curr.x + (next.x - curr.x) * 0.5;
        const my = curr.y + (next.y - curr.y) * 0.5;

        // context.beginPath();
        // context.arc(mx, my, 5, 0, Math.PI * 2)
        // context.fillStyle = 'blue';
        // context.fill();
        if( i == 0) context.moveTo(curr.x, curr.y);
        else if (i == points.length - 2) context.quadraticCurveTo(curr.x, curr.y, next.x, next.y)
        else context.quadraticCurveTo(curr.x, curr.y, mx, my)
      }
      context.lineWidth = 4;
      context.strokeStyle = 'blue';
      context.stroke();

      points.forEach((point)=>{
        point.draw(context);
      })

    };
  };

  function onMouseMove (e) {
    // console.log(e.offsetX, e.offsetY);
    // const x = (e.clientX / elCanvas.offsetWidth) * elCanvas.width;
    // const y = (e.clientY / elCanvas.offsetHeight) * elCanvas.height;
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x,y)

    // if(points[1].controller){
      // points[1].x = x;
      // points[1].y = y;
    // }

    points.forEach((point,i) => {
      if(point.controller){
        point.x = x/i;
        point.y = y/i;
      }
    })

  }

  canvasSketch(sketch, settings);

  class Point {
    constructor({x, y, controller = false}) {
      this.x = x;
      this.y = y;
      this.controller = controller;
    }

    draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = this.controller ? 'red' : 'black';
      
      context.beginPath();
      context.arc(0, 0, 10, 0, Math.PI * 2);
      context.fill();
      
      context.restore();
    }

    hitTest(x, y) {
      const dx = this.x - x;
      const dy = this.y - y;
      const dd = Math.sqrt(dx*dx + dy*dy);

      return dd < 20;
    };
  }
};

createTopographicGrid();