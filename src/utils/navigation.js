import {Link} from "react-router-dom";
import {
	HomeOutlined,
	FileMarkdownOutlined,
	CommentOutlined,
	UserOutlined,
	SettingOutlined
} from '@ant-design/icons';

// 后台左侧导航栏结构
const NavList = [
	{
		label: <Link to='/admin/home'>主页</Link>,
		key: '/admin/home',
		icon: <HomeOutlined />
	},
	{
		label: '文章管理',
		key: 'sub1',
		icon: <FileMarkdownOutlined />,
		children: [
			{label: <Link to='/admin/article/list'>文章列表</Link>, key: '/admin/article/list',},
			{label: <Link to='/admin/article/add'>写文章</Link>, key: '/admin/article/add',},
			{label: <Link to='/admin/type'>类别管理</Link>, key: '/admin/type'},
		]
	},
	{
		label: <Link to='/admin/comment'>评论管理</Link>,
		key: '/admin/comment',
		icon: <CommentOutlined />,
	},
	{
		label: <Link to='/admin/user'>用户管理</Link>,
		key: '/admin/user',
		icon: <UserOutlined />
	},
	{
		label: <Link to='/admin/setting'>设置</Link>,
		key: '/admin/setting',
		icon: <SettingOutlined />
	}
]

export default NavList;
