var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

var App = React.createClass({
	getInitialState() {
		return {
			lists: []
		}
	},

	addNewList: function(newList){
	    this.setState({
			lists: this.state.lists.concat([{newTitle: newList.listName, index: this.state.lists.length}])
	    })
	},

	render: function(){
    	var componentList = this.state.lists.map(function(item, index){
			return <ListContainer title={item.newTitle} key={item.index} index={index} remove={this.handleRemoveList}/>
    	}.bind(this));
    	return (
    		<div className="container">
       			<div className="row">
          			<AddList add={this.addNewList} />
          			{componentList}
        		</div>
      		</div>
    	)
  	}
});

React.render(<App />, document.getElementById('app'))