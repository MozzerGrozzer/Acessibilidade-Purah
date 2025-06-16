<header>     <!-- Cabeçalho do site, com logo e navegação -->
<nav>        <!-- Navegação principal com links acessíveis -->
<main>       <!-- Conteúdo principal da página -->
<section>    <!-- Divisões temáticas como contraste, legibilidade, etc. -->
<article>    <!-- Blocos de conteúdo explicativo -->
<aside>      <!-- Observações ou conteúdo complementar -->
<footer>     <!-- Rodapé com links, créditos ou ferramentas -->

<h1> a <h6>   <!-- Títulos hierárquicos, fundamentais para leitores de tela -->
<p>           <!-- Parágrafos com texto explicativo -->
<a href="#">  <!-- Links com texto descritivo -->
<button>      <!-- Botões acessíveis e com foco de teclado -->
<label>       <!-- Rótulos associados a inputs -->
<input>       <!-- Campos de formulário -->
<ul> / <ol>   <!-- Listas ordenadas e não ordenadas -->
<li>          <!-- Itens de lista -->
<strong>, <em> <!-- Ênfase semântica, melhor que <b> ou <i> -->

lang="pt-br"     <!-- Define o idioma do site -->
aria-label=""     <!-- Rótulos para elementos interativos -->
role=""           <!-- Define papéis semânticos específicos -->
alt=""            <!-- Texto alternativo para imagens -->
tabindex="0"      <!-- Faz elementos não focáveis ficarem acessíveis -->
aria-pressed=""   <!-- Indica o estado de botões tipo toggle -->
aria-hidden="true"<!-- Esconde elementos de leitores de tela -->

<!-- Alternância de tema claro/escuro com botão -->
document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});


<!-- Preferência do usuário (modo escuro/claro) -->
@media (prefers-color-scheme: dark) { ... }

<!--  Foco visível para teclado */ -->
:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

<!--  Contraste alto entre texto e fundo  -->
body {
  background-color: #fff;
  color: #111;
}

<!--  Tipografia legível  -->
body {
  font-size: 1rem;
  line-height: 1.6;
  font-family: system-ui, sans-serif;
}

<!--  Botão acessível  -->
button {
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  font-weight: bold;
}
