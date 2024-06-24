    const form = document.getElementById('form-cadastro');
    const nomesCadastrados = [];
    const telefonesCadastrados = [];

    let linhas = '';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        adicionarLinha();
        atualizaTabela();
    })

    function adicionarLinha() {
        const inputNome = document.getElementById('nome');
        const inputTel = document.getElementById('tel');

        if (nomesCadastrados.includes(inputNome.value)) {
            alert(`O nome: ${inputNome.value} já existe`);
        } else {
            nomesCadastrados.push(inputNome.value);
            telefonesCadastrados.push(inputTel.value);

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTel.value}</td>`;
            linha += `</tr>`;

            linhas += linha;
        }

        // Limpa os campso de entrada após a edição
        inputNome.value = '';
        inputTel.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }