function cariModus(arr) {
    // you can only write your code here!
    var result = []
    for (var i=0;i<arr.length; i++){
        var flag = false
        var arr1 = []
        for (var j=0; j<result.length;j++){
            if (arr[i]===result[j][0]){
                flag = true
                
                result[j][1] +=  1
            }
        }

        if (flag===false){
            arr1.push(arr[i],1)
            result.push(arr1)
        }
        
    }
    // console.log('ini result: ' , result)
    max = result[0][1]
    var value = result [0][0]
    for (var i=1; i<result.length; i++){
        
        if (result[i][1]>max){
            max = result[i][1]
            value = result[i][0]

            // hasil = max[0]
            
        }
        
        
    }
    // console.log(max)
    var hasil = value
    if (max===1){
        hasil = -1
    }
    if (result.length===1){
        hasil = -1
    }

    // console.log(max)

    return hasil
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1