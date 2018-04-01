
function Generador(){
  var r = [];
  var n = 0;
  var sol = "";
  var r1 = "";
  var r2 = "";
  var t1 = "";
  var t2 = "";
  var salida = "";
  r[0] = key1.value;
  r[1] = key2.value;
  r[2] = key3.value;
  r[3] = key4.value;
  n = nb.value;
  r1 = "" + sR1.value;
  ek1.innerHTML = r[0];
  ek2.innerHTML = r[1];
  ek3.innerHTML = r[2];
  ek4.innerHTML = r[3];
  enb.innerHTML = n;
  eR1.innerHTML= r1;
  for(var j = 0; j < n; j++) {
    console.log("R10 -> "+ r1);
    console.log("Salida -> " + salida);
    var s = [];
    for(var i = 0; i < 4; i++) {
      s[i] = strtobin[r[i][0]];
      r[i] = LSFR(i, r[i]);
      console.log("Sale: "+s[i])
      console.log("Queda: "+r[i]);
    }
    console.log(s);
    sol = suma(s);
    sol = sol + parseInt(boxR(r1), 2);
    salida ="" + gxor(group(s, boxR(r1)[1])) + salida;
    r2 = boxR(r1);
    t1 = boxR(r1);
    t2 = boxR(r2);
    /*
    console.log("Entrada r1 -> "+r1);
    console.log("Salida r1 -> "+boxR(r1));
    console.log("Entrada r2 -> "+r2);
    console.log("Salida r2 -> "+boxR(r2));
    console.log("Entrada t1 -> "+t1);
    console.log("Salida t1 -> "+ft1(t1));
    console.log("Entrada t2 -> "+t2);
    console.log("Salida t2 -> "+ft2(t2));
    console.log("sol -> "+sol);
    */
    sol = mod2(sol.toString(2));
    sol = txor(sol, ft2(t2));
    sol = txor(sol, ft1(t1));

    r1 = sol;
  }
  esal.innerHTML = salida;
  console.log("Salida -> " + salida);
}

function LSFR(registro, key) {
  var sum = 0;
  for(var i = 0; i < Registros[Registros[registro]].length; i++){
    sum = xor(sum, key[Registros[Registros[registro]][i]])
  }
  return realimentar(sum, key);
}

function realimentar(sum, key) {
  var str = "";
  for(var i = 1; i < key.length; i++) {
    str = "" + str + key[i];
  }
  str = "" + str + sum;
  return str;
}
function ft1(c) {
  return c;
}

function ft2(c) {
  var s = [];

  s[0] = c[1];
  s[1] = xor(c[0], c[1]);
  return s;
}
function txor(a, b){
  var sol = "";
  if(a.length == b.length) {
    for (var i = 0; i < a.length; i++) {
      if(a[i] == b[i]) sol = sol + "0";
      else sol = sol + "1";
    }
  } else {
    console.log("Xor con elementos de distinto tamaño");
  }
  return sol;
}

function xor(a, b) {
  if(a == b) return 0
  else return 1;
}

function gxor(a) {
  sol = 0;
  for( var i = 0; i < a.length; i++ ){
    sol = xor(sol, a[i]);
  }
  return sol;
}
function suma(v) {
  var s = 0;
  for(var i=0; i< v.length; i++) {
    s = v[i] + s
  }
  return s;
}

function mod2(bin) {
  return ""+bin[0]+bin[1];
}

function boxR(bin) {
  return "" + bin[1] + bin[0];
}

function group(a, b) {
  var sol = "";
  for(var i = 0; i < a.length ; i++){
    sol = "" + a[i] + sol;
  }
  sol ="" + b + sol;
  console.log("Group -> "+sol);
  return sol;
}
