function fun_carrara() {
  var nomePassageiro = inp_nomeUsuario.value;
  console.log(nomePassageiro);
  var distancia = Number(inp_distancia.value);
  console.log(distancia);
  var numeroBandeira = Number(inp_bandeira.value);
  console.log(numeroBandeira);
  var horario = Number(inp_horario.value);
  console.log(horario);
  var valor = distancia * 1.25;
  var valorTaxa = valor;
  var pix = valor * 0.025;
  var cartao = valor * 0.035;
  if (
    numeroBandeira > 3 ||
    numeroBandeira < 1 ||
    horario > 23 ||
    horario < 0 ||
    distancia < 0 ||
    numeroBandeira == '' ||
    horario == '' ||
    distancia == '' ||
    nomePassageiro == ''
  ) {
    alert("Favor corrigir o(s) dado(s) de entrada para seguirmos em frente");
    msg.innerHTML = "";
    inp_bandeira.value = "";
    inp_distancia.value = "";
    inp_horario.value = "";
    inp_nomeUsuario.value = "";
  } else if (distancia == 0) {
    alert("informar corretamente a distância");
    msg.innerHTML = "";
    inp_bandeira.value = "";
    inp_distancia.value = "";
    inp_horario.value = "";
    inp_nomeUsuario.value = "";
  } else if (distancia > 100) {
    alert("viagens devem ser negociadas com a nossa central");
  }
  else if (numeroBandeira == 1) {
    if (horario <= 6) {
      valorTaxa = valor * 0.075;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      console.log(valorCard);
      console.log("fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;


      
    } else if (horario <= 12) {
      valorTaxa = valor * 0.1;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
    } else {
      valorTaxa = valor * 0.125;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      console.log("funciona klkkkkkkkkkkllllllllllllllllllllllll");
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
    }
  }
  if (numeroBandeira == 2) {
    if (horario <= 6) {
      valorTaxa = valor * 0.1;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira  ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
      console.log("Etapa 2   fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
    } else if (horario <= 12) {
      valorTaxa = valor * 0.15;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira  ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
      console.log("Etapa 2  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
     
    } else {
      valorTaxa = valor * 0.2;
      valor = valor + valorTaxa;
      let valorPix = valor - pix;
      let valorCard = valor + cartao;
      msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
      <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
      console.log("Etapa 2  funciona klkkkkkkkkkkllllllllllllllllllllllll");
    }

  } else {
    if (numeroBandeira == 3) {
      if (horario <= 6) {
        valorTaxa = valor * 0.15;
        valor = valor + valorTaxa;
        let valorPix = valor - pix;
        let valorCard = valor + cartao;
        msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
        <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
        console.log("Etapa 3   fdjedsfhsfusfghsdhfghhhhhhhhhhhhhhhhh");
      
      } else if (horario <= 12) {
        valorTaxa = valor * 0.3;
        valor = valor + valorTaxa;
        let valorPix = valor - pix;
        let valorCard = valor + cartao;
        msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
        <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
        console.log("Etapa 3  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        
      } else {
        valorTaxa = valor * 0.45;
        valor = valor + valorTaxa;
        let valorPix = valor - pix;
        let valorCard = valor + cartao;
        msg.innerHTML = ` Olá, ${nomePassageiro}. Sua corrida, será na bandeira ${numeroBandeira}, percorrerá ${distancia} km e o total da corrida será de R$:${valor}<br> <ul> A Forma de pagamento altera o valor da corrida! <br><li> A Forma de pagamento altera o valor da corrida! <br> Em PIX o valor será de R$:${valorPix}.</li> <br> <li>Em cartão (debito ou crédito) será o valor de R$:${valorCard}</li>.
        <br><li> Para pagamento em dinheiro o R$:${valor} não se altera, (favor facilitar o troco).</li></ul>`;
        console.log("Etapa 3  funciona klkkkkkkkkkkllllllllllllllllllllllll");
      }
    }

  }
}
