function range(start, end, step){
  var array = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    array = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      array.push(i);
    }
  }
  return array;
}
