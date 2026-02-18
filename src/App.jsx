import { Routes, Route, useNavigate } from 'react-router';
import { useContext, useState, useEffect } from 'react';

import { UserContext } from './contexts/UserContext';

import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

import TaskList from './components/TaskList/TaskList';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskForm from './components/TaskForm/TaskForm';

import * as taskService from './services/taskService';

const App = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      const tasksData = await taskService.index();
      setTasks(tasksData);
    };
    if (user) fetchAllTasks();
  }, [user]);

  const handleAddTask = async (taskFormData) => {
    const newTask = await taskService.create(taskFormData);
    setTasks([newTask, ...tasks]);
    navigate('/tasks');
  };

  const handleDeleteTask = async (taskId) => {
    const deletedTask = await taskService.deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== deletedTask.id));
    navigate('/tasks');
  };

  const handleUpdateTask = async (taskId, taskFormData) => {
    const updatedTask = await taskService.update(taskId, taskFormData);

    setTasks(
      tasks.map((task) =>
        taskId === task.id ? updatedTask : task
      )
    );

    navigate(`/tasks/${taskId}`);
  };

  return (
    <>
      <NavBar />

      <Routes>
  <Route path="/" element={user ? <Dashboard /> : <Landing />} />

  <Route
    path="/tasks"
    element={
      user ? <TaskList tasks={tasks} /> : <SignInForm />
    }
  />

  <Route
    path="/tasks/new"
    element={
      user ? (
        <TaskForm handleAddTask={handleAddTask} />
      ) : (
        <SignInForm />
      )
    }
  />

  <Route
    path="/tasks/:taskId"
    element={
      user ? (
        <TaskDetails handleDeleteTask={handleDeleteTask} />
      ) : (
        <SignInForm />
      )
    }
  />

  <Route
    path="/tasks/:taskId/edit"
    element={
      user ? (
        <TaskForm handleUpdateTask={handleUpdateTask} />
      ) : (
        <SignInForm />
      )
    }
  />

  <Route path="/sign-up" element={<SignUpForm />} />
  <Route path="/sign-in" element={<SignInForm />} />
</Routes>

    </>
  );
};

export default App;
