import React from 'react';

console.log("Test");

class Home extends React.Component {  
	render () {
		return <div>
        <h1>React ES6 Starter</h1>
        <p>Welcome to the React ES6 Starter home page!</p>
		</div>;
	}
}

React.render(<Home />, document.body);  