import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 *  exact 路由中精确匹配
 */
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<BrowserRouter>
						<Fragment>
							<Route path="/" exact render={() => <div>Home</div>} />
							<Route path="/detail" exact render={() => <div>详情</div>} />
						</Fragment>
					</BrowserRouter>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
