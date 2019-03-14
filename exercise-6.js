function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  
  temp = ''
  arr=[]
  for (var i=0; i<=angka; i++){
      for (var j=0; j<=angka; j++){
          if ((i*j)===angka){
            temp += i +'x' +j 
            
            arr.push(temp.length-1)
            temp= ''
           
        }
    }
}
min = arr[0]
for (var i=1;i<arr.length; i++){
    if (min>arr[i]){
        min = arr[i]
    }
}
return min
// return hasil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2