$(document).ready(function () {
  var timer;
  var correctCount = 0;
  var incorrectCount = 0;
  var countdownNumberEl;
  var randomNumber;
  var answers;
  var count;

  $("#start").on("click", function () {
    nextQuestion();
  });

  var questionObjectArray = [
    {
      question: "What house at Hogwarts does Harry belong to?",
      choices: ["Hufflepuff", "Ravenclaw", "Slytherin", "Gryffindor"],
      key: "Gryffindor",
      answered: false
    },
    {
      question: "What position does Harry play on his Quidditch team?",
      choices: ["Keeper", "Bludger", "Chaser", "Seeker"],
      key: "Seeker",
      answered: false
    },
    {
      question: "How did Harry get the scar on his forehead?",
      choices: [
        "Voldemort tried to kill him when he was a baby",
        "In a Quidditch accident",
        "He crashed the Weasley's car into the Whomping Willow",
        "He was attacked by a Basilisk",
      ],
      key: "Voldemort tried to kill him when he was a baby",
      answered: false
    },
    {
      question: "What does the Sorcerer's Stone do?",
      choices: [
        "Makes the one that holds it invisible",
        "Transforms any metal into gold & produces the Elixir of Life",
        "Tells the one that holds it their future",
        "Transforms the one who holds it into an animal",
      ],
      key: "Transforms any metal into gold & produces the Elixir of Life",
      answered: false
    },
    {
      question: "Who is Fluffy?",
      choices: [
        "Hermione's cat",
        "Harry's owl",
        "Hagrid's Dragon",
        "A Three-Headed Dog",
      ],
      key: "A Three-Headed Dog",
      answered: false
    },
    {
      question: "What power do the dementors have over people?",
      choices: [
        "They cause them to harm one another",
        "They make them do their bidding",
        "They make them go crazy",
        "They drain them of all happiness",
      ],
      key: "They drain them of all happiness",
      answered: false
    },
    {
      question: "What does the Imperius Curse do?",
      choices: ["Turns the person into a pig", "Controls", "Kills", "Tortures"],
      key: "Controls",
      answered: false
    },
    {
      question:
        "Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor?",
      choices: [
        "Sirius Black",
        "Peter Pettigrew",
        "Voldemort",
        "Barty Crouch, JR.",
      ],
      key: "Barty Crouch, JR.",
      answered: false
    },
    {
      question: "What is an Auror?",
      choices: [
        "A wizard that car change his appearance at will",
        "A career counselor at Hogwarts",
        "A professional Quidditch player",
        "A person that catches Dark Wizards",
      ],
      key: "A person that catches Dark Wizards",
      answered: false
    },
    {
      question: "Who kills Professor Dumbledore?",
      choices: [
        "Belatrix Lestrange",
        "Draco Malfoy",
        "Fenrir Greyback",
        "Severus Snape",
      ],
      key: "Draco Malfoy",
      answered: false
    },
  ];

  function randomizer() {
    randomNumber = Math.floor(Math.random() * questionObjectArray.length);
    return questionObjectArray[randomNumber]
  }

  function nextQuestion() {
    randomObject = randomizer();
    timer = 30;
    countdown();

    $("#game-body").html('<div id="QA-panel" class="row"></div>');
    
    while (randomObject.answered) {
        if (!randomObject.answered) {
            break
        }
        randomObject = randomizer()
    }

    $("#QA-panel").html('<h2 class="col-md-12" id="question">' + randomObject.question + "</h2>");
    $("#QA-panel").prepend('<div id="countdown" class="col-md-12"></div>');
    $("#countdown").html('<div id="countdown-number"></div>');
    countdownNumberEl = $("#countdown-number");

    $("#QA-panel").append(
      '<div id="choices" class="col-md-12 btn-group-vertical"></div>'
    );

    for (let i = 0; i < 4; i++) {
      answers = randomObject.choices[i];
      $("#choices").append(
        '<button type="button" class="btn btn-outline-dark choices">' +
          answers +
          "</button>"
      );
    }
  }

  function countdown() {
    count = setInterval(function () {
      if (timer <= 0) {
        countdownNumberEl.html("<h2>Time's Out!</h2>");
        clearInterval(count);
        incorrectCount++;
        var text = countdownNumberEl.text();
        setTimeout(function () {
          if (text == "Time's Out!") {
            nextQuestion();
          }
        }, 1000);
      } else {
        --timer;
        countdownNumberEl.html(
          '<span class="timerDisplay">' + "Time remaining: " + timer + "</span>"
        );
      }
    }, 1000);
  }

  $("#game-body").on("click", ".choices", function checkArray() {
    clearInterval(count);

    var currentQuestion = $("#question").text();
    var currentKey;
    questionObjectArray.forEach(object => {
        if (object.question === currentQuestion) {
            object.answered = true;
            currentKey = object.key;
        }
    })
    var selectedAnswer = $(this).text();
    console.log(selectedAnswer);

    if (selectedAnswer === currentKey) {
      correctCount++;
      console.log(correctCount);
    } else {
      incorrectCount++;
      console.log(incorrectCount);
    }

    var totalAnswers = correctCount + incorrectCount;

    if (totalAnswers !== 10) {
      nextQuestion();
    } else {
      EndGameDisplay();
    }
  });

  function EndGameDisplay() {
    $("#game-body").html("");
    $("#game-body").append("<h1>Game Over!</h1>");
    $("#game-body").append(
      "<div id='right' class='col-md-12'>Questions Answered Correctly: </div>"
    );
    $("#right").append(correctCount);
    $("#game-body").append(
      "<div id='wrong' class='col-md-12'>Questions Answered Incorrectly: </div>"
    );
    $("#wrong").append(incorrectCount);
  }
});
