import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
// import { styled } from "styled-components";
import { deleteTodo, updateTodo } from "../config/module/todo";
import { RootState } from "../config/store/store";

const List = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);

  const handleDelteTodo = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const handleChangeTodoBoolean = (id: string): void => {
    dispatch(updateTodo(id));
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <h2 className="font-bold text-lg my-2">할 일 목록</h2>
      <ul className="flex items-center flex-wrap w-full gap-12">
        {todo
          .filter((obj) => obj.isDone === false)
          .map((item) => (
            <Card
              key={item.id}
              item={item}
              handleChangeTodoBoolean={handleChangeTodoBoolean}
              handleDelteTodo={handleDelteTodo}
            />
          ))}
      </ul>
      <h2 className="font-bold text-lg my-2">해낸 일 목록</h2>
      <ul className="flex items-center flex-wrap w-full gap-12">
        {todo
          .filter((obj) => obj.isDone === true)
          .map((item) => (
            <Card
              key={item.id}
              item={item}
              handleChangeTodoBoolean={handleChangeTodoBoolean}
              handleDelteTodo={handleDelteTodo}
            />
          ))}
      </ul>
    </div>
  );
};

// const StContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   justify-content: center;
// `;

// const StUl = styled.ul`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   width: 100%;
//   padding: 0;
//   gap: 50px;
// `;

export default List;
