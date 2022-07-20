let canvas = document.getElementById('canvas');
let reset = document.getElementById('clear');
canvas.width = window.innerWidth;
canvas.height = 0.994 * window.innerHeight;

let drawing = false;

let x;
let y;


let ctx = canvas.getContext('2d');

function getThing() {
	let color = document.getElementById('color').value;
	let stroke = document.getElementById('stroke').value;
	return {
		color,
		stroke,
	};
}

function startDraw() {
	drawing = true;
	draw();
}

function stopDraw() {
	drawing = false;
	ctx.beginPath();
}

function clearAll() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(e) {
	x = e?.clientX;
	y = e?.clientY;

    if (!drawing) return;
    
	let editor = getThing();
	ctx.strokeStyle = editor.color;
	ctx.lineWidth = editor.stroke;
	ctx.lineCap = 'round';
	ctx.lineTo(x, y);
	ctx.moveTo(x, y);
	ctx.stroke();
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mousemove', draw);
