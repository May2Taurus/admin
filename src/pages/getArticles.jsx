import React, {useState, useEffect, useMemo} from 'react';
import {
	Table,
	Button,
	Modal
} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons'

import {reqArticleList, reqTypeList} from "../api/api";

import {PAGE_SIZE} from "../utils/constant";


const { confirm } = Modal;

function GetArticles() {
	
	const [typeInfoList, setTypeInfoList] = useState([]); // 类型列表
	const [articleList, setArticleList] = useState([]); // 文章列表
	const [articleNumber, setArticleNumber] = useState(0); // 文章总数
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	
	// 文章列表结构
	const columns = [
		{
			width: 260,
			align: 'center',
			title: '标题',
			dataIndex: 'title'
		},
		{
			align: 'center',
			title: '作者',
			dataIndex: 'author'
		},
		{
			width: 150,
			align: 'center',
			title: '类型',
			dataIndex: 'typeId',
			render: id => {
				let type = typeInfoList.find(type => type.id === id)
				return type === undefined ? undefined: type.typeName;
			}
		},
		{
			width: 200,
			align: 'center',
			title: '发表时间',
			dataIndex: 'createTime',
			render: time => {
				const date = new Date();
				date.setTime(time);
				return time === undefined ? time : date.toLocaleString();
			}
		},
		{
			width: 200,
			align: 'center',
			title: '最后修改时间',
			dataIndex: 'lastUpdateTime',
			render: time => {
				const date = new Date();
				date.setTime(time);
				return time === undefined ? time : date.toLocaleString();
			}
		},
		{
			width: 200,
			align: 'center',
			title: '操作',
			render: (article) => (
				<span>
					<Button>编辑</Button>
					&nbsp;&nbsp;&nbsp;
					<Button
						type='primary'
						danger
						onClick={showDeleteConfirm}
					>删除</Button>
				</span>
			)
		}
	]
	
	// 删除确认
	const showDeleteConfirm = () => {
		confirm({
			title: '确定删除这篇文章吗？',
			icon: <ExclamationCircleOutlined />,
			content: '删除后不可复原，请谨慎操作！',
			okText: '确认',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				console.log('OK');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}
	
	// 获取所有类型列表
	const getTypeList = async () => {
		const result = await reqTypeList();
		if (result.status === 0) {
			setTypeInfoList(result.data);
		}
	}
	
	// 页面初始化获取第一页
	const getArticleList = async () => {
		const result = await reqArticleList(currentPageNumber, PAGE_SIZE);
		if (result.status === 0) {
			setArticleList(result.data.list);
			setArticleNumber(result.data.total);
		}
	}
	
	// 切换页面，更新当前页数，并触发useMemo更新数据
	const handleTableChange = (pagination) => {
		setCurrentPageNumber(pagination.current);
	}
	useMemo(() => {
		getArticleList();
	}, [currentPageNumber])
	
	// componentDidMount
	useEffect(() => {
		getTypeList();
		getArticleList();
	}, [])
	
	return (
		<div>
			<Table
				rowKey='id'
				bordered
				size='small'
				columns={columns}
				dataSource={articleList}
				pagination={{
					// current: currentPageNumber,
					defaultPageSize: PAGE_SIZE,
					showQuickJumper: true,
					total: articleNumber,
				}} // 分页器，设置每页显示项数，跳转到某页组件
				onChange={handleTableChange}
			/>
			
		</div>
	);
}

export default GetArticles;