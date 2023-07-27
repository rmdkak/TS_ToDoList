import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Layout from "./Layout";

export interface ToDoList {
  title: string;
  body: string;
  isDone: boolean;
  id: string;
}

const Home = () => {
  const [todo, setTodo] = useState<ToDoList[]>([]);

  return (
    <Layout>
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </Layout>
  );
};

export default Home;
