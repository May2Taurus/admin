import React, {useState} from 'react';
import {Outlet} from "react-router";
import { Breadcrumb, Layout, Menu } from 'antd';
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';

import NavList from "../utils/navigation"; // 导航栏结构
import Home from "./home";
import AddArticle from "./addArticle";

import '../static/css/admin.css'

const { Header, Content, Footer, Sider } = Layout;

function Admin() {
	
	const [collapsed, setCollapsed] = useState(false);
	
	return (
		<div className="blog-admin">
			<Layout style={{minHeight: '100vh'}}>
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={NavList} />
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{padding: 0}}/>
					<Content style={{margin: '0 16px'}}>
						<Breadcrumb style={{margin: '16px 0'}}>
							<Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
							<Breadcrumb.Item>工作台</Breadcrumb.Item>
						</Breadcrumb>
						<Outlet/>
					</Content>
					<Footer style={{textAlign: 'center'}}>
						Taurus Blog ©2022 Created by Jingyuan
					</Footer>
				</Layout>
			</Layout>
		</div>
	);
}

export default Admin;