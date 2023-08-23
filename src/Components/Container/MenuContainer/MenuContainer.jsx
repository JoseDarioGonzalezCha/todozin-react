import { TagMenuContainer } from "./MenuContainer.styles";
import { TaskMenu } from "./TaskMenu/TaskMenu";

export const MenuContainer = ({
  setSelectedCategory,
  setSearchValue,
  searchValue,
  handleShowAllTasks,
}) => {
  return (
    <TagMenuContainer>
      <TaskMenu
        setSelectedCategory={setSelectedCategory}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleShowAllTasks={handleShowAllTasks}
      />
    </TagMenuContainer>
  );
};
