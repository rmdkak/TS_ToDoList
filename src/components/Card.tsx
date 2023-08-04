// import { styled } from "styled-components";
import Button from "./elem/Button";
import { ToDoList } from "../type/type";

type props = {
  item: ToDoList;
  handleChangeTodoBoolean: (id: string) => void;
  handleDelteTodo: (id: string) => void;
};

const Card = ({ item, handleChangeTodoBoolean, handleDelteTodo }: props) => {
  return (
    <li
      className="flex flex-col border-[1px] border-black w-40 h-40 p-5 gap-y-4"
      key={item.id}
    >
      <h3 className="font-bold overflow-hidden">{item.title}</h3>
      <p className="overflow-hidden">{item.body}</p>
      <div className="flex justify-between">
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
      </div>
    </li>
  );
};

// const StList = styled.li`
//   display: flex;
//   flex-direction: column;
//   list-style-type: none;
//   border: 1px solid;
//   width: 150px;
//   height: 150px;
//   padding: 20px;
// `;

// const ButtonBox = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

export default Card;
