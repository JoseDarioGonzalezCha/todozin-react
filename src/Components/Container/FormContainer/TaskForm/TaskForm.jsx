import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../Contexts/ApiContext";

import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomP,
  CustomSelect,
  CustomTextarea,
} from "./TAskForm.styles";

export const TaskForm = () => {
  const { addTask, refreshTasksList, categories } = useContext(ApiContext);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== "" && taskDescription.trim() !== "") {
      const newTask = {
        name: taskName,
        description: taskDescription,
        category: selectedCategory,
        completed: false,
      };
      const addedTask = await addTask(newTask);
      console.log("New task added: ", addedTask);
      setTaskName("");
      setTaskDescription("");
      setSelectedCategory("");
      refreshTasksList();
      console.log(addedTask);
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  return (
    <CustomForm onSubmit={handleSubmit}>
      <CustomP>TASK</CustomP>
      <CustomInput
        type="text"
        placeholder="NAME"
        value={taskName}
        onChange={handleInputChange}
      />

      <CustomTextarea
        placeholder="DESCRIPTION"
        value={taskDescription}
        onChange={handleDescriptionChange}
      />

      {isLoading ? (
        <p>Loading categories...</p>
      ) : (
        <CustomSelect value={selectedCategory} onChange={handleCategoryChange}>
          <option>Select a category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </CustomSelect>
      )}

      <CustomButton type="submit">Send</CustomButton>
    </CustomForm>
  );
};
