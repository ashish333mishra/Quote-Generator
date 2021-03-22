//Global QuotesCollection Array to store API response
//Accessible accross functions
let QuotesCollection = [];
let Quote;
const quoteContainer = document.getElementById("quote");
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
/**
 * function:: ShowQuotes
 * Use:: To access DOM Element and show Quotes and there Auothor Name
 * Author:: Ashish
 */
function showQuotes(){
    //Generate Random Number bw 0 to 1600
    Quote = QuotesCollection[Math.floor((Math.random() * QuotesCollection.length))];
    //If Quote is fetched then show Quote else Alert User
    if (Quote.text) {
        //Remove the loader to show Quotes
        removeLoader();
        if( Quote.text.length > 35 ) {
            //Change font size for Responsiveness on Mobile Devices
            quoteContainer.classList.add('long-quote-text');
        }
        //Add the Quote to UI
        quoteContainer.innerHTML = Quote.text;
        //Add the Author Name to UI
        if (Quote.author)
            document.getElementById("author").innerHTML = Quote.author;
        else
        document.getElementById("author").innerHTML = 'Unknown!';
    }
    else {
        alert("Unable to fetch Quotes from API!");
        console.log(Quote);
    }
}
/**
 * function:: TweetQuote
 * Use:: To tweet the Quote
 * Author:: Ashish
 */
function TweetQuote(){
    //Using Twitter API to tweet Quotes
    const TwitterUrl = `https://twitter.com/intent/tweet?text=${Quote.text} - ${Quote.author}`;
    window.open(TwitterUrl,'_blank');
}
function loader(){
    document.getElementById('quote-container').hidden = true;
}
function removeLoader(){
    document.getElementById('quote-container').hidden = false;
    document.getElementById('loader').hidden = true;
}
//On Load
loader();
getQuotesFromAPI();