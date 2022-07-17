const quotes = [
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves",
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
    },
    {
        quote: "Life is what happens to us while we are making other plans.",
        author: "Allen Saunders",
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;