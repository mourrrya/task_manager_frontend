import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import InputType from "../inputType";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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

export default function User() {
  const [form] = Form.useForm();
  const [userList, setUserList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [userID, setUserID] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3005/user")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [userList]);

  const onUserFormSubmit = (value) => {
    console.log(value);
    axios
      .post("http://localhost:3005/user", value)
      .then((res) => {
        console.log(res);
        form.resetFields();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onUserFormEdit = (value) => {
    console.log(userID);
    console.log(value);
    axios
      .patch(`http://localhost:3005/user/${userID}`, value)
      .then((res) => {
        console.log(res);
        form.resetFields();
        setIsEdit(false);
        setUserID(null);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  const handleEdit = (data) => {
    setIsEdit(true);
    setUserID(data._id);
    console.log(data);
    form.setFieldsValue({
      userName: data.userName,
      age: data.age,
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3005/user/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="add-user">
      <h1>Fill User Details</h1>
      <Form
        onFinish={isEdit ? onUserFormEdit : onUserFormSubmit}
        name="userForm"
        form={form}
        className="user-form-field"
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
            login
          </Button>
        </Form.Item>
      </Form>
      <div className="list-of-user">
        <h1>User List</h1>
        <div className="user-list-main-block">
          {userList.map((user, index) => (
            <div className="user-list-block" key={index}>
              <div className="name-block">
                <h2 className="">Name</h2>
                <p className="">{user.userName}</p>
              </div>
              <div className="age-block">
                <h2 className="">Age</h2>
                <p className="">{user.userAge}</p>
              </div>
              <div className="email-block">
                <h2 className="">Email</h2>
                <p className="">{user.userEmail}</p>
              </div>
              <div className="age-block">
                <h2 className="">Password</h2>
                <p className="">{user.userPassword}</p>
              </div>
              <EditOutlined onClick={(e) => handleEdit(user)} />
              <DeleteOutlined onClick={(e) => handleDelete(user._id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
