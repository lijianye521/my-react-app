import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../YourCustomStyle.css'; // 导入自定义的CSS样式文件

function HelloWorld() {
  return (
    <>
    <div className="top-bar"></div> {/* 添加一个空的div，作为导航栏和文本内容的间隔 */}
      <Container>
        <Row >
          <Col  className="mx-auto" >
            <h1 className="custom-font">网站历史</h1>
            <p  >
              这个项目起源于一年前的文件上传系统，那个时候我还是个菜鸡🐔（当然现在也是），主要是用于收集班级作业，毕竟用qq一个一个收文件是真的裂开
              ，于是本人使用php在后端搭建了一个简单的文件收集工具，收作业时只需要让同学们直接在这个网站上提交就好了，
              下载学生们的作业需要到服务器上下载。
            </p>
            <h2 className="custom-font" >初代</h2>
            <Image className = "img-with-yellow-border"src="img/oldversion1.png" alt="Old Version" fluid />
            <p  >
              没错，就是这么个东西，后来发现有点丑，加了个bootstrap的UI，就是下面这个东西。
            </p>
            <Image className = 'img-with-yellow-border' src="img/oldversion2.png" alt="Old Version" fluid />
            <h2 className="custom-font" >二代版本</h2>
          <p>
          再后来，做过几个php小型项目之后，我对php的技艺就上升了那么一点点，后来就在班级里开发了第一款能够多线程收作业的一个web软件--矿小学，之所以叫这名是因为这名字，是因为当时它的域名是kuangxiaoxue.xyz
          </p>
          <a href="https://github.com/lijianye521/kuangxiaoxue"><p>矿小学开源github库</p></a>
          <p>
          这个是我系统化设计的第一款软件，最特色的功能在于这个网站可以多任务同时收集，同时管理员还可以下载制定任务的所有人上传的文件，以及作业提交情况的可视化显示，直接展示出谁还没交作业，并且同学们对于第一次提交结果不满意，在截止日期之前还可以对其进行修改。
          </p>

         

          <h3 className="custom-font" >主页</h3>
          <Image className = 'img-with-yellow-border' src="img/oldversion3.png" alt="Old Version" fluid />

          <h3 className="custom-font" >多任务并发收集</h3>
          <Image className = 'img-with-yellow-border' src="img/oldversion3.2.png" alt="Old Version" fluid />

          <h3 className="custom-font" >个人提交文件管理</h3>
          <Image className = 'img-with-yellow-border' src="img/oldversion3.3.png" alt="Old Version" fluid />
          <h3 className="custom-font" >后来这个网站的性质就变了</h3>
          <p>大四也没啥作业需要提交，然后这个网站就变成了纯娱乐性质的了，哈哈哈哈🤣！</p>
          </Col>
        </Row>
        <Row>
          <Col className='col-md-7 mx-auto'>
          </Col>
        </Row>
      </Container>
      </>
  );
}

export default HelloWorld;
