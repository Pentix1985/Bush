const config = {

    randomInteger(min = 0, max = questionsAndAnswers.length - 1) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    },

    getQuestionAndAnswer() {
        return questionsAndAnswers[this.randomInteger()];
    },


}