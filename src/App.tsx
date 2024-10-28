import { useEffect, useMemo, useState } from "react";
import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import { List } from "./components/List";
import { useLocalStorage } from "usehooks-ts";
import { listenTasks, Todo } from "./firebase";



export function App() {
  const [lista, setLista] = useState<Todo[]>([])
  const [filter, setFilter] = useLocalStorage<"all" | "completed" | "uncompleted">("filtro", "all")

  useEffect(() => {
    const umount = listenTasks((tasks) => {
      setLista(tasks)
    })

    return () => {
      umount()
    }
  }, [])

  const listaFiltrada = useMemo(() => {
    if (filter === "all") {
      return lista
    }
    if (filter === "completed") {
      return lista.filter((item) => item.completed)
    }
    return lista.filter((item) => !item.completed)
  }, [lista, filter])

  return (
    <Container>
      <Content>
        <h1 className="text-white text-lg font-bold">Workshop React 2024</h1>
        <Form />
        <Filters filter={filter} setFilter={setFilter} />
        <List>
          {listaFiltrada.map((item) => (
            <Item
              key={`task-${item.id}`}
              task={item}
            />
          ))}
        </List>
      </Content>
    </Container>
  )
}
