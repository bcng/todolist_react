var React = require('react');

var AddList = React.createClass({
	getInitialState: function() {
		return {
			listName: ''
		}
	},

	handleChange: function(e) {
		this.setState({
			listName: e.target.value
		})
	},

	handleSubmit: function(e) {
		if (e.keyCode === 13) {
			this.props.add(this.state.listName);
			this.setState({
				listName: ''
			});
		}
	},

	render: function() {
		return (
			<div>
				<h3 className="text-center"> Create New List </h3>
				List Name:
				<input type="text"
					className="form-control"
					value={this.state.listName}
					placeholder="List Name"
					onChange={this.handleChange} />
				<button type="submit"
					className="btn btn-primary"
					onKeyDown={this.handleSubmit}> Submit </button>
			</div>
		)
	}
});

module.exports = AddList;