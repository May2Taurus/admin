import ajax from "./ajax";

// 用户登录
export const reqLogin = (username, password) => ajax('/admin/login', {username, password}, 'POST');

// 获取文章列表
export const reqArticleList = (pageNum, pageSize) => ajax('/admin/article/list', {pageNum, pageSize}, 'GET');
// 新增文章
export const reqAddArticle = ({typeId, title, introduction, content, createTime}) =>
	ajax('/admin/article/add', {typeId, title, introduction, content, createTime}, 'POST');

// 获取文章类别列表
export const reqTypeList = () => ajax('/admin/type/list', {}, 'GET');
