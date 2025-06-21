const buttons = document.querySelectorAll('.expand-btn');

  buttons.forEach(button => { // botões numerados
    button.addEventListener('click', () => { //usuario clica
      const contentId = button.getAttribute('aria-controls'); //acha o botão
      const content = document.getElementById(contentId);

      const isExpanded = button.getAttribute('aria-expanded') === 'true'; // mostra o texto

      // Alterna o estado
      button.setAttribute('aria-expanded', String(!isExpanded));
      content.hidden = isExpanded;

      // Altera o texto do botão
      button.textContent = isExpanded ? 'Ler mais' : 'Esconder';
    });
  });