import { Button, Form, Input, Switch } from "antd";
import React, {useEffect} from "react";

import MobileLayout from "../../layout";
const CreateTodo = (props) => {
  // console.log(boi)


  // useEffect(() => {
  //   fetch('/todo')
  //   .then(res => res.blob())
  //   .then( data => console.log(data))
  // }, [])
  
  return (
    <MobileLayout useBackNav>
      <div className="">
        <Form layout="vertical">
          <Form.Item label='Title' name='title'>
            <Input />
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label='Date' name='date'>
            <Input type="date" />
          </Form.Item>
          <Form.Item label='Status' name='status'>
            <Switch defaultChecked />
          </Form.Item>

          <Button block type="primary">Submit</Button>
        </Form>
      </div>
    </MobileLayout>
  );
};

export default CreateTodo;
