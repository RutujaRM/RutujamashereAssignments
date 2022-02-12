

//Assignment1:-
//  Take a input from the user. It has to be dynamic. I can enter 3 number as well as 30 numbers.
  //It should give me the maximum of all of them. We will be using array as the underlying
  //data structure.

    



     var s=prompt("Enter the length of the array")       //take input from user
     var arr=[];                                         //take a empty array


     if(isNaN(s))                                                //so its take only integer values
              {
                alert("please enter a valid value or length")
              }
     else
     {
            for(i=0; i<s; i++)
              {
                arr.push(prompt("Enter the values:"))
              }
              
                 var max=arr[0];
                 for(i=0; i<s; i++)
                 {
                    if(arr[i]>max)
                    {
                       max=arr[i];
                    }
                 }
          alert(max+" greatest number")
       console.log(max+"    is Maximum value in the array ")
   }



