const mainCanvasElement = document.getElementById('main-canvas');
const ctx = mainCanvasElement.getContext('2d');

async function run() {
  const f = new FontFace('discord', 'url(assets/fonts/consolas.ttf)');

  await f.load();
  ctx.font = '14px discord';
  
  ctx.fillText('⣿⣿', 100, 100);
}

run();
