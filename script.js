document.addEventListener("DOMContentLoaded", function () {
  const imageSelector = document.getElementById("imageSelector");
  const displayImage = document.getElementById("displayImage");
  const displayVideo = document.getElementById("displayVideo");
  const videoText = document.getElementById("videoText");

  imageSelector.addEventListener("change", function () {
    const selectedValue = imageSelector.value;

    if (selectedValue === "video") {
      displayImage.style.display = "none"; // Esconde a imagem se estiver visível
      videoText.style.display = "block"; // Esconde o texto do vídeo
      displayVideo.style.display = "block"; // Exibe o contêiner de vídeo
      displayVideo.src = "./assets/apaixonadoooooo.mp4"; // Substitua pelo caminho do seu vídeo local
      displayVideo.play(); // Inicia a reprodução do vídeo automaticamente
    } else if (selectedValue) {
      displayVideo.pause(); // Pausa o vídeo se estiver reproduzindo
      displayVideo.src = ""; // Limpa o URL do vídeo
      displayVideo.style.display = "none"; // Esconde o contêiner de vídeo
      displayImage.src = selectedValue;
      displayImage.style.display = "block"; // Exibe a imagem
    } else {
      displayImage.style.display = "none"; // Esconde a imagem se nenhuma opção for selecionada
      displayVideo.style.display = "none"; // Esconde o contêiner de vídeo se nenhuma opção for selecionada
      displayVideo.pause(); // Pausa o vídeo se estiver reproduzindo
    }
  });
});
