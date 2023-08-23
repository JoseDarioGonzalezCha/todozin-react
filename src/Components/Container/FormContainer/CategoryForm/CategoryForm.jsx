import { useContext, useState } from "react";
import { ApiContext } from "../../../../Contexts/ApiContext";
import {
  CustomButton,
  CustomForm,
  CustomInput,
  CustomP,
  CustomTextarea,
} from "./CategoryForm.styles";

export const CategoryForm = () => {
  const { addCategory, refreshCategoriesList } = useContext(ApiContext);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setCategoryDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() !== "" && categoryDescription.trim() !== "") {
      const newCategory = {
        name: categoryName,
        description: categoryDescription,
      };
      const addedCategory = await addCategory(newCategory);
      console.log("New category added: ", addedCategory);
      setCategoryName("");
      setCategoryDescription("");
      refreshCategoriesList();
    }
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <CustomP>CREATE NEW LIST</CustomP>
      <CustomInput
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={handleNameChange}
      />
      <CustomTextarea
        placeholder="Category Description"
        value={categoryDescription}
        onChange={handleDescriptionChange}
      />
      <CustomButton type="submit">Send</CustomButton>
    </CustomForm>
  );
};
