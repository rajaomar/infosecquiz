const question = document.querySelector("#question");
const picture1 = document.querySelector("#pic1");
const picCtn1 = document.querySelector("#picCtn1");
const picCtn2 = document.querySelector("#picCtn2");
const picture2 = document.querySelector("#pic2");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const option3 = document.querySelector("#opt3");
const option4 = document.querySelector("#opt4");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:
      "Scenario: You find a USB Drive in a public library and it has a label mentioning that it contains confidential information. It catches your interest and you decide to do something with it. Which option describes your immediate response?",
    choice1:
      "I'll plug it in to see what information the USB is storing, after all just viewing the information won't do much harm to me",
    choice2: "I will leave it as is.",
    choice3:
      "I will notify a person of authority and let them take care of it.",
    choice4: "",
    answer: 3,
    pic1: "",
    pic2: "",
    alertmsg:
      "Incorrect! plugging USB stick essentialy can make them “autorun” - small file is all you need to get virus/worm/trojan/other, if your antivirus isn’t effective. You are at risk of getting your whole computer infected by a malware.",
  },
  {
    question:
      "Scenario: You are streaming a football match on an unofficial website and you see the message shown in the picture above. What would your response be, in this situation?",
    choice1:
      "The website is streaming a football match, it can surely be trusted with this antivirus suggestion too.",
    choice2: "I will close the popup message and exit the site.",
    choice3: "",
    choice4: "",
    answer: 2,
    pic1: "https://i.gyazo.com/0723393d336dc03b37413fc14d0c67ad.png",
    pic2: "",
    alertmsg:
      "Incorrect! The website is using a technique called 'Pop-up phishing'. You are being tricked into installing malware/virus on your computer. If you look closely, the url of the ad is not the official url for McAfee.",
  },
  {
    question:
      "Scenario: Suppose you’re the CEO of your company and you remember that you needed to make an important transaction. The public place you’re at, you find a wifi network that is not protected by a password. The WiFi network is also not provided by a known provider.Would you connect to this network and proceed to making your transaction?",
    choice1: "I will use a VPN to connect to the WiFi and make the transaction",
    choice2:
      "I would rather wait and find a WiFi network from a place I know is secure.",
    choice3:
      "If I don't make the transaction, my company is at risk. Free internet must be a gift from god at this time and I should accept this gift right now.",
    choice4: "",
    answer: 2,
    alertmsg:
      "Incorrect! By connecting to this WiFi network, you are at risk of being under an 'Evil Twin' attack. An evil twin is a fraudulent Wi-Fi access point that appears to be legitimate but is set up to eavesdrop on wireless communications. You may not lose as much by not making your transaction as you could if the attacker gets to know your bank details/credit card information.",
  },
  {
    question:
      "Scenario: While at your workplace, your desk is placed in such a place that as your colleagues walk by, they can easily see what you’re doing on your computer. At your job, you frequently sign in to your personal accounts on different websites. How would you prefer signing in, in this enviornment?",
    choice1: "I will type the username and password everytime, as usual.",
    choice2:
      "I will save my passwords in either my Google account or my iCloud account and use it to auto-fill the passwords for me.",
    choice3: "",
    choice4: "",
    answer: 2,
    alertmsg:
      "Incorrect! By manually typing your password around people, you're at risk of compromising your passwords through 'Shoulder Surfing'. Shoulder surfing is a type of social engineering technique used to obtain information such as personal identification numbers, passwords and other confidential data by looking over the victim's shoulder. By saving your passwords in your Google account, you don't have to type them out everytime you try to sign in and so no one can figure out your password.",
  },
  {
    question:
      "Scenario: You're a tourist in a country and visit an internet cafe near your hotel for the first time. You're tempted to login to your social media accounts and check on what you're friends are doing. What best describes your course of action?",
    choice1:
      "I will of course login to my accounts, I've paid for the internet cafe after all.",
    choice2:
      "I would rather just browse the internet and not enter any of my credentials on the computer.",
    choice3: "",
    choice4: "",
    answer: 2,
    alertmsg:
      "Incorrect! You're a tourist and you should never type any sensitive credentials at a place you're not sure of. The computer that you use at the internet cafe could be infected with a keylogger. A keylogger is a software that records every keystroke on the victim's device and sends it to the attacker. The attacker can easily get access to all your social media accounts in this way. It is best to not type any sensitive information that could harm you, if compromised. ",
  },
  {
    question:
      "Scenario: You receive a call from a private number and the person on the phone says that they’re talking from a bank you have an account with. They provide you with your date of birth, name, and father’s name to establish their authenticity. Next, they inform you that your account at the bank will be blocked due to some verification issue after the call ends unless you provide them your debit card details. What is your likely response?",
    choice1:
      "They have correct information about me so I will provide them the details they're asking for.",
    choice2: "I will cut the call and just ignore any further calls from them.",
    choice3:
      "I will call the bank and ask them if this was a legitimate call and then report it to the police if it wasn't.",
    choice4: "",
    answer: 3,
    alertmsg:
      "Incorrect! This is a typical case of 'Vishing'. Vishing is a form of phishing where the fraudster calls the victim saying they are from their bank or another institution and informs them that there is a problem with their account or credit card. The victim then gives the credit card information to the fraudster and VOILA! the fraudster runs away with the victim's details. You should never trust any calls that threaten you because banks and all other institutions are user friendly, they will never threaten you or hold your account hostage like this.",
  },
  {
    question:
      "You quote retweeted a friend's tweet to help them out, PayPal's twitter account has responded, do you trust the PayPal's account and tell your friend to follow the instructions in the tweet?",
    choice1: "Yes",
    choice2: "No",
    choice3: "",
    choice4: "",
    answer: 2,
    pic1: "https://i.gyazo.com/c209ea276d2a30a95300133e36f0f355.png",
    pic2: "",
    alertmsg:
      "Incorrect! If you search PayPal's official help account, you will notice that the original PayPal twitter has a different username. Someone is trying to impersonate PayPal and trick people into clicking a malicious link. Impoliteness is often a dead giveaway of impersonators. Actual PayPal social media managers would never address anyone by 'Alright'. This is a form of 'Angler Phishing'. Angler phishing is a type of phishing attack that targets social media users. People disguise themselves as a customer service agent on social media in order to reach a disgruntled customer and obtain their personal information or account credentials.",
  },
  {
    question:
      "You just saw this tweet from Elon Musk and apparently he's giving away free money. Do you transfer the money to his account to double it?",
    choice1: "Yes",
    choice2: "No",
    choice3: "",
    choice4: "",
    answer: 2,
    pic1: "https://i.gyazo.com/8926deca3b40b290011ce6afdb4287e5.png",
    pic2: "",
    alertmsg:
      "Incorrect! Even though it is Elon's real and verified twitter account, the account was actually hacked and the tweet was from the hacker. You should never trust such messages simply because they are too good to be true and unprofessional coming from trusted individuals. Any money you send on that address will be transferred to the hacker and you will lose your money.",
  },
  {
    question: "Which of the following is the legitimate facebook webpage?",
    choice1: "The one in the first picture",
    choice2: "The one in the second picture",
    choice3: "Both are the same so both are legitimate",
    choice4: "",
    answer: 1,
    pic1: "https://i.gyazo.com/3976e2dd067587b99417878d84367ca6.png",
    pic2: "https://i.gyazo.com/8a34e465cff13ce810179afe01b4758f.png",
    alertmsg:
      "Incorrect! Even though both webpages have the same visual, the URL is different. This is a form of phishing. By trusting the fake webpage, you will enter your credentials and they will be sent to the hacker.",
  },
  {
    question:
      "You are signing in to a website using your Google account. The website is supposed to get access to read your emails only. You are prompted to the following menu. Should you click 'Allow' and continue?",
    choice1: "Yes, this is the usual proceedure for giving access to websites,",
    choice2: "No",
    choice3: "",
    choice4: "",
    pic1: "https://i.gyazo.com/b1b9938ac02d0226d233b38a95b6e9ef.png",
    answer: 2,
    alertmsg:
      "Incorrect! The website is requesting permission to 'Send emails and change settings' whereas the website is only supposed to get access to view your emails. This is something that can be easily ignored and makes this a good oppurtunity for people to get unwanted access to your account.",
  },
  {
    question:
      "The pictures show two messages that are supposed to be sent from Fedex (a courier company). Which of the following messages appears to be legitimate?",
    choice1: "The one in the first picture",
    choice2: "The one in the second picture",
    choice3: "",
    choice4: "",
    answer: 1,
    pic1: "https://i.gyazo.com/1cb321ddf132b9e6119bc2eaaacf35ba.png",
    pic2: "https://i.gyazo.com/317c67ebea580bbc62acfce4ad2b9ecc.png",
    alertmsg:
      "Incorrect! This is a form of phishing called 'Smishing'. As a variant of phishing, victims are deceived into giving sensitive information to a disguised attacker. The link in the message is malicious and can lead you to downloading trojan/malware on your device. Any messages you recieve that include shortened links, should always mark suspiscion and be double checked. The real message from Fedex would be self sufficient, it will not lead you to another website.",
  },
  {
    question:
      "You recieve the following email. Do you trust it and proceed to pay your subscription fee as it says?",
    choice1: "Yes",
    choice2: "No",
    choice3: "",
    choice4: "",
    answer: 2,
    pic1: "https://www.investopedia.com/thmb/weGsBJccy4Nk8B0TqguF0p6NYUc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Netflishphishingscamemail-2f634e8596b14a64882a46d14577ed13.jpg",
    pic2: "",
    alertmsg:
      "Incorrect! This email is not from Netflix's official email address. If you look closely, you'll notice that the email address belongs to someone else. This is a phishing attempt and should therefore not be trusted.",
  },
  {
    question:
      "You are signing in to a website using your Google account. The website is supposed to get access to read your emails only. You are prompted to the following menu. Should you click 'Allow' and continue?",
    choice1: "Yes",
    choice2: "No",
    choice3: "",
    choice4: "",
    answer: 1,
    pic1: "https://i.gyazo.com/c2c42d15996c6605b7f8a2d286a7c4e2.png",
    pic2: "",
    alertmsg:
      "Incorrect! Not everything and everyone is fake! The website is asking for the correct permissions and so you can grant these permissions.",
  },
  {
    question:
      "It's 4 pm and you're done for the day. As you're about to leave your chair and head to home, you recieve the following email. According to the office protocol, you're not supposed to be dealing with any complaints and so anything that has to do with complaints, should not be sent to you. What do you do in this situation?",
    choice1: "Quickly open up the document and skim through it.",
    choice2: "Forward it to my co-worker to read it.",
    choice3:
      "Before opening the document, confirm this email with the person who has supposedly sent it, preferably by emailing them on an email that has been used before for communication,",
    choice4: "",
    answer: 3,
    pic1: "",
    pic2: "",
    alertmsg:
      "ncorrect! This is a form of phishing called 'Spear Phishing'. Spear phishing is a phishing method that targets specific individuals or groups within an organization. If you're not expecting an email like this but you recieve it, this is definately an impersonator and you should not click the malicious link. If you forward the email to a colleague, they may not be as cautious because you were the one who forwarded it and so they may end up getting infected by any malware that the link contains.",
  },
  {
    question:
      "Scenario: You get an email from an online store you've never heard of before, saying that there's an unreal discount on one of the items of your interest. You know this news is too good to be true. What do you do? ",
    choice1:
      "Click on the link and see the online store because you know you can exit if you dont trust it.",
    choice2: "Don't open the link at all.",
    choice3: "",
    choice4: "",
    answer: 2,
    pic1: "",
    pic2: "",
    alertmsg:
      "Incorrect! Once you open the link, your device might get instantly infected. Even though you may think you can exit the site upon verifying that it is a scam website, you already be in danger. It is best to not open the link at all.",
  },
];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 15;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("end.html");
  }

  picture1.classList.remove("hidden");
  picture2.classList.remove("hidden");
  picture1.src = "";
  picture2.src = "";
  option3.classList.remove("hidden");
  option4.classList.remove("hidden");

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;
  if (currentQuestion.pic1 !== undefined) {
    picture1.src = currentQuestion.pic1;
  } else {
    picture1.classList.add("hidden");
  }
  if (currentQuestion.pic2 !== undefined) {
    picture2.src = currentQuestion.pic2;
  } else {
    picture2.classList.add("hidden");
  }

  if (currentQuestion.choice3.length == 0) {
    option3.classList.add("hidden");
  }

  if (currentQuestion.choice4.length == 0) {
    option4.classList.add("hidden");
  }

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    } else {
      alert(currentQuestion.alertmsg);
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
