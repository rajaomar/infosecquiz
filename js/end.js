const username = document.querySelector('#username')
const fb = document.querySelector('#feedback')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

if (mostRecentScore <= 15 && mostRecentScore >= 13) {
    fb.innerText = 'are very well aware of basic information security and should be safe from common phishing attacks.'
} else if (mostRecentScore <= 12 && mostRecentScore >= 10) {
    fb.innerText = 'have a decent level of knowledge of information security'
} else if (mostRecentScore <= 9 && mostRecentScore >= 6) {
    fb.innerText = 'to educate yourself more, on common topics of information security. You may visit https://www.fortinet.com/resources/cyberglossary/types-of-phishing-attacks for information on different types of phishing. ';
} else {
    fb.innerText = "need to learn the basics of information security because you're really prone to phishing attacks right now."
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')


}