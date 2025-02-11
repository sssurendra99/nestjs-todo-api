# NestJS Todo API

A simple Todo API built with NestJS, Prisma, and PostgreSQL. This API allows you to perform CRUD operations on Todo items.

## Features

- **Create a Todo**: Add a new Todo item with a title, description, and optional completion status.
- **Read Todos**: Fetch all Todo items or a single Todo by its ID.
- **Update a Todo**: Modify the title, description, or completion status of an existing Todo.
- **Delete a Todo**: Remove a Todo item by its ID.

## Technologies Used

- **[NestJS](https://nestjs.com/)**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **[Prisma](https://www.prisma.io/)**: A modern database toolkit for TypeScript and Node.js.
- **[PostgreSQL](https://www.postgresql.org/)**: A powerful, open-source relational database system.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/download/) (or any other database supported by Prisma)
- [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli) (install globally via `npm install -g prisma`)

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nestjs-todo-api.git
cd nestjs-todo-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

1. Create a PostgreSQL database (e.g., `todo_db`).
2. Update the `.env` file with your database connection details:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/todo_db?schema=public"
   ```

3. Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

### 4. Start the Application

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`.
The Swagger UI will be availbe at `http://localhost:3000/api`.

---

## API Endpoints

### **Todos**

| Method | Endpoint     | Description                        |
| ------ | ------------ | ---------------------------------- |
| GET    | `/todos`     | Fetch all todos (with pagination). |
| GET    | `/todos/:id` | Fetch a single todo by ID.         |
| POST   | `/todos`     | Create a new todo.                 |
| PATCH  | `/todos/:id` | Update an existing todo.           |
| DELETE | `/todos/:id` | Delete a todo by ID.               |

---

## Example Requests

### Create a Todo

**Request:**

```bash
POST /todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "isCompleted": false
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "isCompleted": false,
  "createdAt": "2023-10-01T12:00:00.000Z",
  "updatedAt": "2023-10-01T12:00:00.000Z"
}
```

### Fetch All Todos

**Request:**

```bash
GET /todos
```

**Response:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "isCompleted": false,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  },
  {
    "id": "123e4567-e89b-12d3-a456-426614174001",
    "title": "Walk the dog",
    "description": "Take the dog for a walk in the park",
    "isCompleted": true,
    "createdAt": "2023-10-01T12:00:00.000Z",
    "updatedAt": "2023-10-01T12:00:00.000Z"
  }
]
```

### Fetch a Single Todo

**Request:**

```bash
GET /todos/123e4567-e89b-12d3-a456-426614174000
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "isCompleted": false,
  "createdAt": "2023-10-01T12:00:00.000Z",
  "updatedAt": "2023-10-01T12:00:00.000Z"
}
```

### Update a Todo

**Request:**

```bash
PATCH /todos/123e4567-e89b-12d3-a456-426614174000
Content-Type: application/json

{
  "isCompleted": true
}
```

**Response:**

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "isCompleted": true,
  "createdAt": "2023-10-01T12:00:00.000Z",
  "updatedAt": "2023-10-01T12:30:00.000Z"
}
```

### Delete a Todo

**Request:**

```bash
DELETE /todos/123e4567-e89b-12d3-a456-426614174000
```

**Response:**

```json
{}
```

---

## Running Tests

To run the unit tests, use the following command:

```bash
npm run test
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## Acknowledgments

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
