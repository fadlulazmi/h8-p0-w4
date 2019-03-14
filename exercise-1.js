function angkaPrima(angka) {
    var result = false
    if (angka%angka===0 && angka%2!==0 ){
        result = true   
        if (angka !== 3 && angka%3 === 0){
            result = false
        }
    }

    
    return result
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false