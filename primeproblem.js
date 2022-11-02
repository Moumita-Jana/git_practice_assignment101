function CheckPrime(num){
    
	let factor = 0	;
	for(var i=1;i<=num;i++){
	if(num%i==0){
  	factor++;
	}
}
if( factor ==2){

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

}  
 

