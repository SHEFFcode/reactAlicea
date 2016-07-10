var Forum = React.createClass({
  getInitialState: function () {
    return ({
      allAnswers: {
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
      }
    });
  },
  _onAddAnswer: function (answerText) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_ADDED',
      data: answerText
    });
  },
  render: function () {
    return (
      <div>
        <ForumHeader />
        <div className="container">
          <hr/>
          <ForumAnswers allAnswers={ this.state.allAnswers } />
          <hr/>
          <h4>Add an answers</h4>
          <ForumAddAnswerBox onAddAnswer={ this._onAddAnswer } />
        </div>
      </div>
    );
  }
});
