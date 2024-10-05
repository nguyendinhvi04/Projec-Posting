import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './components/Menu/Menu.jsx';
import Search  from './components/SearchFood/Search.jsx';
import NewReview from './components/NewReview/newReview.jsx';
import ReviewList from './components/ReviewList/ReviewList.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <App/>
    </main>
  </React.StrictMode>
)
