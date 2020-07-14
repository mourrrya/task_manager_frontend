import { Button, Form } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postUser } from "../../api/userApi";
import { UserContext } from "../../store/userStore";
import InputType from "../inputType";
import "./_loginForm.scss";

const userDetail = [
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

export default function LoginForm() {
  const history = useHistory();
  const [userData, dispatchUserData] = UserContext();
  const [form] = Form.useForm();

  const onSubmit = (value) => {
    console.log(value);
    postUser("/user/login", value, dispatchUserData, history);
  };
  
  return (
    <Form
      onFinish={onSubmit}
      name="userForm"
      form={form}
      className="loginForm-main-block"
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
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
