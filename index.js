

function randomQuote(){
    let quotes = ["'Love is not just a verb, its you looking in the mirror.' – Kendrick Lamar",
    "'Life without dreaming is a life without meaning.' – Wale",
    "'Cause whatever you love can be taken away, so live like its your dying day.' – Machine Gun Kelly",
    "'Living well eliminates the need for revenge.' – Kanye West",
    "'You gotta be able to smile through the bullshit.' – Tupac",
    "'Life is a wheel of fortune and its my turn to spin it.' – Tupac","'Life is too short to live the same day twice. So each new day make sure you live your life.' – Machine Gun Kelly",
    "'Reality is wrong. Dreams are for real.' – Tupac",
    "'I like when money makes a difference but dont make you different.'– Drake",
    "'You have to keep your vision clear, cause only a coward lives in fear.' – Nas",
    "'You can make something of your life, it just depends on your drive.' – Eminem",
    "'God will take you through hell, just to get to heaven.' – T.I","'Regardless of how it goes down, life goes on.' – Rick Ross"];
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuotes;
}
console.log(randomQuote());

let btn = document.querySelector(".randomQuoteBtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function(){
    quote.innerHTML = randomQuote();
})


