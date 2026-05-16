# React Card Component

A simple reusable Card component built using React props.

---

## Features

- Reusable React component
- Dynamic content using props
- Displays:
  - Image
  - User name
  - Description
  - Button
- Beginner-friendly project

---

## Tech Stack

- React
- JavaScript
- CSS

---

## Props Used

| Prop | Description |
|---|---|
| `user` | Displays user name |
| `para` | Displays paragraph text |

---

## Example Usage

```jsx
<Card
  user="Sakshi Singh"
  para="Frontend Developer"
/>
```

---

## Component Code

```jsx
import React from 'react'

const Card = (props) => {
  return (
    <div className="card">

      <img
        src="https://images.unsplash.com/photo-1778351983804-e1e267d1f94c?w=1000&auto=format&fit=crop&q=60"
        alt=""
      />

      <h1>{props.user}</h1>

      <p>{props.para}</p>

      <button>View Profile</button>

    </div>
  )
}

export default Card
```

---

## Installation

```bash
npm install
```

---

## Run Project

```bash
npm run dev
```

---

## Learning Concepts

- React Components
- Props
- Reusable UI
- JSX
- Functional Components

---

## Folder Structure

```txt
src
│
├── components
│   └── Card.jsx
│
├── App.jsx
├── main.jsx
```
