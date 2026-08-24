# 📝 Blogs — React Router v7

A modern, responsive blog platform built with **React Router v7**, focused on learning and applying modern React routing, data loading, performance optimization, and SEO best practices.

## 🚀 Live Demo

[[View Live Demo](https://blogs-gb9u.onrender.com)](#)

## 📌 About the Project

This project is a blog website built while learning and applying **React Router v7** concepts.

The main goal was not only to build a functional blog, but also to understand how modern React applications handle routing, data loading, navigation, performance, caching, and SEO.

## ✨ Features

* 🏠 Blog listing page
* 📖 Blog details page
* 🔀 Client-side routing with React Router v7
* ⚡ Data loading with route loaders
* 🔄 Efficient data fetching and caching
* 📱 Responsive design
* 🖼️ Optimized image loading
* 🚀 Performance optimization using Lighthouse
* 🔍 SEO-friendly page structure
* ⏳ Lazy loading for non-critical images
* ⚡ High fetch priority for important images
* 📐 Responsive image aspect ratios
* 🛡️ Security and HTTP header optimization

## 🛠️ Tech Stack

### Frontend

* React
* React Router v7
* Vite
* JavaScript
* CSS

### Performance & Optimization

* Google Lighthouse
* WebP image format
* Lazy loading
* `fetchPriority="high"`
* Responsive images
* Image aspect ratios
* Browser caching

### Deployment

* Firebase Hosting

## 🧠 React Router v7

This project uses React Router v7 to handle application routing and data loading.

Some of the concepts explored in the project include:

* Routes
* Nested routes
* Dynamic routes
* Route loaders
* Navigation
* Route-based data loading
* Error handling
* URL parameters

React Router v7 provides modern routing and data APIs for React applications.
Learn more: https://reactrouter.com/

## ⚡ Performance Optimization

Performance was measured and improved using **Google Lighthouse**.

Some of the optimizations implemented include:

### Image Optimization

Images are served using optimized formats and dimensions where possible.

```jsx
<img
  src={image}
  alt={title}
  loading="lazy"
  width="1200"
  height="675"
/>
```

Important above-the-fold images can use:

```jsx
<img
  src={image}
  alt={title}
  fetchPriority="high"
/>
```

### Aspect Ratio

Images use consistent aspect ratios to prevent layout shifts and maintain a predictable layout across different screen sizes.

```css
img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

### Caching

HTTP caching was also considered to reduce unnecessary network requests and improve subsequent page loads.

## 🔍 SEO

The project follows basic SEO best practices including:

* Descriptive page titles
* Meta descriptions
* Semantic HTML
* Descriptive image `alt` attributes
* Responsive design
* Fast page loading

## 🔐 Security

The project also explores web security best practices such as:

* HTTPS
* Security-related HTTP headers
* Content Security Policy
* HSTS
* Clickjacking protection
* Referrer Policy

## 📂 Project Structure

```text
blogs-react-router-v7/
├── app/
│   ├── routes/
│   ├── components/
│   ├── ...
│
├── public/
├── Dockerfile
├── package.json
├── vite.config.ts
├── react-router.config.ts
└── tsconfig.json
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aprar-jalal/blogs-react-router-v7.git
```

### 2. Navigate to the project

```bash
cd blogs-react-router-v7
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
```

## 📊 Lighthouse

The application was tested using Google Lighthouse to evaluate:

* Performance
* Accessibility
* Best Practices
* SEO

Performance improvements were made based on Lighthouse recommendations, particularly around image loading, caching, and Core Web Vitals.

## 🎯 Learning Goals

This project helped me practice and understand:

* React Router v7
* Route loaders and data loading
* Modern React application architecture
* Performance optimization
* Core Web Vitals
* Image optimization
* Browser caching
* SEO fundamentals
* Web security best practices
* Firebase Hosting

## 📚 Resources

* [React Router](https://reactrouter.com/)
* [Vite](https://vite.dev/)
* [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/)
* [Web.dev](https://web.dev/)

## 👩‍💻 Author

**Aprar Jalal**

Software Engineering Student

GitHub: [@aprar-jalal](https://github.com/aprar-jalal)

---

⭐ If you find this project useful, feel free to star the repository!
