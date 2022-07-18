import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router";
import {Outlet} from "react-router";
import {
	Breadcrumb,
	Layout,
	Menu,
	Avatar
} from 'antd';

import NavList from "../utils/navigation"; // 导航栏结构
import Head from "../components/head"; // 头部

import logo from '../assets/img/logo.png'
import storageUtils from "../utils/storageUtils";

import '../static/css/admin.css'

const { Header, Content, Footer, Sider } = Layout;

function Admin() {
	
	const navigate = useNavigate();
	
	const [user, setUser] = useState({});
	
	// componentDidMount
	useEffect(() => {
		// 增加路由守卫：如果localStorage没有用户的登录状态，则跳转到登录页面
		const user = storageUtils.getUser();
		console.log(user);
		if (JSON.stringify(user) === '{}') {
			navigate('/login');
		}
		setUser(user);
	}, [])
	
	return (
		<div className="blog-admin">
			<Layout style={{minHeight: '100vh'}}>
				<Sider>
					<div className="logo">
						<Avatar className="logo-img" size={40} src={logo} />
						<h1 className="logo-text">后台管理</h1>
					</div>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={NavList} />
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{padding: 0}}>
						<Head/>
					</Header>
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