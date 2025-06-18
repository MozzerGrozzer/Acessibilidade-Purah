  const finalizarBtn = document.getElementById('finalizarCursoBtn');
  const popup = document.getElementById('popup');
  const voltarHomeBtn = document.getElementById('voltarHomeBtn');

  finalizarBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
    finalizarBtn.classList.add('hidden');
    voltarHomeBtn.classList.remove('hidden');
    document.body.classList.add('popup-active');
  });

  voltarHomeBtn.addEventListener('click', () => {
    window.location.href = '../../index.html';
  });