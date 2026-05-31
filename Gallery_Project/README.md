# Gallery Project 🎨

A responsive React image gallery project built using the Picsum Photos API.
This project helped me understand important React concepts like the `useEffect` hook, API calling using `Axios`, state management, and component-based architecture.

---

## 🚀 Features

* Dynamic image fetching using Axios
* Pagination functionality (Next / Prev)
* Responsive gallery layout using Tailwind CSS
* Component-based structure in React
* Loading state handling
* External image links
* Clean modern UI

---

## 🛠️ Technologies Used

* React.js
* Tailwind CSS
* Axios
* Vite

---

## 📚 What I Learned

### ✅ useEffect Hook

Learned how to:

* trigger API calls on component render
* re-run effects when state changes
* manage dependencies inside `useEffect`

Example:

```js
useEffect(() => {
  getData()
}, [index])
```

---

### ✅ Axios API Calling

Learned how to:

* make asynchronous API requests
* use `async/await`
* fetch paginated data dynamically

Example:

```js
const response = await axios.get(
  `https://picsum.photos/v2/list?page=${index}&limit=15`
)
```

---

### ✅ Component-Based Structure

Separated UI into reusable components:

* `Card`
* `Prev Button`
* Main `App`

This improved:

* code readability
* reusability
* maintainability

---

## 📸 API Used

Picsum Photos API

https://picsum.photos/

---

## ▶️ Run Locally

Clone the project:

```bash
git clone <repo-link>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🌟 Future Improvements

* Search functionality
* Masonry/Pinterest layout
* Infinite scrolling
* Dark/Light mode
* Image modal preview

---

## 👩‍💻 Author

Sakshi Singh
