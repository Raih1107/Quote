// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `“If I had six hours to chop down a tree, I’d spend the first four hours sharpening the axe.” `,
    person: `Abraham Lincoln`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall"`,
    person:`Nelson Mandela`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"`,
    person:`Steve Jobs`
}, {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`
}, {
    quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person:`James Cameron`
}, {
    quote:`"The only thing we have to fear is fear itself"`,
    person: `Franklin D. Roosevelt`
}, {
    quote:`"It is during our darkest moments that we must focus to see the light."`,
    person:`Aristotle`
} , {
    quote:`"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."` ,
    person:`Albert Einstein`
}, {
    quote:`"Arise, awake, and stop not until the goal is achieved."` ,
    person:`Swami Vivekananda`
}, {
    quote:`"No man is more unhappy than a person who never faces adversity. For he is not permitted to prove himself."` ,
    person:`Seneca`
}, ];

btn.addEventListener("click" ,function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})