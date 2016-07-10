var Forum = React.createClass({
  displayName: "Forum",

  getInitialState: function () {
    return {
      allAnswers: {
        "1": {
          body: "Isn't it about time to travel?",
          correct: false
        },
        "2": {
          body: "React and flux are a tool and methodologies for building the front end of web applications",
          correct: false
        },
        "3": {
          body: "React is a synonym for 'respond'",
          correct: false
        }
      }
    };
  },
  _onAddAnswer: function (answerText) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_ADDED',
      data: answerText
    });
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ForumHeader, null),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("hr", null),
        React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
        React.createElement("hr", null),
        React.createElement(
          "h4",
          null,
          "Add an answers"
        ),
        React.createElement(ForumAddAnswerBox, { onAddAnswer: this._onAddAnswer })
      )
    );
  }
});