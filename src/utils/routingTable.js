import {Navigate} from "react-router";

// 所有路由组件
import Login from "../pages/login";
import Admin from "../pages/admin";
import Home from "../pages/home";
import GetArticles from "../pages/getArticles";
import AddArticle from "../pages/addArticle";
import Types from "../pages/types";
import Comments from "../pages/comments";
import Users from "../pages/users";
import Setting from "../pages/setting";

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
				path: 'article/list',
				element: <GetArticles/>,
			},
			{
				path: 'article/add',
				element: <AddArticle/>,
			},
			{
				path: 'type',
				element: <Types/>,
			},
			{
				path: 'comment',
				element: <Comments/>,
			},
			{
				path: 'user',
				element: <Users/>,
			},
			{
				path: 'setting',
				element: <Setting/>,
			},
			{
				path: '',
				element: <Navigate to='home'/>,
			},
		]
	},
	{
		path: '/',
		element: <Navigate to='/admin'/>
	}
]
