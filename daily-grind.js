// alert("Its working");
/*

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

Here are the items we need top change for each coffee

image - src of the pic
alt - alt tag of the pic 
desc - a paragraph of conten about the coffee 
name - a name of todays coffee
color - a color representing the coffee

We may also use the following but not part of the coffee itself

today - current day of the week

*/ 

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `      <p>
    <img src="${coffee.img}" alt="${coffee.alt}" id="coffee" />
   <strong class="feature">${coffee.day}'s Coffee Special:</strong> 
   ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc} </p>
    `;



    return myReturn;
}


let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";



//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//data on query string, load from querystring
    myDay = urlParams.get("day"); 
} 
//converts a string into int 
myDay = parseInt(myDay); 

switch (myDay) {

    case 0: 
        today = "Sunday";

        coffee = {

            color: "gold",
            name: "Caramel latte",
            img: "images/caramel-latte.jpg",
            alt: "a pic of a caramel latte",
            day: "sunday",
            desc: `Enjoy a caramel latte iced, hot or blended! Ask for this caramel delight and enjoy the sweet notes of caramel
            blend with the earthy and darker flavor of our fair trade, dark roast espresso`
        }
    break;

    case 2: 
        today = "Tuesday";

        coffee = {

            color: "black",
            name: "Drip",
            img: "images/drip.jpg",
            alt: "a pic of drip coffee",
            day: "tuesday",
            desc: `Enjoy a classic cup o' coffee with your favorite flavoured creamer or leave it as is and take in the floral notes of 
            our Ugandan roast.`
        }
    break; 

    case 3: 
        today = "Wednesday";

        coffee = {
            color: "pink",
            name: "Bubble tea",
            img: "images/bubble-tea.jpg",
            alt: "a pic of bubble tea",
            day: "wednesday",
            desc: `Lets mix it up and enjoy bubble tea! A popular east asian beverage everyone can enjoy and customize with boba or jelly!`
        };
    break;

    case 4: 
    today = "Thursday";

    coffee = {
        color: "brown",
        name: "Mocha",
        img: "images/mocha.jpg",
        alt: "A pic of mocha",
        day: "Thursday",
        desc: `Adults don't usually drink chocolate milk, but we all deserve some chocolate so enjoy our Ghana-Mocha hot or iced`
    };
    break;

    case 5: 
today = "Friday";

    coffee = {

        color: "blue",
        name: "Frappaccino",
        img: "images/frappaccino.jpg",
        alt: "a pic of a frap",
        day: "friday",
        desc: `Chill out this Friday with a signature frap. Chose your flavor and enjoy a delicious and icy coffee drink.`
    }
    break;

    case 6: 
today = "Saturday";

    coffee = {

        color: "orange",
        name: "Pumpkin Spice Latte",
        img: "images/pumpkin-spice-latte.jpg",
        alt: "a pic of a PSL",
        day: "saturday",
        desc: `A seasonal favorite now available all year long, try the PSL and get on the bandwagon, we're getting PSLs!`
    }
    break;

    case 1: 
today = "Monday";

    coffee = {

        color: "brown",
        name: "Cold Brew",
        img: "images/cold-brew.jpg",
        alt: "a pic of cold brew",
        day: "monday",
        desc: `Mondays are tough. Chug this cold brew and feel the energy make it almost bareable, maybe even yummy!`
    }
    break

    default: 
        today = "Something went wrong";

}

// alert(today); 

// coffeeData = coffeeTemplate(coffee);
// alert(coffeeData);


//load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);
