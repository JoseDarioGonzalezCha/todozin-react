import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../Contexts/ApiContext";

// components
import { TaskCard } from "../../TaskCard/TaskCard";
import { CategoryForm } from "../FormContainer/CategoryForm/CategoryForm";
import { TaskForm } from "../FormContainer/TaskForm/TaskForm";
import { NoPendingTask } from "../NoPendingTask/NoPendingTask";

// Styled
import {
  DivForm,
  TagButton,
  TagDiv,
  TagDivEyelash,
  TagDivTasks,
  TagH1,
  TagMain,
  TagP,
  TagSpan,
} from "./TaskManagementContainer.styles";

export const TaskManagementContainer = ({ filteredCategory, searchValue }) => {
  const { tasks, deleteTask } = useContext(ApiContext);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isCategoryFormVisible, setIsCategoryFormVisible] = useState(false);

  const updateFilteredTasks = () => {
    let filteredTasks = tasks;

    if (filteredCategory) {
      filteredTasks = tasks.filter(
        (task) => task.category === filteredCategory
      );
    }

    if (searchValue) {
      filteredTasks = filteredTasks.filter((task) =>
        task.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setSelectedTasks(filteredTasks);
  };

  useEffect(() => {
    updateFilteredTasks();
  }, [filteredCategory, searchValue, tasks]);

  const handleTaskDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleAddNewTaskClick = () => {
    setIsFormVisible(!isFormVisible);
    setIsCategoryFormVisible(false);
  };

  return (
    <TagMain>
      <TagDiv>
        <TagSpan>TODO ZIN</TagSpan>
        <TagH1>Task Management</TagH1>
        <TagDivEyelash>
          <TagP>TODO</TagP>
        </TagDivEyelash>

        <TagDivTasks>
          <TagButton onClick={handleAddNewTaskClick}>
            {isFormVisible ? <p>CREATE NEW LIST</p> : <p>ADD NEW TASK</p>}
          </TagButton>

          {selectedTasks.length === 0 ? (
            <NoPendingTask />
          ) : (
            selectedTasks.map((task) => (
              <TaskCard
                name={task.name}
                description={task.description}
                key={task.id}
                id={task.id}
                onDelete={handleTaskDelete}
              />
            ))
          )}
        </TagDivTasks>
      </TagDiv>
      <DivForm>
        {isFormVisible || isCategoryFormVisible ? (
          <TaskForm />
        ) : (
          <CategoryForm />
        )}
      </DivForm>
    </TagMain>
  );
};
