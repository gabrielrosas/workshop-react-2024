import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "*************",
  authDomain: "*************",
  projectId: "*************",
  storageBucket: "*************",
  messagingSenderId: "*************",
  appId: "*************",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addTask(task: string) {
  await addDoc(collection(db, "tasks"), {
    text: task,
    completed: false,
  });
}

export async function toggleTask(task: Todo) {
  await updateDoc(doc(db, "tasks", task.id), {
    text: task.text,
    completed: !task.completed,
  });
}

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export function listenTasks(callback: (tasks: Todo[]) => void) {
  return onSnapshot(collection(db, "tasks"), (snapshot) => {
    callback(
      snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Todo)
      )
    );
  });
}
