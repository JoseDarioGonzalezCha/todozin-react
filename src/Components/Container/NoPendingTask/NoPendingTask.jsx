import avocado from "../../../assets/abacateLendo.png";
import { DivContainer, TagImg } from "./NoPendingTask.styles";

export const NoPendingTask = () => {
  return (
    <DivContainer>
      <TagImg src={avocado} alt={avocado} />
      <p>You have no pending tasks on this list</p>
    </DivContainer>
  );
};
