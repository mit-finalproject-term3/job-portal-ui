import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
class Contact extends React.Component {
  state = {
    checkNick: false
  };
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };
  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      }
    );
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col span={18} offset={3}>
          <Divider>
            <h1>Contact</h1>
          </Divider>
          <FormItem {...formItemLayout} label="Name">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name'
                }
              ]
            })(<Input placeholder="Enter your name" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Email">
            {getFieldDecorator('nickname', {
              rules: [
                {
                  required: this.state.checkNick,
                  message: 'Please input your nickname'
                }
              ]
            })(<Input placeholder="Enter your Email" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Comment">
            {getFieldDecorator('comment', {
              rules: [
                {
                  required: this.state.checkNick,
                  message: 'Please input your comment'
                }
              ]
            })(<TextArea rows={4} placeholder="Enter your Comment" />)}
          </FormItem>
          <FormItem {...formTailLayout} />
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              Send
            </Button>
          </FormItem>
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicRule = Form.create()(Contact);

export default WrappedDynamicRule;
