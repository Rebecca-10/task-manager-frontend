import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router';

import * as taskService from '../../services/taskService';
import { UserContext } from '../../contexts/UserContext';

const TaskDetails = (props) => {
  const { taskId } = useParams();
  const { user } = useContext(UserContext);

  const [task, setTask] = useState(null);

  

  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await taskService.show(taskId);
      setTask(taskData);
    };
    fetchTask();
  }, [taskId]);

  if (!task) return <main>Loading...</main>;

  return (
    <main>
      <section>
        <header>
          <h1>{task.title}</h1>

          <p>Priority: {task.priority}</p>
          <p>Due Date: {task.due_date}</p>
          <p>Status: {task.completed}</p>

          {task.user_id === user.id && (
            <>
              <Link to={`/tasks/${taskId}/edit`}>Edit</Link>

              <button onClick={() => props.handleDeleteTask(taskId)}>
                Delete
              </button>
            </>
          )}
        </header>

        <p>{task.description}</p>
      </section>
    </main>
  );
};

export default TaskDetails;
