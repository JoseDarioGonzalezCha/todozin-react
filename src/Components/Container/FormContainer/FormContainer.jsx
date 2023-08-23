import { TaskForm } from "./TaskForm/TaskForm";

import { TagAside } from "./FormContainer.styles";
import { CategoryForm } from "./CategoryForm/CategoryForm";

export const FormContainer = () => {
  return (
    <TagAside>
      <TaskForm />
      <CategoryForm />
    </TagAside>
  );
};
