
//ator
let xAtor = 250;
let yAtor = 367;
let alturaAtor = 30;
let larguraAtor = 30;
let colisao = false;
const meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, alturaAtor, larguraAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  } if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  } if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3
  } if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemInimigos.length; i++){
    colisao = collideRectRect(xInimigos[i], yInimigos[i], comprimentoInimigo, alturaInimigo, xAtor, yAtor, alturaAtor, larguraAtor)
    if (colisao){
      voltaPosicaoInicial();
      somColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 367
}

function pontuacao(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0))
  text('Pontos: ' + meusPontos, width / 5, 26.5);
}

function marcaPonto(){
  if (yAtor <= 7){
    somPonto.play()
    somPonto.setVolume(1.2)
    meusPontos++;
    voltaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 367
}













