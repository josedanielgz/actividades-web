function getValue(elt){
    //https://johnresig.com/blog/html-5-data-attributes/
    //https://weeklyhow.com/jquery-getjson-function/

//Interesante, castear este objeto como un JSON no funciona,
//Pero con JQuery puedo acceder a sus propiedades sin problema
//A través de las pseudo-keys.
  var a = $(elt).data("json");
let cardForm = document.getElementById("card");
cardForm.value = a.nombre;
cardForm.setAttribute("data-id",a.id);
}


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
    
  }

  //Recordatorio: esto está mejor explicado en el archivo partidos.html de la actv2

  readTextFile("js/data.json", function (text) {

    var mazo = JSON.parse(text).cartas;
    
    var atributos = Object.keys(mazo[0]);

    var output = document.getElementById("tabla");

    mazo.forEach(function (item) {
      var row = document.createElement("tr");

      for (i = 0; i < atributos.length; i++) {
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(item[atributos[i]]));
        row.appendChild(cell);
      }

      output.appendChild(row);
    });
  });
