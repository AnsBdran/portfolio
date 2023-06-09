import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Error404 from './pages/404';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error404 />}>
      <Route element={<Home />} index />
      <Route element={<Projects />} path='projects' />
      <Route element={<About />} path='about' />
      <Route element={<Contact />} path='contact' />
    </Route>
  )
);
