function changeMe(arr) {
    // you can only write your code here!
    result = {}
    if (arr!==undefined){

        for (var i=0; i<arr.length; i++){
    
            result['firstName'] = arr[i][0]
            result['lastName'] = arr[i][1]
            result['gender'] = arr[i][2]
    
            result['age'] = arr[i][3]
            
            if (result['age']===undefined || result['age']>2019){
                result['age'] = 'Invalid Birth Year'
            }else {
                result['age'] = Math.abs(arr[i][3]-2019)
            }
    
            console.log(i+1+'. '+result.firstName+' '+ result.lastName+': \n' ,result)
        }
    }else {
        result = 'ini kosong'
        console.log(result)
    }
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""