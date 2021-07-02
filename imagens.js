let imagemDaEstrada;
let imagemDoAtor;
let imgaemDoBoo;
let imagemDoBomb;
let imagemDoBala;

//sons
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/mario.png");
  imagemDoBoo = loadImage("imagens/boo.png");
  imagemDoBala = loadImage("imagens/bala.png");
  imagemDoBomb = loadImage("imagens/bomb.png");
  imagemInimigos = [imagemDoBoo, imagemDoBala, imagemDoBomb, imagemDoBoo, imagemDoBomb, imagemDoBala]

somTrilha = loadSound("sons/mario.mp3");
somColisao = loadSound("sons/explosion.wav");
somPonto = loadSound("sons/coin.wav");

}
