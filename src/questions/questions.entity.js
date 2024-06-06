class QuestionsEntity {
	constructor(id, number, question, answer, topic, options) {
		this.id = id;
		this.number = number;
		this.question = question;
		this.answer = answer;
		this.topic = topic;
		this.options = options;
	}

	getAnswer() {
		return this.answer;
	}
	getQuestions() {
		return this.question;
	}
	getOptions() {
		return this.options;
	}
	getTopic() {
		return this.topic;
	}
}