function horario() {
  // elementos
  let horas = document.getElementById('horas')
  let img = document.getElementById('img')

  // get info
  const data = new Date()
  let horaAtual = data.getHours()
  let min = data.getMinutes()

  // madrugada
  if (horaAtual >= 0 && horaAtual <= 4) {
    horas.innerHTML = `Agora são <strong>${horaAtual}:${min}</strong> horas da madrugada`
    img.src = 'img/noite.jpg'
    document.body.style.background = '#424242'
    // manhã
  } else if (horaAtual < 12) {
    horas.innerHTML = `Agora são <strong>${horaAtual}:${min}</strong> horas da manhã`
    // tarde
  } else if (horaAtual < 18) {
    horas.innerHTML = `Agora são <strong>${horaAtual}:${min}</strong> horas da tarde`
    img.src = 'img/tarde.jpg'
    document.body.style.background = '#f57c00'
    // noite
  } else {
    horas.innerHTML = `Agora são <strong>${horaAtual}:${min}</strong> horas da noite`
    img.src = 'img/noite.jpg'
    document.body.style.background = '#37474f'
  }
  // erro
  if (horaAtual >= 24) {
    alert('[ERRO] HORÁRIO INÁLIDO')
  }
}
