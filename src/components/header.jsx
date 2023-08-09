import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../YourCustomStyle.css'; // 导入自定义的CSS样式文件
function CollapsibleExample() {
  return (
   
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary custom-font"  fixed="top">
      <Container>
        <Navbar.Brand href="/">everything just for fun</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="features">主页</Nav.Link>
            <Nav.Link href="homework">提交作业</Nav.Link>
            <NavDropdown title="有趣系列" id="collasible-nav-dropdown">
              <NavDropdown.Item href="rocket">有趣的火箭🚀</NavDropdown.Item>
              <NavDropdown.Item href="card">
                有趣的卡牌
              </NavDropdown.Item>
              <NavDropdown.Item href="clock">有趣的时钟</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                空位3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutwebsite">关于网站</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="signin">登录</Nav.Link>
            <Nav.Link  href="signup">
              注册
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;
