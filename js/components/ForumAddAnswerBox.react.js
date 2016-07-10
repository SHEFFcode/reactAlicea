var ForumAddAnswerBox = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    }
  },
  _onChange: function (event) {
    this.setState({
      value: event.target.value
    })
  },
  _addAnswer: function () {
    this.props.onAddAnswer(this.state.value)
  },
  render: function () {
    return (
      <div>
        <textarea className="col-md-6 col-xs-8" id="addAnswer" cols="30" rows="10"
                  onChange={ this._onChange }></textarea>
        <input type="button" className="btn btn-primary" value="add" onClick={ this._addAnswer  }/>
      </div>
    );
  }
});