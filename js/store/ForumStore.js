var answerData = {
    "1": {
      body:     "Isn't it about time to travel?",
      correct:  false
    },
    "2": {
      body:     "React and flux are a tool and methodologies for building the front end of web applications",
      correct:  false
    },
    "3": {
      body:     "React is a synonym for 'respond'",
      correct:  false
    }
};

var ForumStore = new EventEmitter();

ForumStore.emitChange = function () {
  this.emit('change');
};

ForumStore.addChangeListener = function (listener) {
  this.on('change', listener);
};

ForumStore.getAnswers = function () {
  return answerData;
};

ForumStore.addData = function (newAnswer) {
  answerData[Object.keys(answerData.length + 1)] = {
    body: newAnswer,
    correct: false
  };
  this.emitChange();
};

ForumStore.markAsCorrect = function (id) {
  for (var key in answerData) {
    answerData[key].correct = false;
  }
  answerData[id].correct = true;
  this.emitChange();
};

ForumDispatcher.register(function (action) {
  switch (action.actionType) {
    case ForumConstants.FORUM_ANSWER_ADDED: {
      console.log('Answer added');
      ForumStore.addData(action.newAnswer);
      break;
    }
    case ForumConstants.FORUM_ANSWER_MARKED_CORRECT: {
      console.log('answer marked correct');
      ForumStore.markAsCorrect(action.id);
      break;
    }
  }
});