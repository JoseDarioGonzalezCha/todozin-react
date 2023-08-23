import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [refreshTasks, setRefreshTasks] = useState(0);
  const [refreshCategories, setRefreshCategories] = useState(0);

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, [refreshTasks, refreshCategories]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://64b19a68062767bc48266ff8.mockapi.io/tasks"
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await fetch(
        "https://64b19a68062767bc48266ff8.mockapi.io/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );
      const data = await response.json();
      setRefreshTasks((prevValue) => prevValue + 1);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(
        `https://64b19a68062767bc48266ff8.mockapi.io/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setRefreshTasks((prevValue) => prevValue + 1);
        // fetchTasks();
        console.log("Task deleted successfuly");
      } else {
        console.log("Failed to delete task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://64b19a68062767bc48266ff8.mockapi.io/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (newCategory) => {
    try {
      const response = await fetch(
        "https://64b19a68062767bc48266ff8.mockapi.io/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCategory),
        }
      );
      const data = await response.json();
      setRefreshCategories((prevValue) => prevValue + 1);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(
        `https://64b19a68062767bc48266ff8.mockapi.io/categories/${categoryId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setRefreshCategories((prevValue) => prevValue + 1);
        console.log("Category deleted successfully");
      } else {
        console.log("Failed to delete category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        categories,
        addCategory,
        deleteCategory,
        refreshTasksList: setRefreshTasks,
        refreshCategoriesList: setRefreshCategories,
        fetchCategories,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
