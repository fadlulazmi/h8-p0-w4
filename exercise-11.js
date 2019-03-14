function shoppingTime(memberId, money) {
    // you can only write your code here!
    var result={}
    var resultArr=[]
    var temp = ''

    var listItemArr= [['sepatu Stacattu', 1500000], ['baju Zoro',500000], ['baju H&N',250000], ['sweater Uniklooh',175000], ['casing Handphone',50000]]
//-----------------------------------------------------------------

    if (memberId !== undefined && memberId !=='' && money>50000 ){
        result['memberId']=memberId
        result['money']=money
        var changeMoney = money
        for (var i = 0; i<listItemArr.length;i++){
            if (changeMoney>=listItemArr[i][1]){
                changeMoney=changeMoney-listItemArr[i][1]
                temp += listItemArr[i][0]
                resultArr.push( temp )
                temp = ''
            }

        }
        result['listPurchased']=resultArr    
        result['changeMoney']=changeMoney
    } 
    else if (memberId !== undefined && memberId !=='' && money<50000){
        result = 'Mohon maaf, uang tidak cukup'
    } 
    else if (memberId === undefined || memberId ==='' ){
        result = 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    
//-----------------------------------------------------------------
    return result
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja