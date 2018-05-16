import React from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

const ModalForm = Form.create()(class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props) // eslint-disable-line
  }

  render() {
    const { visible, onCancel, onCreate, form, destino } = this.props; // eslint-disable-line
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Pedir Mais informações"
        okText="Enviar"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem
            label="Nome:"
          >
            {getFieldDecorator('nome', {
              rules: [{ required: true, message: 'Insira seu nome!' }],
            })(<Input />)}
          </FormItem>
          <FormItem
            label="E-mail:"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'Insira um e-mail válido!',
              }, {
                required: true, message: 'Insira seu e-mail!',
              }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Destino:">
            <Input disabled value={destino} />
          </FormItem>
        </Form>
      </Modal>
    );
  }
});

export default ModalForm;
