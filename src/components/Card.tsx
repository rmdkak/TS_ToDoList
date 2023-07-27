import { styled } from "styled-components";
import { ToDoList } from "./Home";
import Button from "./elem/Button";

type props = {
  item: ToDoList;
  handleChangeTodoBoolean: (id: string) => void;
  handleDelteTodo: (id: string) => void;
};

const Card = ({ item, handleChangeTodoBoolean, handleDelteTodo }: props) => {
  return (
    <StList key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <ButtonBox>
        <Button
          size={"small"}
          styleType={"cancel"}
          onClick={() => handleChangeTodoBoolean(item.id)}
        >
          {item.isDone ? "취소" : "완료"}
        </Button>
        <Button
          size={"small"}
          styleType={"delete"}
          onClick={() => handleDelteTodo(item.id)}
        >
          삭제
        </Button>
      </ButtonBox>
    </StList>
  );
};

const StList = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 1px solid;
  width: 150px;
  height: 150px;
  padding: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Card;
