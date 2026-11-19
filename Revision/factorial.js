let num=prompt("enter your num:");
if(num==0||num==1){
    alert("factorial is 1");
}
else{
    let ans=1;
    while(num>1){
        ans*=num;
        num--;
    }
    alert("factorial is " + ans);
}