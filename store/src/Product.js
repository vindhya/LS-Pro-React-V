import React from 'react';

export default (props) => (
	<div>
		<h3>You are viewing the page for {props.match.params.productId}</h3>
	</div>
);