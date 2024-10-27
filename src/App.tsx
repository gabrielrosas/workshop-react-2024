import { useMemo } from "react";
import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { useLocalStorage } from "usehooks-ts";

type Todo = {
  text: string;
  completed: boolean;
};

export function App() {
  const [lista, setLista] = useLocalStorage<Todo[]>("tarefas", []);
  const [filter, setFilter] = useLocalStorage<"all" | "completed" | "uncompleted">("filtro", "all");

  const addTask = (task: string) => {
    setLista([
      ...lista,
      { text: task, completed: false },
    ]);
  };

  const removeTask = (indexToRemove: number) => {
    setLista(lista.filter((_, index) => index !== indexToRemove));
  };

  const toggleTask = (indexToToggle: number) => {
    setLista(lista.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  const listaFiltrada = useMemo(() => {
    if (filter === "all") {
      return lista;
    }
    if (filter === "completed") {
      return lista.filter((item) => item.completed);
    }
    return lista.filter((item) => !item.completed);
  }, [lista, filter]);

  return (
    <Container>
      <Content>
        <h1 className="text-white text-lg font-bold">Tarefas</h1>
        <Form onSubmit={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <List>
          {listaFiltrada.map((item, index) => (
            <Item
              key={index}
              text={item.text}
              completed={item.completed}
              onClick={() => toggleTask(index)}
              onDelete={() => removeTask(index)}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
}
