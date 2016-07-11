var Forum = React.createClass({
  displayName: "Forum",

  getInitialState: function () {
    return {
      allAnswers: ForumStore.getAnswers()
    };
  },
  componentDidMount: function () {
    ForumStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    ForumStore.removeListener(this._onChange());
  },
  _onAddAnswer: function (answerText) {
    ForumActions.addNewAnswer(answerText);
  },
  _onChange: function () {
    this.setState({ allAnswers: ForumStore.getAnswers() });
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