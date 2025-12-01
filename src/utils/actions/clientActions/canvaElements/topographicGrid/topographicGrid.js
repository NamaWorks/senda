import canvasSketch from 'canvas-sketch';



export default function createTopographicGrid (canvasElement) {

  const numberOfLines = 120;

  const settings = {
    canvas: canvasElement,
    animate: true,
    // dimensions: [2048, 2048],
  };

  let elCanvas;
  let points;

  const sketch = ({ canvas }) => {

    elCanvas = canvas

    let canvasW = elCanvas.getAttribute('width');
    let canvasH = elCanvas.getAttribute('height');
    
    points = [
      new Point({ x: canvasW*0.0, y: canvasH*0.4 }),
      // new Point({ x: 600, y: 300, controller: true }),
      new Point({ x: canvasW*0.25, y: canvasH*0.3, controller: true}),
      // new Point({ x: canvasW*0.5, y: canvasH*0.4, controller: true}),
      // new Point({ x: canvasW*0.75, y: canvasH*0.7, controller: true}),
      new Point({ x: canvasW*1.5, y: canvasH*0.9 }),
    ];

    document.addEventListener("mousemove", (e)=>{onMouseMove(e)})

    return ({ context, width, height }) => {
      context.fillStyle = "#d9e2eb";
      context.fillRect(0, 0, width, height);

      // context.beginPath();
      // context.moveTo(points[0].x, points[0].y);

      // for (let i = 1; i < points.length; i+= 1 ) {
      //   context.lineTo(points[i].x, points
      //     [i].y);
      // }

      // context.stroke();

      for (let j = 0; j < numberOfLines; j++) {

      const middle = Math.round(numberOfLines/2);
      const distanceToMiddle = Math.abs(middle - j);
      const modifier = Math.abs(middle - distanceToMiddle);
      // console.log(distanceToMiddle)
        
      context.beginPath();
        
      for (let i = 0; i < points.length -1; i++) {
        const curr = points[i + 0];
        const next = points[i + 1];

        const mx = curr.x + (next.x - curr.x) * 0.5;
        const my = curr.y + (next.y - curr.y) * 0.5;

        if( i == 0) context.moveTo(curr.x*j/2, curr.y*j/2);
        else if (distanceToMiddle<=1) context.quadraticCurveTo(curr.x*modifier, curr.y*modifier, next.x*modifier, next.y*modifier)
        else if (i == points.length - 2) context.quadraticCurveTo(curr.x, curr.y, next.x, next.y)
        else context.quadraticCurveTo(curr.x*modifier, curr.y*modifier, mx*modifier, my*modifier)
      }
      context.lineWidth = 2;
      context.strokeStyle = '#b0c0da';
      context.stroke();

      points.forEach((point)=>{
        // point.draw(context);
      })

    };
    }

  };

  
  
  const easeAmount = 0.001;
  function onMouseMove (e) {
    let animationTimeout = null;
    // const x = (e.clientX / elCanvas.offsetWidth) * elCanvas.width;
    // const y = (e.clientY / elCanvas.offsetHeight) * elCanvas.height;

    // const x = e.clientX;
    // const y = e.clientY;

    let moveAmount = {x:0 , y:0};

    points.forEach((point) => {
      if(point.controller){
        if(!animationTimeout) {
          animationTimeout = window.requestAnimationFrame(()=>{step(point)});
        }
      };
    });

    function step (point) {
        const x = e.clientX;
        const y = e.clientY;
        moveAmount = {x: x - point.x, y: y -point.y};

        if(Math.abs(moveAmount.x) > 1.1 || Math.abs(moveAmount.y) > 1.1){
          point.x += moveAmount.x * easeAmount;
          point.y += moveAmount.y * easeAmount; 
  
          moveAmount.x *= 1-easeAmount;
          moveAmount.y *= 1-easeAmount;

          requestAnimationFrame(()=>{step(point)})
        } else {
          moveAmount = {x:0 , y:0};
          animationTimeout = null;
        }

      }      
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

// createTopographicGrid();