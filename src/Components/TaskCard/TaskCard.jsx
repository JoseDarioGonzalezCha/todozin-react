import { useState } from "react";

import details from "../../assets/details.png";

import {
  CustomCheckbox,
  CustomTagP,
  DivContainer,
  DivTaskContainer,
  TagButtonDescription,
  TagDivButton,
  TagDivDescription,
  TagDivTask,
} from "./TaskCard.styles";

export const TaskCard = ({ name, description, taskKey, id, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDeleteClick = () => {
    if (isChecked) {
      onDelete(id);
    }
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <DivContainer key={taskKey}>
      <DivTaskContainer>
        <TagDivTask>
          <CustomCheckbox checked={isChecked} onClick={handleCheckboxChange} />

          {isChecked ? (
            <CustomTagP
              onClick={handleToggleDescription}
              style={{ textDecoration: "line-through" }}
            >
              {name}
            </CustomTagP>
          ) : (
            <CustomTagP onClick={handleToggleDescription}>{name}</CustomTagP>
          )}
        </TagDivTask>

        <TagDivButton>
          <TagButtonDescription onClick={handleToggleDescription}>
            <img src={details} alt={details} />
          </TagButtonDescription>
          <button onClick={handleDeleteClick} disabled={!isChecked}>
            Delete
          </button>
        </TagDivButton>
      </DivTaskContainer>

      <TagDivDescription onClick={handleToggleDescription}>
        {showDescription && <CustomTagP>{description}</CustomTagP>}
      </TagDivDescription>
    </DivContainer>
  );
};
