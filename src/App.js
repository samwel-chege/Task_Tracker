import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Follow up meeting',
        day: 'April 8th at 11:00am ',
        reminder: true,
    },

    {
        id: 2,
        text: 'Meeting at Ada labs',
        day: 'April 10th at 2:00pm ',
        reminder: true,
    },

    {
        id: 3,
        text: 'Finish up oracle',
        day: 'April 9th at 11:00am ',
        reminder: false,
    },

    {
        id: 4,
        text: 'Pick up stuff',
        day: 'April 12th at 11:00am ',
        reminder: true,
    },
    

])
// delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
    <Header/>
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} /> : 'Hello friend, we do not have tasks.'}
    </div>
  );
}

export default App;
