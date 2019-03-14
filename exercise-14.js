function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []

    
    for (var i=0; i<arrPenumpang.length; i++){
        var obj = {
            penumpang : '',
            naikDari : '',
            tujuan : '',
            bayar : 0
        }
        
        var count = 0
        
        var flag = false
        var jumlahbayar = 0


        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        for (var j=0; j<rute.length; j++){
    
            if (obj.naikDari===rute[j]){
                flag = true
            }
            if (obj.tujuan===rute[j]){
                flag = false
            }
            if (flag===true){
                count += 1
                // console.log(count)
            }
            jumlahbayar=count*2000
        }
        obj.bayar=jumlahbayar
        
        result.push (obj)
    }
    return result
    

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]