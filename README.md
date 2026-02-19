# :card_index_dividers: TaskFlow – Full Stack Task Manager
<img width="895" height="385" alt="Screenshot 2026-02-18 at 12 15 27 PM" src="https://github.com/user-attachments/assets/b0618ee5-a03a-4b3c-a5f1-77cbfd4adf91" />



---

##  Description

**TaskFlow** is a full-stack task management application built using Flask, PostgreSQL, and React.

The application allows users to:

- Create an account
- Sign in securely using JWT authentication
- Create new tasks
- View all of their tasks
- Update task details
- Delete tasks
- Manage priority, due date, and completion status

Each task belongs to the authenticated user, and authorization ensures that users can only edit or delete their own tasks.

This project demonstrates full-stack CRUD functionality, secure authentication, protected routes, and relational database management.

---

##  Getting Started

This project consists of:

- A Flask + PostgreSQL back-end API
- A React front-end client
- JWT-based authentication
- Protected routes on both client and server

### Run Back-End

1. Activate virtual environment
2. Install dependencies
3. Run Flask server

### Run Front-End

1. Install dependencies
2. Start development server

---

##  Features

- JWT authentication (Sign Up / Sign In / Sign Out)
- Protected front-end and back-end routes
- Full CRUD functionality for tasks
- PostgreSQL relational database
- One-to-Many relationship (User → Tasks)
- Conditional rendering for edit/delete actions
- Pre-filled forms when editing tasks
- Responsive layout using CSS Flexbox
- Cohesive color theme

---

##  Technologies Used

### Front-End
- React
- React Router
- JavaScript (ES6+)
- CSS (Flexbox)

### Back-End
- Python
- Flask
- PostgreSQL
- Psycopg2
- PyJWT
- Bcrypt

---

##  Entity Relationship

- A **User** has many **Tasks**
- A **Task** belongs to one **User**

---

## UI & Design

The application uses a cohesive visual theme:

- Beige background
- Brown accent elements
- Dark green primary buttons
- Dark red delete actions

Flexbox is used for layout design to ensure consistent spacing and alignment across pages.

---

##  Authorization Rules

- Only authenticated users can access task routes
- Only the creator of a task can edit or delete it
- Guest users cannot access protected routes

---

## Next Steps

Future enhancements may include:

- Task filtering by priority
- Due date reminders
- Dashboard analytics
- Search functionality
- Dark mode toggle
- Task categories