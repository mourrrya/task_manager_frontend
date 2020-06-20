import React from "react";
import { Input, InputNumber, Form, Checkbox } from "antd";
export default function InputType({ type, name, rule, placeholder }) {
  return (
    <>
      {type === "text" && (
        <Form.Item name={name} rules={rule}>
          <Input placeholder={placeholder}></Input>
        </Form.Item>
      )}
      {type === "number" && (
        <Form.Item name={name} rules={rule}>
          {<InputNumber placeholder={placeholder}></InputNumber>}
        </Form.Item>
      )}
      {type === "checkbox" && (
        <Form.Item name={name} valuePropName="checked">
          {<Checkbox>{placeholder}</Checkbox>}
        </Form.Item>
      )}
      {type === "textarea" && (
        <Form.Item name={name} rules={rule}>
          {<Input.TextArea placeholder={placeholder} />}
        </Form.Item>
      )}
    </>
  );
}
