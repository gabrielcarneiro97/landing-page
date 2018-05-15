import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    const style = {
      padding: '5%',
    };
    return (
      <div style={style}>
        <Form layout="vertical">
          <FormItem
            label="Field A"
          >
            {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(<Input />)}
          </FormItem>
          <FormItem
            label="Field B"
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem>
            <Button type="primary">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Forms);
