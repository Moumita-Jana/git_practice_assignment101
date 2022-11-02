function CheckPrime(num){
    let count=0;

    for(let i=1;i<=num;i++){
   if(num%i==0){
   count++;

  return true;

}


   return false;
}

  let ans=CheckPrime(17);
   if(ans==true){

console.log("Prime");

}else{

console.log("Not Prime");
}