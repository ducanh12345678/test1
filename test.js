   function number(N){
    if(N < 100000, N++)
    console.log(N)
   }
   
   
   var num = prompt("Nhập vàomột số cần kiểm tra có chia hết cho 3 và 2 hay không")
            num = parseInt(num);
            
            if (num % 3 == 0, num % 2 == 0){
                console.log("true")
            }
            else{
                console.log("false")
            }
