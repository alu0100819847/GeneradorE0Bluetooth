function copia(){
  var copy = $("table[id=Ejemplo] td");
  var html = $("table[id=introDatos] td");
  for(var i = 0; i < copy.length; i++) {
    html[i].children[0].value = copy[i].textContent;
  }
}

function clean(){
  var html = $("table[id=introDatos] td");
  var output = $("table[id=outDatos] td");
  for(var i = 0; i < html.length; i++) {
    html[i].children[0].value = "";
    output[i].children[0].innerHTML = "";
  }
}

function drawExample(){
  var example = [
                  ["Key 1: ", "Key 2: ", "Key 3: ", "Key 4: ", "Semilla R1: ", "Bits de salida: "],
                  ["1111111111111111111111110", "1111111111111111111111111111110", "111111111111111111111111111111110", "0101010101010101010101010101010101010101", "	01", "4"]
                ];


}

//$("ul[id = Menu] li:last").after('<li class="active"><a href="'+entrada+'">'+text+'</a></li>');
