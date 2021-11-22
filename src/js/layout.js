import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import PropTypes from "prop-types";
import { Home } from "./views/home";

import { withGlobalState } from "./store/appContext.js";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ContactListView } from "./views/ContactListView";
//create your first component
const Layout = props => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<ContactListView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

Layout.propTypes = {
	match: PropTypes.object
};

export default withGlobalState(Layout);
