
//código carros
let xInimigos = [550, 550, -50, 550, -50, 550];
let yInimigos = [40, 97, 150, 210, 270, 318];
let velocidadeInimigos = [4, 7, 5.5, 6, 6.2, 7.5];
let comprimentoInimigo = 40;
let alturaInimigo = 40;

function mostraInimigos(){
  for(let i = 0; i < imagemInimigos.length; i++){
    image(imagemInimigos[i], xInimigos[i], yInimigos[i], 40, 40);
  }
}
function movimentaInimigo(){
  for(let i = 0; i < imagemInimigos.length; i++){
    if(i == 2 || i == 4 ){
      xInimigos[i] += velocidadeInimigos[i];
    } else {
    xInimigos[i] -= velocidadeInimigos[i];
    }
  }
}
function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemInimigos.length; i++){
    if (i == 2 || i == 4){
      if (xInimigos[i] >= 550){
        xInimigos[i] = -50
      
      }
    } else if (passouTela(xInimigos[i])){
        xInimigos[i] = 550
     }
  }
}
function passouTela(xInimigo){
  return xInimigo <- 50
}