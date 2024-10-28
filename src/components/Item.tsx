import { Todo, toggleTask } from "../firebase";
import { Checked } from "./icons/checked";
import { Unchecked } from "./icons/unchecked";

export function Item({ task }: { task: Todo }) {
    return (
        <div
            onClick={() => toggleTask(task)}
            className="flex flex-row min-h-[50px] w-full items-center cursor-pointer hover:bg-slate-600 bg-slate-800 mb-1 rounded-lg p-3"
        >
            {task.completed ? (
                <Checked className=" text-white text-3xl mr-3" />
            ) : (
                <Unchecked className=" text-white text-3xl mr-3" />
            )}
            <label className="text-white text-xl">{task.text}</label>
        </div>
    )
}