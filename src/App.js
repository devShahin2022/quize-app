import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomPage from './pages/Homepage/HomPage';
import Blog from './pages/BlogPage/Blog';
import Statistics from './pages/Statistics/Statistics';
import QuizePage from './components/QuizePage/QuizePage';
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout></AppLayout>,
      children : [
        {
          path : "/",
          loader : async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <HomPage></HomPage>
        },
        {
          path : "/blog",
          element : <Blog></Blog>
        },
        {
          path : "/statistics",
          element : <Statistics></Statistics>
        },
        {
          path : "topics/:id",
          loader : async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element : <QuizePage></QuizePage>
        }
      ]
    },
    {
      path : "*",
      element : <h1>Page not found !!! 404 </h1>
    }
  ]);




  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
