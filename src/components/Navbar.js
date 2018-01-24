import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import Logo from '../logo.png';
import isAuthenticated from '../Auth/isAuthenticated';
export default class Navbar extends Component {
  render() {
    return (
      <header id="header" className="clearfix">
        <Row>
          <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <Link to="/" id="logo">
              <img alt="logo" src={Logo} />
            </Link>
          </Col>
          <Col xxl={18} xl={17} lg={17} md={16} sm={0} xs={0}>
            <Menu
              theme="dark"
              className="menu-site"
              id="nav"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px', padding: '15px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              {isAuthenticated() && (
                <Menu.Item key="2">
                  <Link to="/postajob">Post Job</Link>
                </Menu.Item>
              )}
              <Menu.Item key="3">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              {!isAuthenticated() && (
                <Menu.Item key="5">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              )}
              {isAuthenticated() && (
                <Menu.Item key="6">
                  <Link to="/logout">Logout</Link>
                </Menu.Item>
              )}
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
