const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibriOsLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        exibirValorTotalDosLivrosDisponiveis();
    }
}

function exibirValorTotalDosLivrosDisponiveis(){
    elementoComValorTotalDeLivrosDisponives.innerHTML= `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">199,00</span></p>
  </div>
    `
}