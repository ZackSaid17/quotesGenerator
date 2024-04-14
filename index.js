


const quoteDisplay = document.getElementById('p');

let quotes = ["So many books, so little time.",
"Be yourself; everyone else is already taken.",
"A room without books is like a body without a soul.",
"You only live once, but if you do it right, once is enough.",
"Be the change that you wish to see in the world.",
"If you tell the truth, you don't have to remember anything.",
"Always forgive your enemies; nothing annoys them so much.",
"Some people never go crazy. What truly horrible lives they must lead.",
"It matters not what someone is born, but what they grow to be.",
"If you can make a woman laugh, you can make her do anything.",
"Not all those who wander are lost.","Do one thing every day that scares you.",
"Go to heaven for the climate and hell for the company.",
"To die will be an awfully big adventure.",
"Knowing yourself is the beginning of all wisdom.",
"The only true wisdom is in knowing you know nothing.",
"Happiness in intelligent people is the rarest thing I know.",
"A day without laughter is a day wasted.",
"You can never be overdressed or overeducated.",
"I became insane, with long intervals of horrible sanity."]


function generate(){

    let result;

    const random = Math.floor(Math.random() * quotes.length);

    
        result = quotes[random];

        //console.log(result);

        quoteDisplay.textContent = result;

    

   
}