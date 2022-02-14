/* use the object created in class.Take a number from the user input and return a list.(do this in console.log) of all the studentss who have secored equal to or more ehan those marks.
*/
var obj = {
    "first_name" : "rutuja",
    "last_name" : "Mashere",
    "email" : "rutujamashere@gmail.com",
     "roll_no." : "96",
     "students" : [ 
	{
	  "name" : "aarav",
	  "marks" : 155
	},
	{
	  "name" : "usha",
	  "marks" : 179
	},
	{
	  "name" : "rahul",
	  "marks" : 19
	},
	{
	  "name" : "ayush",
	  "marks" : 218
	},
	{
	  "name" : "tanay",
	  "marks" : 1
	},
	{
	  "name" : "kishor",
	  "marks" : 270
	},
	
        ]
}

var ip = prompt("Enter marks")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}