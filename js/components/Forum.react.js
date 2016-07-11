var Forum = React.createClass({
  getInitialState: function () {
    return ({
      allAnswers: ForumStore.getAnswers()
    });
  },
  componentDidMount: function () {
    ForumStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    ForumStore.removeListener(this._onChange());
  },
  _onAddAnswer: function (answerText) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_ADDED',
      data: answerText
    });
  },
  _onChange: function () {
    this.setState({ allAnswers: ForumStore.getAnswers() });
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
