import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };
    if (user) fetchUsers();
  }, [user]);

  return (
    <main className="dashboard">
      <section className="dashboard-card">
        <h1 className="dashboard-title">
          Welcome, {user.username}
        </h1>

        <p className="dashboard-subtitle">
          Here is a Task Team.
        </p>

        <div className="users-container">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="user-card">
                <span>{user.username}</span>
              </div>
            ))
          ) : (
            <p className="empty-message">No users found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
