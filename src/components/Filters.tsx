import { Checked } from "./icons/checked";
import { Unchecked } from "./icons/unchecked";

type ItemProps = {
    label: string,
    checked?: boolean
    onClick?: () => void
}

function FilterItem(props: ItemProps) {
    return (
        <button onClick={props.onClick} className="flex flex-row items-center flex-1 bg-slate-800 px-3 py-1 rounded-full hover:bg-slate-600">
            {props.checked ? <Checked className="mr-3 text-xl" /> : <Unchecked className="mr-3 text-xl" />}
            {props.label}
        </button>
    )
}

type Props = {
    filter: "all" | "completed" | "uncompleted",
    setFilter: (filter: "all" | "completed" | "uncompleted") => void
}

export function Filters(props: Props) {
    return (
        <div className="flex flex-row w-full gap-1 mt-4 text-white text-lg">
            <FilterItem
                label="Todos"
                checked={props.filter === "all"}
                onClick={() => props.setFilter("all")}
            />
            <FilterItem
                label="Pendentes"
                checked={props.filter === "uncompleted"}
                onClick={() => props.setFilter("uncompleted")}
            />
            <FilterItem
                label="Concluídos"
                checked={props.filter === "completed"}
                onClick={() => props.setFilter("completed")}
            />
        </div>
    )
}

