import { useContext, useEffect } from "react";
import { ApiContext } from "../../../../Contexts/ApiContext";

// Images
import vector from "../../../../assets/vector.png";
import abacate from "../../../../assets/abacate.png";
import iconsearch from "../../../../assets/iconsearch.png";

// Styles
import {
  DivMenu,
  TagDivList,
  TagDivSearch,
  TagDivSection,
  TagForm,
  TagH1,
  TagH2,
  TagImgAbacate,
  TagImgMenu,
  TagInput,
  TagP,
} from "./TaskMenu.styles";

export const TaskMenu = ({
  setSelectedCategory,
  setSearchValue,
  searchValue,
  handleShowAllTasks,
}) => {
  const { categories, fetchCategories } = useContext(ApiContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMenuClick = () => {
    handleShowAllTasks();
  };

  return (
    <aside>
      <DivMenu>
        <TagH1>MENU</TagH1>
        <TagImgMenu src={vector} alt="img vector" onClick={handleMenuClick} />
      </DivMenu>

      <TagForm>
        <TagImgAbacate src={abacate} alt="imagem abacate" />
        <TagDivSearch>
          <img src={iconsearch} alt="icon-search" />
          <TagInput
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search tasks..."
          />
        </TagDivSearch>
      </TagForm>

      <TagDivList>
        <TagH2>LIST</TagH2>
        {categories.map((category) => (
          <TagDivSection
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {/* <TagImgSection src={category.image} alt={category.name} /> */}
            <TagP>{category.name}</TagP>
          </TagDivSection>
        ))}
      </TagDivList>
    </aside>
  );
};
