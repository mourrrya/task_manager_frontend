import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import InputType from "../inputType";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const taskDetail = [
  {
    name: "task",
    placeholder: "Your Task",
    rule: [{ required: true, message: "please input your task!" }],
    inputType: "text",
  },
  {
    name: "description",
    placeholder: "Task Description",
    rule: [{ required: false }],

    inputType: "textarea",
  },
  {
    name: "completed",
    placeholder: "do you complete this task",
    inputType: "checkbox",
  },
];
export default function Task() {
  const [form] = Form.useForm();
  const [task, setTask] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [taskID, setTaskID] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/task`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [task]);

  const onTaskFormSubmit = (value) => {
    console.log("outside");
    if (isEdit) {
      console.log("inside");
      console.log(value, taskID);
      axios
        .patch(`http://localhost:3005/task/${taskID}`, value)
        .then((res) => {
          console.log(res);
          form.resetFields();
          setIsEdit(false);
          setTaskID(null);
        })
        .catch((e) => {
          console.log(e.response);
        });
    } else {
      axios
        .post(`http://localhost:3005/task`, value)
        .then((res) => {
          console.log(res.data);
          form.resetFields();
        })
        .catch((e) => console.log(e.response));
    }
  };

  const handleEdit = (myTask) => {
    setIsEdit(true);
    setTaskID(myTask._id);
    console.log(myTask);
    console.log(myTask._id);
    form.setFieldsValue({
      task: myTask.task,
      description: myTask.description,
      completed: myTask.completed,
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3005/task/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="add-task">
      <h1>Your Task</h1>
      <Form
        name="userTask"
        onFinish={onTaskFormSubmit}
        form={form}
        className="task-form-field"
        initialValues={{ completed: false }}
      >
        {taskDetail.map((task, index) => (
          <div className="task-input-block" key={index}>
            <InputType
              type={task.inputType}
              name={task.name}
              rule={task.rule}
              placeholder={task.placeholder}
            />
          </div>
        ))}
        <Form.Item>
          <Button htmlType="submit" type="primary">
            submit
          </Button>
        </Form.Item>
      </Form>
      {task.map((myTask, index) => (
        <div className="task-list-block" key={index}>
          <div className="task-block">
            <h2 className="">Task</h2>
            <p className="">{myTask.task}</p>
          </div>
          <div className="description-block">
            <h2 className="">Description</h2>
            <p className="">{myTask.description}</p>
          </div>
          <div className="completed-block">
            <p className="">
              {myTask.completed ? "task is completed" : "task is not completed"}
            </p>
          </div>
          <EditOutlined onClick={(e) => handleEdit(myTask)} />
          <DeleteOutlined onClick={(e) => handleDelete(myTask._id)} />
        </div>
      ))}
    </div>
  );
}
