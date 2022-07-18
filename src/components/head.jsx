import React from 'react';
import {
	Card
} from 'antd';
import {
	UserOutlined,
	LogoutOutlined
} from '@ant-design/icons'

import '../static/css/header.css'

function Head() {
	
	
	
	return (
		<div className='header'>
			<span className='header-user'>
				<UserOutlined/> admin
			</span>
			<span className='header-logout'>
				<LogoutOutlined /> 退出
			</span>
		</div>
	);
}

export default Head;