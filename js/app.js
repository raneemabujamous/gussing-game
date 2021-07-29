let score = 0
alert("its time for fun let's play gussing game")
let yourName = prompt("hello Iam raneem nice to meet you .. what's your name?").toLowerCase();
alert("hello " + yourName + " nice to meet you ");
//console.log("hello",yourName);
let conf = confirm("let us playing guss ?");

if (conf == true) {
    function age() {
        let personal = prompt("do you think Iam 22 old? please answer ('y' or yes 'n' or no)");

        while (personal.toLocaleLowerCase() !== "y" && personal.toLocaleLowerCase() !== "n" && personal.toLocaleLowerCase()!== "yes" && personal.toLocaleLowerCase() !== "no") {
            personal = prompt("do you think Iam 22 old? please answer ('y' for yes 'n' for no)");
        }
        if (personal.toLocaleLowerCase() == 'y' ||  personal.toLocaleLowerCase() == 'yes') {
            score = score + 1
            alert("correct answer")
        } else {
            score = score
            alert("wrong answer yes iam 22 ")
        }
        return personal;
    }
    age()
    //console.log("I am 22 years old");
    function myHobbies() {
        let hobbies = prompt("do you think i have a hobbies? please answer ('y'or yes 'n'or no)")
        console.log(hobbies.toLocaleLowerCase())
        while (hobbies.toLocaleLowerCase() !== "y" && hobbies.toLocaleLowerCase() !== "n"  && hobbies.toLocaleLowerCase()!== "yes" && hobbies.toLocaleLowerCase() !== "no") {
            hobbies = prompt("do you think i have a hobbies? please answer ('y'or yes 'n' or no)");
        }
        if (hobbies == 'y' || hobbies.toLocaleLowerCase() == 'yes') {
            score = score + 1
            alert("correct answer")

        } else {
            score = score
            alert("wrong answer yes ihave hobbies")

        }
        return hobbies;
    }
    myHobbies();

    //console.log("it's not hobby exactly but i love sport and i wish travel around the world")

    function loveFood() {
        let food = prompt("do you think i love food? please answer ('y'or yes 'n' or no)")
        while (food.toLocaleLowerCase() !== "y" && food.toLocaleLowerCase() !== "n"  && food.toLocaleLowerCase()!== "yes" && food.toLocaleLowerCase() !== "no") {
            food = prompt("do you think i love food? please answer ('y'or yes 'n'for no)");
        }
        if (food == 'y' || food.toLocaleLowerCase() == 'yes') {
            score = score + 1
            alert("correct answer")

        } else {
            score = score
            alert("wrong answer yes i love food")

        }
        //console.log("ohhhhhh so much")
        return food;
    }
    loveFood();
    function niceMeet() {
        let meet = prompt("do you think i am very happy to meet you ? please answer ('y'or yes 'n' or no)")
        while (meet.toLocaleLowerCase() !== "y" && meet.toLocaleLowerCase() !== "n"  && meet.toLocaleLowerCase()!== "yes" && meet.toLocaleLowerCase() !== "no") {
            meet = prompt("do you think i am very happy to meet you ? please answer ('y'or yes 'n' or no)");
        }
        if (meet == 'y'|| meet.toLocaleLowerCase() == 'yes') {
            score = score + 1
            alert("correct answer")

        } else {
            score = score
            alert("wrong answer iam happy to meet you")

        }
        //console.log("ohh yes sure  you make my day")
        return meet
    }
    niceMeet();

    function guss() {
        let gussNum = prompt(" guss the number in my mind ")

        for (let i = 1; i <= 4; i++) {
            if (gussNum == 12) {
                alert("yes the num is 12")
                score = score + 1
                i = 4
                break;
            } else {
                if (gussNum < 12) {
                    alert("too low")
                    gussNum = prompt("now its time to playing guss the number in my mind ")
                } else {
                    alert("too hight")
                    gussNum = prompt("now its time to playing guss the number in my mind ")
                }

            }
            if (i == 4) {
                alert("the answer is wrong the right one is 12")
                break;
            }

        }
        return gussNum;
    }
    guss();

    function travel() {
        let gusscountry = prompt("guss my My favorite place to travel؟")
        let place = ["maldives", "Germany", "Indonesia", "Italy"]
        for (let i = 1; i < 6; i++) {
            if (gusscountry == place[0] || gusscountry == place[1] || gusscountry == place[2] || gusscountry == place[3]) {
                alert("yes the " + gusscountry + " is my favorite country")
                score = score + 1
                i = 6
                break;
            } else {
                gusscountry = prompt("guss my My favorite place to travel؟")
            }
        }
        return gusscountry
    }
    travel();
} else {
    alert("playing with me my  friend ")
}
//console.log(score +" 1-22 ,2-yes i have hobbies ,3-i love food ,4- yes nice to meet you ,5- 12 , 6-maldives,Germany ,Indonesia, Italy" )
alert(yourName + " your score is " + score + " the right answer 1-22 ,2-yes i have hobbies ,3-i love food ,4- yes nice to meet you ,5- 12 , 6-maldives,Germany ,Indonesia, Italy")


let choose = prompt("Choose a number ( 1 , 2 ,3 ) to give you advice ")
while (choose != '1' && choose != '2' && choose != '3') {
    choose = prompt("Choose a number ( 1 , 2 ,3 ) to give you advice");
};

switch (choose) {

    case "1":
        alert("However difficult life may seem, there is always something you can do and succeed at");
        break;

    case "2":
        alert("You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way");
        break;

    case "3":
        alert("“Genius is one percent inspiration, ninety-nine percent perspiration");
        break;


}
alert(yourName + " your score is " + score + " the right answer 1-22 ,2-yes i have hobbies ,3-i love food ,4- yes nice to meet you ,5- 12 , 6-maldives,Germany ,Indonesia, Italy")
