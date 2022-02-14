//programme enter number is prime or not 



// here we get first the factors of the numbers

  var n=prompt("Enter the number");                //take input from user
  var n=parseInt(n);                               //converting string to number data type
 
   
    if(isNaN (n))                                  //check the given input is number or not

        { 
          alert("please Enter a valid number")
        }

     else
     {
            var count=0;                     //counter intialize

         for (var i=1 ;i<=n; i++)
           {
        	if(n%i==0)                     //when the number having remainder 0 that means divide number factor of that   primes logic
      		{
          		count=count+1;               // count the factors of number 
  
      		}
    	   }
     }
     console.log( count+"  its count or factors");

  if(count==2)                         //when the number having only 2 factors that means its prime number
      {
         alert(n+"    Its prime number")

      }

  else
      {
          alert(n+"    Its not prime number")
       }



 