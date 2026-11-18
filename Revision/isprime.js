let num=prompt("enter you number:");
let count=0;
for(let i=1;i<num/2+1;i++){
    if(num%i==0){
        count++;
    }
}
if(count>1){
    alert("number is not prime");
}
else{
    alert("number is prime");
}