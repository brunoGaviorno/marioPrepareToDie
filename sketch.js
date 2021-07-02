
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
  somTrilha.setVolume(0.3)
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraInimigos();
  movimentaInimigo();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  pontuacao();
  marcaPonto();

}

