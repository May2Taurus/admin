import {Navigate} from "react-router";

import Login from "../pages/login";
import Admin from "../pages/admin";
import Home from "../pages/home";
import AddArticle from "../pages/addArticle";

// react-router路由表
export default [
	{
		path: '/login',
		element: <Login/>,
	},
	{
		path: '/admin',
		element: <Admin/>,
		children: [
			{
				path: 'home',
				element: <Home/>,
			},
			{
				path: 'add-article',
				element: <AddArticle/>,
			},
		]
	},
	// {
	// 	path: '/',
	// 	element: <Navigate to='/admin'/>
	// }
]
