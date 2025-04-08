// Botão de volta

window.onscroll = function () {
  let botao = document.getElementById("btnTopo");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  };
}

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}