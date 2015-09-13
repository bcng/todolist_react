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
		event.preventDefault();
		this.props.add(this.state.listName);
		this.setState({
			listName: ''
		})
	},

	render: function() {
		return (
			<form className="col-sm-6" onSubmit={this.handleSubmit}>
				<h3 className="text-center"> Create New List </h3>
				List Name:
				<input type="text"
					placeholder="List Name"
					className="form-control"
					value={this.state.listName}
					onChange={this.handleChange} />
				<button type="submit" className="btn btn-primary">
					Submit </button>
			</form>
		)
	}
});

module.exports = AddList;