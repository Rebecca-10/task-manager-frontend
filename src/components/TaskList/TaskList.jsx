import { Link } from 'react-router';

const TaskList = (props) => {
  return (
    <main>
      {props.tasks.map((task) => (
        <Link key={task.id} to={`/tasks/${task.id}`}>
          <article>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default TaskList;
