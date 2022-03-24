
    var n=0;
    var S =0;
    while(S<10000){
        n++;
        S = S+n;
    }
    document.getElementById("bai__1").innerHTML  = n;

    document.getElementById("btnClick").onclick =function(){
       var x= document.getElementById("txtx").value*1;
        var n= document.getElementById("txtn").value*1;
        var result=0;
        var i =1;
        while(i<=n){
            var y =Math.pow(x,i++);
            result +=y;
        }
         document.getElementById("bai__2").innerHTML = result;

    }

    document.getElementById("btnClickGT").onclick =function(){

   var n= document.getElementById('txtGT').value*1;
   var gt =1;
   var i=1;
do{
    
    gt *= i;
    i++;

}while(i<=n)

document.getElementById("bai__3").innerHTML = gt;
   
}
document.getElementById("btn__div").onclick =function(){
    var i =0;
    var html= "";
   
    
    for(var i=0; i<=10; i++){
        if(i%2==!0){
            html+=  `<div class='btn btn-danger'>Div lẻ ${i}</div>`;
        }else{
            html+=  `<div class='btn btn-success'>Div chẵn${i} </div>`;
        }
    }
    document.getElementById("tao__div").innerHTML =html;
}
// console.log(n);
// console.log(S);
// var x=2;
// var n=5;
// var result=0;
// while(i<=n){
//   var y = Math.pow(x,i++);
//     result+= y;

// }
// for(var i=1 ;i<=n;)
// {
//     var y = Math.pow(x,i++);
//     result += y;
// }
// console.log(result);
// var i=1;
// do{
//     var y = Math.pow(x,i++);
//     console.log(i);
//     result +=y;
// }while(i<=n)
// console.log(result);
// console.log(i);