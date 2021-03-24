let game = {
    run() {
            let correctAnswerCount = 0;

            while(questionsAndAnswers.length > 0) {
                let info = config.getQuestionAndAnswer();
                console.log(info.question);

                let answer = prompt(`Выбирите ответ A:${info.answers[0]}, B:${info.answers[1]}, C:${info.answers[2]}, D:${info.answers[3]}`);

                if(player.isAnswerCorrect(info, answer)) {
                    ++correctAnswerCount;
                } else {
                    console.log(`Правильных ответов: ${correctAnswerCount}`);
                    return;
                }

                questionsAndAnswers.splice(questionsAndAnswers.indexOf(info), 1);
            }

            console.log(`Правильных ответов: ${correctAnswerCount}`);
    },

    init() {
        console.log(`Добро пожаловать в игру "Кто хочет стать миллионером!"`);
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
}

game.init();