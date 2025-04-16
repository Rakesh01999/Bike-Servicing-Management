# Bike Servicing Management API

A RESTful API for managing bike servicing operations including customers, bikes, and service records.

## Live Backend Link

[Live Backend URL](https://bike-servicing-api.railway.app)

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## Setup Guide

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/bike-servicing-api.git
cd bike-servicing-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/bike_servicing?schema=public"
PORT=5000
NODE_ENV=development
```

Replace the database credentials with your own.

4. **Set up the database**

```bash
npx prisma migrate dev --name init
```

5. **Build the project**

```bash
npm run build
```

6. **Start the server**

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## API Endpoints

### Customer Management

- **POST /api/customers** - Create a new customer
- **GET /api/customers** - Get all customers
- **GET /api/customers/:id** - Get a specific customer by ID
- **PUT /api/customers/:id** - Update customer details
- **DELETE /api/customers/:id** - Delete a customer

### Bike Management

- **POST /api/bikes** - Add a new bike
- **GET /api/bikes** - Get all bikes
- **GET /api/bikes/:id** - Get a specific bike by ID
- **PUT /api/bikes/:id** - Update bike details
- **DELETE /api/bikes/:id** - Delete a bike

### Service Management

- **POST /api/services** - Create a service record
- **GET /api/services** - Get all service records
- **GET /api/services/:id** - Get a specific service record
- **PUT /api/services/:id/complete** - Mark a service as completed
- **GET /api/services/status** - Get overdue services (pending or in-progress for more than 7 days)

## Key Features

- Complete CRUD operations for customers, bikes, and service records
- Relationship management between customers, bikes, and services
- Track service status (pending, in-progress, done)
- Identify overdue services
- Error handling with appropriate status codes
- Standardized response format for consistent API usage

## Error Handling

All errors follow a standardized format:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "Optional stack trace shown only in development"
}
```