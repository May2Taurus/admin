import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router";
import {
	Card,
	Input,
	Button,
	Spin,
	Space,
	message
} from 'antd'
import {
	UserOutlined
} from '@ant-design/icons'

import storageUtils from "../utils/storageUtils";
import {reqLogin} from "../api/api";


import '../static/css/login.css'

function Login() {
	
	const navigate = useNavigate();
	
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false); // 防止重复加载
	
	const checkLogin = async () => {
		setIsLoading(true); // 防止重复加载
		// 1. 发送ajax请求，登录验证
		const result = await reqLogin(username, password);
		setIsLoading(false);
		if (result.status === 0) { // 登录成功
			// 2. 使用localStorage存储用户信息
			storageUtils.saveUser(result.data);
			// 3. 跳转到管理系统主页面
			navigate('/admin');
		} else {
			message.error("登录失败：" + result.error);
		}
	}
	
	// componentDidMount
	useEffect(() => {
		// 如果localStorage已经存储登录状态，则直接跳转到主页面
		if (JSON.stringify(storageUtils.getUser()) !== '{}') {
			navigate('/admin');
		}
	}, [])
	
	return (
		<div className='blog-login'>
			<Spin tip='Loading' spinning={isLoading}>
				<Card title='Taurus Blog System' bordered={true} style={{width: 400}}>
					<Space direction='vertical' size='large' style={{display: 'flex'}}>
						<Input
							id='username'
							size='middle'
							placeholder='请输出用户名'
							prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
							onChange={(e) => {setUsername(e.target.value)}}
						/>
						<Input.Password
							id='password'
							size='middle'
							placeholder='请输出密码'
							prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
							onChange={(e) => {setPassword(e.target.value)}}
						/>
						<Button type='primary' size='middle' block onClick={checkLogin}>登录</Button>
					</Space>
				</Card>
			</Spin>
		</div>
	);
}

export default Login;