import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
// import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
// import Card from './components/Card/Card';
// import Quiz from './components/Quiz/Quiz';
import Quiz from './components/Quiz/Quiz1';
import ErrorPage from './components/Error/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
   {
     path: '/',
     element: <Main></Main>,
     errorElement: <ErrorPage />,
     children: [
      {
        path:'/',
        loader: async()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>
      },
      {
        path:'/quizCard/:id',
        loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        },
        element: <Quiz></Quiz>
      },
      {
        path: '/statistics',
        loader: async()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
