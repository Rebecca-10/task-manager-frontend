import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import * as taskService from '../../services/taskService';

const TaskForm = (props) => {
  const { taskId } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    due_date: '',
    completed: false,
  });

  const handleChange = (evt) => {
    const value =
      evt.target.name === 'completed'
        ? evt.target.checked
        : evt.target.value;

    setFormData({ ...formData, [evt.target.name]: value });
  };

  useEffect(() => {
  const fetchTask = async () => {
    const taskData = await taskService.show(taskId);

    setFormData({
      ...taskData,
      completed:
        taskData.completed === true ||
        taskData.completed === 'true' ||
        taskData.completed === 'done',
    });
  };

  if (taskId) fetchTask();

  return () =>
    setFormData({
      title: '',
      description: '',
      priority: '',
      due_date: '',
      completed: false,
    });
}, [taskId]);


  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (taskId) {
      props.handleUpdateTask(taskId, formData);
    } else {
      props.handleAddTask(formData);
    }
  };

  return (
    <main>
      <h1>{taskId ? 'Edit Task' : 'New Task'}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description-input">Description</label>
        <textarea
          required
          name="description"
          id="description-input"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="priority-input">Priority</label>
        <input
          type="text"
          name="priority"
          id="priority-input"
          value={formData.priority}
          onChange={handleChange}
        />

        <label htmlFor="due-date-input">Due Date</label>
        <input
          type="date"
          name="due_date"
          id="due-date-input"
          value={formData.due_date || ''}
          onChange={handleChange}
        />

        <label htmlFor="completed-input">
          Completed
        </label>
        <input
          type="checkbox"
          name="completed"
          id="completed-input"
          checked={formData.completed}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default TaskForm;
