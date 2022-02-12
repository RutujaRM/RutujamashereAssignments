// program to count the number of vowels in a string

   var a=prompt("Enter a string:")         //take a input or string from user
    var array=a.split("");                //here converting string into array

    console.log(a);                     //print the enter string
    console.log(array);                 //show string into array

    var counter=0;                    //intialize a counter

      
       for(var i=0; i<array.length; i++)                    //to check all the elments in array to find vowels
          {
             switch(array[i])                               //to compare each letter with vowels cases if its match then counter increment
                              {
                                case'a':
                                case'A':
                                        counter=counter+1;
                                         break;

                                case'e':
                                case'E':
                                        counter=counter+1;
                                         break;

                                case'i':
                                case'I':
                                        counter=counter+1;
                                         break;

                                 case'o':
                                case'O':
                                        counter=counter+1;
                                         break;

                                case'u':
                                case'U':
                                        counter=counter+1;
                                         break;
                              }
            }

                alert (" Total Vowels in the given string is:- "+counter)               //printing counted vowels

                               









