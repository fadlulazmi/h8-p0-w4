function cariMedian(arr) {
    // you can only write your code here!
    var posisi1 = 0
    var posisi2 = 0
    var result = 0
    for (var i=0; i<arr.length; i++){
        var posisi = 0
        if (arr.length%2===0){
            posisi = (arr.length+1)/2
            posisi1= Math.floor(posisi)
            // console.log(posisi1)
            posisi2= Math.ceil(posisi)
            // console.log(posisi2)
            result = (arr[posisi1-1]+arr[posisi2-1])/2
            
        }
        else if (arr.length%2!==0){
            posisi = (arr.length+1)/2
            result = arr[posisi-1]
        }
    }
    return result
    

    


  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5