//eventos
document.addEventListener("DOMContentLoaded", ()=>{
  const url = 'https://api.chucknorris.io/jokes/categories'
  fetch(url)
  .then((response)=>{
    if(!response.ok){
      throw new Error('Erro ao receber dados');
    }
    return response.json();
  })
  .then( (data)=>{
    gerarCategorias(data)
  })
  .catch((err)=>{
    console.log(err);
  });
});

const gerarCategorias = (categorias) =>{
  const select = document.getElementById('select')
  categorias.map((categoria)=>{
    const opinions = document.createElement('option')
    opinions.innerHTML = categoria
    opinions.value = categoria
    opinions.id = categoria
    select.appendChild(opinions)
  })
}

const btnEnviar = document.getElementById("btnEnviar")
btnEnviar.addEventListener("click", async () => {
  const select = document.getElementById("select").value;
  const url = `https://api.chucknorris.io/jokes/random?categiry=${select}`;

  await fetch(url)
  //1º -> Verifica a resposta
  .then((response)=>{
    if(!response.ok){
      throw new Error("Erro ao buscar piada com categoria")
    }
    return response.json()
  })
  //2º -> Pega a resposta e manda para uma função
  .then((data)=>{
    gerarPiada(data)
  })
  //3º -> Mostra o erro caso os dados não sejam recebidos
  .catch((err)=>console.log(err));
})

const gerarPiada = (data)=>{
  const piada = document.querySelector("#joke")
  piada.textContent = data.value
}
