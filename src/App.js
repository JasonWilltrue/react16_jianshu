import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
//引入页面组件
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Register from './pages/register'
import Write from './pages/write'
import { Switch  } from "react-router-dom";


/**
 *  exact 路由中精确匹配  BrowserRouter路由  Route路由规则
 */
class App extends Component {
	render() {
		return (
			<Provider store={store}>
					<BrowserRouter>
						<Fragment>
							<Switch>
              <Route path="/login" exact component={Login} />
							<Route path="/register" exact component={Register} />	
							<Header  />
							</Switch>
							<Route path="/" exact component={Home} />
							<Route path="/write" exact  component={Write} />
							<Route path="/detail/:id" exact  component={Detail} />
						</Fragment>
					</BrowserRouter>
			</Provider>
		);
	}
}


export default App;
