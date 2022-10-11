import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Header from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
   {
     path: '/',
     element: <Main></Main>,
     children: [
      {
        path:'/',
        loader: async()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home></Home>
      },
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
