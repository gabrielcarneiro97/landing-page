import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => { // eslint-disable-line
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form; // eslint-disable-line
    return (
      <div style={{
        padding: '5%',
        }}
      >
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem
            label="Nome:"
          >
            {getFieldDecorator('nome', {
              rules: [{ required: true, message: 'Insira seu nome' }],
            })(<Input />)}
          </FormItem>
          <FormItem
            label="E-mail:"
          >
            {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Insira um e-mail válido!',
            }, {
              required: true, message: 'Insira seu e-mail',
            }],
            })(<Input />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
            Enviar
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Forms);
