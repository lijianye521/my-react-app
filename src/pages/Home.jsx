import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scene from '../components/Scene';
import '../YourCustomStyle.css'; // 导入自定义的CSS样式文件

function ResponsiveAutoExample() {
  return (
    <>
      <div className="top-bar"></div> {/* 添加一个空的div，作为导航栏和文本内容的间隔 */}
      <Container>
        <Row >
          <Col  className="col-md-7 mx-auto" >
            <h1 className="custom-font-center">这是之前网站的升级版</h1>
            <p className="custom-font-center">  技术栈 前端:React 后端:Flask  数据库:MySQL 内存:Redis</p>
            <p className="custom-font-center" >
              在这个班级管理网站中，我们利用React和Bootstrap创建了一个响应式的界面。这个网站因大四没啥作业需要提交，我直接把作业提交的功能砍了，已经转变为一个纯娱乐的网站了。
            </p>
            <p className="custom-font-center">本网站仅用于个人娱乐并学习技术使用!</p>
    
            <p className="custom-font-center">
            ↓↓↓ 放一个3d模型显得没那么空旷😂
            </p>
          </Col>
        </Row>
      </Container>
      <Scene />
    </>
  );
}

export default ResponsiveAutoExample;
