$(document).ready(function () {
    var correctCount = 0;
    var incorrectCount = 0;
    var countdown = 30;

    var questionArray = [
        'What house at Hogwarts does Harry belong to?',
        'What position does Harry play on his Quidditch team?',
        'How did Harry get the scar on his forehead?',
        'What does the Sorcerer\'s Stone do?',
        'Who is Fluffy?',
        'What power do the dementors have over people?',
        'What does the Imperius Curse do?',
        'Who poses as Mad-Eye Moody, Harry\'s 4th year Defense Against the Dark Arts professor?',
        'What is an Auror?',
        'Who kills Professor Dumbledore?'
    ];

    var answerArray = [
        answerSet0 = ['Hufflepuff', 'Ravenclaw', 'Slytherin', 'Gryffindor'],
        answerSet1 = ['Keeper', 'Bludger', 'Chaser', 'Seeker'],
        answerSet2 = ['Voldemort tried to kill him when he was a baby',
            'In a Quidditch accident',
            'He crashed the Weasley\'s car into the Whomping Willow',
            'He was attacked by a Basilisk'],
        answerSet3 = ['Makes the one that holds it invisible',
            'Transforms any metal into gold & produces the Elixir of Life',
            'Tells the one that holds it their future',
            'Transforms the one who holds it into an animal'],
        answerSet4 = ['Hermione\'s cat', 'Harry\'s owl', 'Hagrid\'s Dragon', 'A Three-Headed Dog'],
        answerSet5 = ['They cause them to harm one another',
            'They make them do their bidding',
            'They make them go crazy',
            'They drain them of all happiness'],
        answerSet6 = ['Turns the person into a pig',
            'Controls',
            'Kills',
            'Tortures'],
        answerSet7 = ['Sirius Black', 'Peter Pettigrew', 'Voldemort', 'Barty Crouch, JR.'],
        answerSet8 = ['A wizard that car change his appearance at will',
            'A career counselor at Hogwarts',
            'A professional Quidditch player',
            'A person that cathes Dark Wizards'],
        answerSet9 = ['Belatrix Lestrange',
            'Draco Malfoy',
            'Fenrir Greyback',
            'Severus Snape']
    ];

    var answerKey = ['Hufflepuff',
        'Seeker',
        'Voldemort tried to kill him when he was a baby',
        'Transforms any metal into gold & produces the Elixir of Life',
        'A Three-Headed Dog',
        'They drain them of all happiness',
        'Controls',
        'Barty Crouch, JR.',
        'A person that cathes Dark Wizards',
        'Severus Snape'];



    $('#start').on('click', function nextQuestion() {
        $('#game-body').html('<div id="QA-panel" class="row"></div>');
        var randomNumber = Math.floor(Math.random() * 10);
        var randomQuestion = questionArray[randomNumber];

        $('#QA-panel').html('<h2 class="col-md-12">' + randomQuestion + '</h2>');
        $('#QA-panel').prepend('<div id="countdown" class="col-md-12"></div>');
        $('#countdown').html('<div id="countdown-number"></div>');

        var countdownNumberEl = $('#countdown-number');

        countdownNumberEl.append('<svg width="200" height="200">' + '< circle class= "circle" cx = "100" cy = "100" r = "80" />' + '</svg >');
        $('#QA-panel').append('<div id="choices" class="col-md-12 btn-group-vertical"></div>');

        function clearCountdown(interval) {
            clearTimeout(interval);
        }
    
        function countdown() {
            var count = setInterval(function () {
                console.log(countdown);
    
                if (countdown <= 0) {
                    ountdownNumberEl.html('Time\'s Out!');
                    clearCountdown(count);
                } else {
                    --countdown;
                    ountdownNumberEl.html(countdown);
                }
            }, 1000);
        }

        countdown();

        for (let i = 0; i < 4; i++) {
            var answers = answerArray[randomNumber][i];

            $('#choices').append('<button type="button" class="btn btn-outline-dark choices">' + answers + '</button>');

        }
    });

    $('.choices').on('click', function () {
        var selectedAnswer = $(this).text();
        console.log(selectedAnswer);
        var checkResult = $.inArray(selectedAnswer, answerKey);
        if (checkResult !== -1) {
            correctCount++;

            nextQuestion();
        } else {
            incorrectCount++;
            nextQuestion();
        }
    })
})