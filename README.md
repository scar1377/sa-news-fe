# SA News

SA News is a full-stack news application built as a personal project to practise developing a modern frontend against a REST API. This repository contains the frontend application. It is built with Next.js, React and TypeScript and consumes the separate SA News backend API.

## Features

The current MVP allows users to:

- Browse a collection of articles
- View individual articles and their comments
- Browse topics and view articles belonging to a selected topic
- Sort articles by date, votes or comment count
- Change the sort order between ascending and descending
- Select a user to act as the currently logged-in user
- Post comments while logged in
- Delete comments belonging to the current user
- Upvote and downvote articles while logged in
- See optimistic vote updates while requests are being processed
- See article comment counts update after posting or deleting a comment
- Receive loading and error feedback for asynchronous actions and routes

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Next.js App Router
- Fetch API - React Context for current-user state
- ESLint
- Tailwind CSS

## Backend

The frontend consumes the SA News REST API from the separate backend repository:

https://github.com/scar1377/sa-news-be

The backend handles articles, topics, users, comments and voting.

## Getting Started

### Prerequisites

You will need Node.js and npm installed locally.

### Installation Clone the repository:

```bash
git clone https://github.com/scar1377/sa-news-fe.git cd sa-news-fe
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm start
```

Starts the production server after building the application.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

The application uses the Next.js App Router. Route-level Server Components handle data fetching and URL parameters, while smaller Client Components are used where browser-side interactivity is required, such as login, voting, commenting and article sorting.

Shared UI is extracted into reusable components, including the article list used by both the main articles route and topic-specific article routes.

## Current Status

The core frontend MVP functionality is complete. The next stage of the project is focused on visual styling, responsive design and general UI/UX polish.

## Future Improvements

Planned improvements include:

- Full visual styling and responsive layouts
- Accessibility and UX improvements
- Further refinement of loading, empty and error states
- Additional polish to the login/user-selection experience

## Related Repository

- Backend API: https://github.com/scar1377/sa-news-be
