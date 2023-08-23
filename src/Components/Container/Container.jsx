import React, { useState } from "react";
import { MenuContainer } from "./MenuContainer/MenuContainer";
import { TaskManagementContainer } from "./TaskContainer/TaskManagementContainer";

import { TagMain } from "./Container.styles";

export const Container = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleShowAllTasks = () => {
    setSelectedCategory("");
    setSearchValue("");
  };

  return (
    <TagMain>
      <MenuContainer
        setSelectedCategory={setSelectedCategory}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleShowAllTasks={handleShowAllTasks}
      />
      <TaskManagementContainer
        filteredCategory={selectedCategory}
        searchValue={searchValue}
      />
    </TagMain>
  );
};
