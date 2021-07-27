let score =0
alert ("its time for fun let's play gussing game")
let yourName = prompt("hello Iam raneem nice to meet you .. what's your name?").toLowerCase() ;
alert("hello " + yourName + " nice to meet you " );
//console.log("hello",yourName);
 let conf = confirm("let us playing guss ?");

if (conf == true){ 
    let personal= prompt("do you think Iam 22 old? please answer ('y' for yes 'n' for no)");
    while (personal.toLocaleLowerCase() !== "y" && personal.toLocaleLowerCase() !== "n" &&  !personal ){
        personal= prompt("do you think Iam 22 old? please answer ('y' for yes 'n' for no)");
    }
    if(personal == 'y'){
        score = score+1
    }else{
       score = score
    }
    alert("I am 22 years old ");
    //console.log("I am 22 years old");
let hobbies = prompt("do you think i have a hobbies? please answer ('y'for yes 'n' for no)")
while(hobbies.toLocaleLowerCase() !== "y" && hobbies.toLocaleLowerCase() !== "n" &&  !hobbies){
    hobbies= prompt("do you think i have a hobbies? please answer ('y'for yes 'n' for no)");
}
if(hobbies == 'y'){
    score = score+1
}else{
   score = score
}
alert("it's not hobby exactly but i love sport and i wish travel around the world ")
//console.log("it's not hobby exactly but i love sport and i wish travel around the world")
let food = prompt ("do you think i love food? please answer ('y'for yes 'n' for no)")
while(food !== "y" && food !== "n" &&  !food){
    food= prompt("do you think i love food? please answer ('y'for yes 'n' for no)").toLocaleLowerCase();
}
if(food == 'y'){
    score = score+1
}else{
   score = score
}
alert("ohhhhhh so much")
//console.log("ohhhhhh so much")
let meet = prompt("do you think i am very happy to meet you ? please answer ('y'for yes 'n' for no)")
while(meet != "y" && meet != "n" &&  !meet){
    meet= prompt("do you think i am very happy to meet you ? please answer ('y'for yes 'n' for no)").toLocaleLowerCase();
}
if(meet == 'y'){
    score = score+1
}else{
   score = score
}
alert("ohh yes sure  you make my day ")
//console.log("ohh yes sure  you make my day")


let gussNum= prompt(" guss the number in my mind ") 

for (let i = 1 ; i<4 ; i++){
if (gussNum == 12){
    alert("yes the num is 12")
    score = score + 1
    i = 4
    break;
}else{
    if(gussNum<12){
        alert("too low")
        gussNum = prompt("now its time to playing guss the number in my mind ")
    }else{
        alert("too hight")
        gussNum = prompt("now its time to playing guss the number in my mind ")
    }
}
    
}
console.log(score)
 let gusscountry = prompt("guss my My favorite place to travel؟")
 let place = ["maldives","Germany" ,"Indonesia", "Italy" ]
 for (let i = 1 ; i<6 ; i++){
    if (gusscountry == place[0] || gusscountry == place[1] || gusscountry == place[2] || gusscountry == place[3]){
        alert("yes the "+ gusscountry + " is my favorite country")
        score = score + 1
        i = 6
        break;
    }else{
        gusscountry = prompt("guss my My favorite place to travel؟")
        }
    }
}else{
    alert("playing with me my  friend ")
}
    console.log(score)
alert("your score is" + score )


let choose = prompt ("Choose a number ( 1 , 2 ,3 ) to give you advice ")
while (choose != '1' && choose != '2' && choose != '3'){
    choose =  prompt ("Choose a number ( 1 , 2 ,3 ) to give you advice") ;
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