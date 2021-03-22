//Global QuotesCollection Array to store API response
//Accessible accross functions
let QuotesCollection = [];

/** 
 * function:: getQuotesFromAPI
 * Use:: To Call API and get Quotes to display them on UI
 * Author:: Ashish
 **/ 
async function getQuotesFromAPI() {
    const apiUrl = 'https://type.fit/api/quotes';
    //Using Type fit API for Inspirational Quotes
    try {
        const response = await fetch(apiUrl);
        //Storing the response in an Array
        //Converting response stream to json 
        QuotesCollection = await response.json();
        //Quotes fetched and stored
        showQuotes();
    }
    catch (error){

    }
}
function showQuotes(){
    //Generate Random Number bw 0 to 1600
    var Quote = QuotesCollection[Math.floor((Math.random() * QuotesCollection.length))];
    document.getElementById("quote").innerHTML = Quote.text;
    document.getElementById("author").innerHTML = Quote.author;
}

//On Load
getQuotesFromAPI();