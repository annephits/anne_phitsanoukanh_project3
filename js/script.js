$(document).ready(function () {

// list of possible answers

    const magicBall = {};
    magicBall.listOfAnswers = ["I find your lack of faith disturbing.", "The Force is strong with this one.", "Aaaarrrggghhh.", "Yes, definitely.", "No. I am your Father.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "May the Force be with you.", "Stay on target.", "I’ve got a bad feeling about this.", "Cannot predict now.", "Concentrate and ask again.", "It’s a trap!", "These aren’t the droids you’re looking for...", "Your focus determines your reality.", "Outlook not so good.", "Do or do not. There is no try.", "Not happening.", "Mind tricks don’t work on me."];


//generate a random answer

    magicBall.getAnswer = function (question) {
        const randomNumber = Math.random();
        const randomAnswer = Math.floor(randomNumber * this.listOfAnswers.length);
        const answer = this.listOfAnswers[randomAnswer];

        $("#8ball").effect("shake");
        $("#answer").text(answer);
        $("#answer").fadeIn(3000);

        // picture of 8 ball with triangle for answer
        $("#8ball").attr("src", "assets/magicEightBallAnswer.png");

    };

    // hide the p tag
    $("#answer").hide();

    const onClick = function () {
        $("#answer").hide();
        // picture of 8 ball before answer
        $("#8ball").attr("src", "assets/magicEightBall.png");
        // sweet alert + input
        const question = swal("What would you like to know?", {
            content: "input",
        })
        magicBall.getAnswer(question);
    };

    $("#ask-button").click(onClick);
});

// sound effect
function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}