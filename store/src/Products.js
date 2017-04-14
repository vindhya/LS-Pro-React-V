const products = [
	{
		id: 'a1',
		name: 'First Product',
		description: 'This is the super fun first product we made.'
	},
	{
		id: 'a2',
		name: 'Second Product',
		description: 'This is the super fun SECOND product we made.'
	},
	{
		id: 'a3',
		name: 'Third Product',
		description: 'This is the super fun THIRD product we made.'
	}
];

import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';

export default (props) => {
	return (
		<div>
			<ul>
				<li>
					<Link 
						to={`${props.match.url}/${products[0].id}`}
						>
						{products[0].name}
					</Link>
				</li>
				<li>
					<Link 
						to={`${props.match.url}/${products[1].id}`}
						>
						{products[1].name}
					</Link>
				</li>
				<li>
					<Link 
						to={`${props.match.url}/${products[2].id}`}
						>
						{products[2].name}
					</Link>
				</li>
				{/*<li><Link to={`${props.match.url}/product2`}>Second product</Link></li>
				<li><Link to={`${props.match.url}/product3`}>Third product</Link></li>*/}
			</ul>
			<Route path={`${props.match.url}/:productId`} component={Product} />
		</div>
	);
}