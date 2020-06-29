import React, { Fragment } from "react";
import { Button, Form } from "antd";
import InputType from "../../components/inputType";

const textInput = [
  {
    type: "text",
    rule: [{ required: true, message: "this field is required" }],
    placeholder: "Title",
    name: "task",
  },
  {
    type: "textarea",
    rule: [{ required: true, message: "this field is required" }],
    placeholder: "Description",
    name: "description",
  },
  {
    type: "checkbox",
    rule: [{ required: true, message: "this field is required" }],
    name: "completed",
    placeholder: "Do you complete this task?",
  },
];

export default function CreateTask() {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="create-task-main">
      <h1 className="create-task-main__h1">Create Task</h1>
      <div className="create-task-data">
        <Form
          name="textInputData"
          onFinish={onFinish}
          initialValues={{
            completed: false,
          }}
        >
          {textInput.map((data, index) => {
            return (
              <Fragment key={index}>
                <InputType {...data} />
              </Fragment>
            );
          })}
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
