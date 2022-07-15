import React, {useState} from 'react';
import {
	Card,
	Input,
	Button,
	Spin,
	Space
} from 'antd'
import {
	UserOutlined
} from '@ant-design/icons'

import '../static/css/login.css'

function Login() {
	
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false); // 防止重复加载
	
	const checkLogin = () => {
		setIsLoading(true); // 防止重复加载
		setTimeout(() => {
			setIsLoading(false);
		}, 1000)
	}
	
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