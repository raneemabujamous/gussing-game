let yourName = prompt("hello Iam raneem nice to meet you .. what's your name?").toLowerCase() ;
alert("hello " + yourName + " iam very happy to meet you " );
//console.log("hello",yourName);
 let conf = confirm("let us playing guss ?");

if (conf == true){ 
    let personal= prompt("do you think Iam 22 old? please answer ('y'for yes 'n' for no)");
    alert("I am 22 years old ");
    //console.log("I am 22 years old");
let hobbies = prompt("do you think i have a hobbies? please answer ('y'for yes 'n' for no)")
alert("it's not hobby exactly but i love sport and i wish travel around the world ")
//console.log("it's not hobby exactly but i love sport and i wish travel around the world")
let food = prompt ("do you think i love food? please answer ('y'for yes 'n' for no)")
alert("ohhhhhh so much")
//console.log("ohhhhhh so much")
let meet = prompt("do you think i am very happy to meet you ? please answer ('y'for yes 'n' for no)")
alert("ohh yes sure  you make my day ")
//console.log("ohh yes sure  you make my day")
}else{
    alert("you are very boring ");
}

 
let choose = prompt ("Choose a number ( 1 , 2 ,3 ) to give you advice ")
while (choose != '1' && choose != '2' && choose != '3'){
    choose =  prompt ("Choose a number ( 1 , 2 ,3 )") ;
};

switch(choose) {

    case  "1" :
    alert("However difficult life may seem, there is always something you can do and succeed at");
   break;

   case "2" :
   alert("You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way");
   break;

   case "3" :
   alert("“Genius is one percent inspiration, ninety-nine percent perspiration");
   break;


}
