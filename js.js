document.getElementById("przyciskk").addEventListener("click", konwersja)

function konwersja(){
    const liczba = parseFloat(document.getElementById("zmieniana").value)
    const typ = document.getElementById("typ").value
    let wynik = ""

switch(typ) {
    case 'kilometry_na_mile':
      wynik = (liczba * 0.621371).toFixed(2) + ' mil'
      break
    case 'mile_na_kilometry':
      wynik = (liczba / 0.621371).toFixed(2) + ' km'
      break
    case 'kilogramy_na_funty':
      wynik = (liczba * 2.20462).toFixed(2) + ' lbs'
      break
    case 'funty_na_kilogramy':
      wynik = (liczba / 2.20462).toFixed(2) + ' kg'
      break
    case 'c_na_f':
      wynik = ((liczba * 9/5) + 32).toFixed(2) + ' °F'
      break
    case 'f_na_c':
      wynik = ((liczba - 32) * 5/9).toFixed(2) + ' °C'
      break
}
document.getElementById("wynik").innerText = wynik
const zdj = document.createElement("img")
zdj.src= "/papier_z_nieba.gif"
document.body.prepend(zdj)

setTimeout(usun,3000)

function usun(){
  document.body.removeChild(zdj)
}
}

