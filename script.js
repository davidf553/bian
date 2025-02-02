function handleLoginSubmit(event) {
  event.preventDefault();
  const password = document.getElementById('password').value;

  if (password === "23/07") {
    // Se a senha estiver correta, redireciona para a página principal
    window.location.href = "pagina-principal.html"; // Redireciona para o arquivo da página principal
  } else {
    // Se a senha estiver errada, exibe a mensagem de erro
    const error = document.getElementById('error');
    error.style.display = "block";
  }
}
