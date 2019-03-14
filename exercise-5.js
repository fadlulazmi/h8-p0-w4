function ubahHuruf(kata) {
    // you can only write your code here!
    var library ='abcdefghijklmnopqrstuvwxyz'
    var str = ''
    for (var i=0; i<kata.length; i++ ){
        temp = ''
        for (var j=0; j<library.length; j++){
            if (kata[i]===library[j]){
                if (library[j]==='z'){
                    temp += 'a' 
                   
                } else {
                    temp += library[j+1]
                }
               

            


                // console.log(" ===> ",kata[i], library[j+1])
                
            }
        }
        str += temp
    }
    return str
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu