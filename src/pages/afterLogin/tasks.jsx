import { Button, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { deleteTask, getTask } from "../../api/taskApi";
import { TaskContext } from "../../store/taskStore";

export default function Tasks() {
  const [task, dispatchTask] = TaskContext();

  useEffect(() => {
    console.log("taskDatataskData", task);
  }, [task]);

  useState(() => {
    getTask(dispatchTask);
  }, []);

  useState(() => {
    console.log("taskDatataskData", task);
  }, [task]);

  const handleDelete = (id) => {
    deleteTask(id, dispatchTask);
  };

  const handleEdit = (taskData) => {};

  return (
    <div className="task">
      <h1 className="">My Tasks</h1>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={task.data}
        renderItem={(taskData) => (
          <List.Item>
            <Card title={taskData.task}>
              <p>{taskData.description}</p>
              <Button
                className=""
                type="danger"
                onClick={() => handleDelete(taskData._id)}
              >
                Delete
              </Button>
              <Button
                className=""
                type="primary"
                onClick={() => handleEdit(taskData)}
              >
                Edit
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
