# React Job Card UI

A modern job card UI component built using React and props.

This project displays job listings dynamically using reusable card components.

---

## Features

- Reusable React Card Component
- Dynamic data using props
- Company logo support
- Save button with icon
- Job role display
- Tags for experience/type
- Salary and location section
- Apply button UI

---

## Tech Stack

- React
- JavaScript
- CSS
- Lucide React Icons

---

## Props Used

| Prop | Description |
|---|---|
| `logo` | Company logo image |
| `company` | Company name |
| `datePosted` | Job posted date |
| `post` | Job title |
| `tag1` | Experience level |
| `tag2` | Job type |
| `pay` | Salary/package |
| `location` | Job location |

---

## Example Usage

```jsx
<Card
  logo="company-logo-url"
  company="Google"
  datePosted="2 days ago"
  post="Frontend Developer"
  tag1="Senior Level"
  tag2="Full Time"
  pay="$120/hr"
  location="Bangalore, India"
/>
```

---

## Component Structure

```jsx
<Card />
```

The component contains:

- Top Section
  - Company logo
  - Save button

- Center Section
  - Company name
  - Posting date
  - Job role
  - Tags

- Bottom Section
  - Salary
  - Location
  - Apply button

---

## Installation

```bash
npm install
```

---

## Install Lucide React

```bash
npm install lucide-react
```

---

## Run Project

```bash
npm run dev
```

---

## Learning Concepts

- React Props
- Reusable Components
- JSX
- Component Structure
- Dynamic UI Rendering
- Icons in React

---

## Folder Structure

```txt
src
│
├── components
│   └── Card.jsx
│
├── App.jsx
├── App.css
├── main.jsx
```

---

## Future Improvements

- Responsive Design
- Dark Mode
- API Integration
- Search & Filters
- Bookmark Functionality
- Apply Page

---

## Preview

A job portal style card interface inspired by modern hiring platforms.
