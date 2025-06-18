  document.addEventListener("DOMContentLoaded", () => {
    const finalizarBtn = document.getElementById("finalizarCursoBtn");
    const popup = document.querySelector(".popup");
    const body = document.body;

    // Checagem se o evento aconteceu antes
    if (localStorage.getItem("cursoFinalizado") === "true") {
      // impedir replay do evento
      if (finalizarBtn) finalizarBtn.remove();
      document.getElementById("mensagemErro").style.display = "block";
      if (popup) popup.remove();
      body.classList.remove("popup-active");
      return;
    }



    // Evento ao clicar no botão de finalizar o curso
    if (finalizarBtn) {
      finalizarBtn.addEventListener("click", () => {
        // evento aconteceu
        localStorage.setItem("cursoFinalizado", "true");

        //trava scroll
        body.classList.add("popup-active");
        if (popup) popup.classList.add("active");

        setTimeout(() => {
          window.location.href = "../../index.html"; 
        }, 4000); // tempo de exibição mudar
      });
    }
  });
