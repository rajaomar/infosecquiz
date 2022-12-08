const username = document.querySelector("#username");
const fb = document.querySelector("#feedback");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

if (mostRecentScore <= 15 && mostRecentScore >= 13) {
  fb.innerText =
    "are very well aware of basic information security and should be safe from common phishing attacks.";
} else if (mostRecentScore <= 12 && mostRecentScore >= 10) {
  fb.innerText = "have a decent level of knowledge of information security";
} else if (mostRecentScore <= 9 && mostRecentScore >= 6) {
  fb.innerHTML =
    "to educate yourself more, on common topics of information security. You may visit <a href='https://www.fortinet.com/resources/cyberglossary/types-of-phishing-attacks'>this site</a>" +
    " for information on different types of phishing. ";
} else {
  fb.innerHTML =
    "need to learn the basics of information security because you're really prone to phishing attacks right now. We suggest you watch through <a href='https://www.youtube.com/watch?v=wygwHXYj_TI&ab_channel=BurgiTechnologies'>this video</a> and get training";
}
