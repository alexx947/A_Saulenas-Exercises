function removeDuplicate(number) {
    var x,
        len=number.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[number[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Mynumber = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicate(Mynumber);
  console.log(Mynumber);
  console.log(result);