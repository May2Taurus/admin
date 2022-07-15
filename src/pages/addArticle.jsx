import React, {useState} from 'react';
import {
	Row,
	Col,
	Input,
	Select,
	Space,
	Button,
	DatePicker
} from 'antd'
import {marked} from "marked";

import '../static/css/addArticle.css'

const {Option} = Select;
const {TextArea} = Input;

function AddArticle() {
	
	const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
	const [articleTitle, setArticleTitle] = useState('')   //文章标题
	const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
	const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
	const [introduceMD, setIntroduceMD] = useState()            //简介的markdown内容
	const [introduceHtml, setIntroduceHtml] = useState('等待编辑') //简介的html内容
	const [showDate, setShowDate] = useState()   //发布日期
	const [updateDate, setUpdateDate] = useState() //修改日志的日期
	const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
	const [selectedType, setSelectType] = useState(1) //选择的文章类别
	
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false,
	})
	
	const changeContent = (e) => {
		// 1. 获取markdown编辑框中的内容
		setArticleContent(e.target.value);
		// 2. markdown转换为html
		let html = marked(e.target.value);
		setMarkdownContent(html);
	}
	
	const changeIntroduction = (e) => {
		setIntroduceMD(e.target.value);
		let html = marked(e.target.value);
		setIntroduceHtml(html);
	}
	
	return (
		<div>
			<Row gutter={5}>
				<Col span={18}>
					<Space direction='vertical' size='large' style={{display: 'flex'}}>
						<Row gutter={10}>
							<Col span={20}>
								<Input placeholder='博客标题' size='middle'/>
							</Col>
							<Col span={4}>
								<Select defaultValue='1' size='middle'>
									<Option value='1'>Web前端</Option>
								</Select>
							</Col>
						</Row>
						<Row gutter={10}>
							<Col span={12}>
								<TextArea
									className='markdown-content'
									placeholder='文章内容'
									rows={20}
									onChange={changeContent}
								/>
							</Col>
							<Col span={12}>
								<div
									className='markdown-show'
									dangerouslySetInnerHTML={{__html:markdownContent}}
								>
								</div>
							</Col>
						</Row>
					</Space>
				</Col>
				<Col span={6}>
					<Space direction='vertical' size='large' style={{display: 'flex'}}>
						<Row>
							<Col span={24}>
								<Space size='small'>
									<Button size='middle'>暂存文章</Button>
									<Button type='primary' size='middle'>保存文章</Button>
								</Space>
							</Col>
						</Row>
							<Row>
								<Col span={24}>
									<TextArea
										rows={4}
										placeholder="文章简介"
										onChange={changeIntroduction}
									/>
								</Col>
								<Col className='top-small-gap' span={24}>
									<div
										className='introduce-html'
										dangerouslySetInnerHTML={{__html:introduceHtml}}
									>
									</div>
								</Col>
								<Col className='top-small-gap' span={12}>
									<div className='date-select'>
										<DatePicker
											placeholder='发布日期'
											size='middle'
										/>
									</div>
								</Col>
							</Row>
					</Space>
				</Col>
			</Row>
		</div>
	);
}

export default AddArticle;