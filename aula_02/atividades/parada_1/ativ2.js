let segundos = Number(prompt('Digite um número'));

const converte = (seg) => {
    let horas = Math.floor(segundos / 3600);
    
    let segundosRestantes = segundos % 3600;
    
    let minutos = Math.floor(segundosRestantes / 60);
    
    let segundosFinal = segundosRestantes % 60;
    
    console.log(`${segundos} segundos são equivalentes a ${horas} horas, ${minutos} minutos e ${segundosFinal} segundos`);
}
converte(segundos);
