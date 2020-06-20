import { Button, Form } from "antd";
import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import postUserApi from "../../api/userApi";
import { UserContext } from "../../store/userStore";
import InputType from "../inputType";
import "./signUpForm.scss";
const userDetail = [
  {
    name: "userName",
    placeholder: "Your Name",
    rule: [{ required: true, message: "please input your name!" }],
    inputType: "text",
  },
  {
    name: "userAge",
    placeholder: "Your Age",
    rule: [
      { required: true, message: "please input your age!" },
      { type: "number", message: "age must be in number!" },
    ],
    inputType: "number",
  },
  {
    name: "userEmail",
    placeholder: "Your Email",
    rule: [{ required: true, message: "please input your email!" }],
    inputType: "text",
  },
  {
    name: "userPassword",
    placeholder: "Your Password",
    rule: [{ required: true, message: "please input your password!" }],
    inputType: "text",
  },
];

export default function SignUpForm() {
  const history = useHistory();
  const [userData, dispatchUserData] = UserContext();
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(userData);
  });
  const onSubmit = (value) => {
    form.resetFields();
    postUserApi("/user", value, dispatchUserData, history);
  };

  return (
    <Form
      onFinish={onSubmit}
      name="userForm"
      form={form}
      className="signUpForm-main-block"
    >
      {userDetail.map((userDetail, index) => (
        <div className="user-input-block" key={index}>
          <InputType
            type={userDetail.inputType}
            name={userDetail.name}
            rule={userDetail.rule}
            placeholder={userDetail.placeholder}
          />
        </div>
      ))}
      <Form.Item>
        <Button htmlType="submit" type="primary">
          SIGN UP
        </Button>
      </Form.Item>
    </Form>
  );
}
