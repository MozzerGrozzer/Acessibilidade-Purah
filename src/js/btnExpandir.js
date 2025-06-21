const buttons = document.querySelectorAll('.expand-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const contentId = button.getAttribute('aria-controls');
      const content = document.getElementById(contentId);

      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Alterna o estado
      button.setAttribute('aria-expanded', String(!isExpanded));
      content.hidden = isExpanded;

      // Altera o texto do botão
      button.textContent = isExpanded ? 'Ler mais' : 'Esconder';
    });
  });