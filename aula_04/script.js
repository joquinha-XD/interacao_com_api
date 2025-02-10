document.addEventListener("DOMContentLoaded", ()=>{
  const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
  fetch(url)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Erro ao receber os dados")
    }
    return response.json()
  })
  .then((data)=>{
    gerarImagem(data);
  })
  .catch((err)=>{console.log(err)})
})

const gerarImagem = (imgId) => {
  const idGato = document.querySelector("#idGato")
  const imgGato = document.querySelector("#imgGato")
  imgId.map((id, index)=>{
    idGato.textContent = imgId[index].id
    console.log(imgId[index].id)
  })
}
