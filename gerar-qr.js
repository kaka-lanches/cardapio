'use strict';

(() => {
  const CARDAPIO_URL = 'https://kaka-lanches.github.io/cardapio/';
  const box = document.getElementById('qrcode');
  const status = document.getElementById('status');
  const button = document.getElementById('gerar');

  function gerarQR() {
    if (typeof QRCode === 'undefined') {
      status.textContent = 'Não foi possível carregar a biblioteca de QR Code. Atualize a página e tente novamente.';
      return;
    }

    box.replaceChildren();
    new QRCode(box, {
      text: CARDAPIO_URL,
      width: 360,
      height: 360,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
    status.textContent = 'QR Code gerado para: ' + CARDAPIO_URL;
  }

  button.addEventListener('click', gerarQR);
  gerarQR();
})();
