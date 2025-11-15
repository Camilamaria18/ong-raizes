function aplicarMascaraCPF(valor) {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return valor;
}


function aplicarMascaraTelefone(valor) {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
  return valor;
}


function aplicarMascaraCEP(valor) {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
  return valor;
}


document.addEventListener("DOMContentLoaded", function () {
  const cpfInput = document.getElementById("cpf");
  const telInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");
  const form = document.getElementById("cadastro-form");


  if (cpfInput) {
    cpfInput.addEventListener("input", function () {
      this.value = aplicarMascaraCPF(this.value);
    });
  }


  if (telInput) {
    telInput.addEventListener("input", function () {
      this.value = aplicarMascaraTelefone(this.value);
    });
  }


  if (cepInput) {
    cepInput.addEventListener("input", function () {
      this.value = aplicarMascaraCEP(this.value);
    });
  }


  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();


      if (!form.checkValidity()) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }


      const dados = new FormData(form);
      let texto = "Dados enviados:\n\n";
      for (const [campo, valor] of dados.entries()) {
        texto += `${campo}: ${valor}\n`;
      }


      alert(texto);


      form.reset();
    });
  }
});
