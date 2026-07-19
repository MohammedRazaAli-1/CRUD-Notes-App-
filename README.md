# CRUD Notes App

A simple database-less notes API built with Express.js. This app supports create, read, update, and delete operations using REST API endpoints and keeps data in memory while the server is running.

## Features

- Create a note
- Read all notes
- Update a note by index
- Delete a note by index
- Uses Express.js and JSON request bodies

## Tech Stack

- Node.js
- Express

## Prerequisites

- Node.js installed on your machine (v16+ recommended)

## Installation

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

## Run the App

Start the server with:

```bash
node server.js
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

### Create a note

- Method: `POST`
- URL: `/notes`
- Body: JSON

Example:

```json
{
  "title": "My Note",
  "description": "This is a note description."
}
```

### Get all notes

- Method: `GET`
- URL: `/notes`

### Update a note

- Method: `PATCH`
- URL: `/notes/:index`
- Body: JSON

Example:

```json
{
  "title": "Updated title",
  "description": "Updated description."
}
```

### Delete a note

- Method: `DELETE`
- URL: `/notes/:index`

## Testing the App

### Using Postman

1. Open Postman.
2. Create a request for one of the endpoints above.
3. Set the request body to raw JSON for POST and PATCH requests.
4. Send the request and verify the response.

### Using curl

Create a note:

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Note 1","description":"Remember this."}'
```

Get notes:

```bash
curl http://localhost:3000/notes
```

Update a note:

```bash
curl -X PATCH http://localhost:3000/notes/0 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title"}'
```

Delete a note:

```bash
curl -X DELETE http://localhost:3000/notes/0
```

## Notes

- Data is stored in memory, so all notes are lost when the server restarts.
- This project does not include an automated test suite yet.

