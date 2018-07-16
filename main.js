var quotes = ["Emotions are abstract logic.",
              "The world isn't black or white, it is shades of grey.",
              "Love is simply a bug in the human mind.",
              "I'm antisocial - there's no question about it.",
              "The science of today is the technology of tomorrow",
              "Any sufficiently advanced technology is indistinguishable from magic",
              "There are no ghosts in the world. Save those we make for ourselves.",
              "bored.",
              "Change is the only constant",
              "Somewhere in between emotional and emotionless"];

var colors = ["#F57F17", "#424242", "#880E4F", "#01579B", "#B71C1C", "#006064", "#4E342E",
              "#BF360C", "#1B5E20", "#000000"];

var rand = Math.floor(Math.random() * 10);

document.querySelector('#quote').innerText = quotes[rand]
document.body.style.backgroundColor = colors[rand];
