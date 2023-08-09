import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import '../YourCustomStyle.css'; // 导入自定义的CSS样式文件
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessAllowed, setAccessAllowed] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // 新增状态变量
  useEffect(() => {
    const tokenCheckInterval = setInterval(() => {
      handleProtectedAccess();
    }, 5000); // 500 毫秒即 0.5 秒
    
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token; // 从响应中获取JWT令牌
        localStorage.setItem('token', token); // 存储令牌
        setAccessAllowed(true); // 设置允许访问状态
        setLoggedIn(true); // 设置已登录状态

      } else {
        setAccessAllowed(false); // 设置不允许访问状态
        setLoggedIn(false); // 设置未登录状态
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleProtectedAccess = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:5000/protected', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setAccessAllowed(true);
      } else {
        setAccessAllowed(false);
        setLoggedIn(false); // 设置未登录状态
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <Container className="mt-5">
      {!loggedIn && ( // 显示表单只有在未登录状态下才有效
   <>
      <div className="mt-3" style={{marginBottom: '10px'}}>
      <a href="https://lijianye521.github.io/2023/08/08/JWT%E5%AD%A6%E4%B9%A0-%E7%99%BB%E5%BD%95%E9%80%BB%E8%BE%91%E5%AE%9E%E7%8E%B0/" target="_blank" rel="noopener noreferrer" className='custom-font' >
       关于jwt的内容
      </a>
      <br />
    </div>
 
    
         <Form onSubmit={handleLogin}>
         <Form.Group controlId="formUsername" className='custom-font'>
           <Row>
             <Col>
               <Form.Label>用户名</Form.Label>
             </Col>
           </Row>
           <Row>
             <Col>
               <Form.Control
                 type="text"
                 placeholder="请输入用户名"
                 value={username}
                 onChange={handleUsernameChange}
               />
             </Col>
           </Row>
         </Form.Group>
 
         <Form.Group controlId="formPassword" className='custom-font'>
           <Form.Label>密码</Form.Label>
           <Form.Control
             type="password"
             placeholder="请输入密码"
             value={password}
             onChange={handlePasswordChange}
           />
         </Form.Group>
 
         <Button className="mt-3"  variant="primary" type="submit"  style={{ fontFamily: 'CustomFont' }}>
           登录
         </Button>
       </Form>
       </>
      )}

      {loggedIn && (
        <Button
          className="mt-3"
          variant="success"
          onClick={handleProtectedAccess}
          style={{ fontFamily: 'CustomFont' }}
        >
          访问受保护路由
        </Button>
      )}

{accessAllowed === true && (
  <Alert className="mt-3" variant="success" style={{ fontFamily: 'CustomFont' }}>
    允许访问
  </Alert>
)}

{accessAllowed === false && (
  <Alert className="mt-3" variant="danger">
    不允许访问
  </Alert>
)}

    </Container>
   
  );
};

export default Login;
