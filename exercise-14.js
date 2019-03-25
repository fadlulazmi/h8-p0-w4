function naikAngkot(arrPenumpang) {
    //your code here
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var counter = 0
    var result = []
    var flag = false

    for (var i = 0; i<arrPenumpang.length; i++){
        var obj = {}
        // console.log(arrPenumpang[i]);
        
        
    
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]


        var start = obj.naikDari
        var finish = obj.tujuan
        var awal = 0
        var akhir = 0

        

            for (var j=0; j<rute.length; j++){
                if (start === rute[j]){
                    awal = j
                }
                if (finish === rute[j]){
                    akhir = j
                }
            }
            counter = Math.abs(awal-akhir)
            
            obj.bayar = 2000 * counter
         

        
        result.push(obj)
        counter = 0
    }
    
    
    
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'E', 'B'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]