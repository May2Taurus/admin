import {Link} from "react-router-dom";
import {
	DesktopOutlined,
	PieChartOutlined,
	UserOutlined,
} from '@ant-design/icons';

import AddArticle from "../pages/addArticle";

// 后台左侧导航栏结构
const NavList = [
	{
		label: <Link to='/admin/home'>工作台</Link>,
		key: '1',
		icon: <PieChartOutlined />
	},
	{
		label: <Link to='/admin/add-article'>添加文章</Link>,
		key: '2',
		icon: <DesktopOutlined />
	},
	{
		label: '文章管理',
		key: 'sub1',
		icon: <UserOutlined />,
		children: [
			{label: '添加文章', key: '3'},
			{label: '文章列表', key: '4'},
		]
	},
	{
		label: '评论管理',
		key: '6',
		icon: <DesktopOutlined />
	},
]

export default NavList;
