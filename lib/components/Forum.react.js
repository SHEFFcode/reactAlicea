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
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(ForumHeader, { allAnswers: this.state.allAnswers })
    );
  }
});