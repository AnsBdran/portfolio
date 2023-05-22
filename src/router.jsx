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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route element={<Home />} index />
      <Route element={<Projects />} path='project' />
      <Route element={<About />} path='about' />
      <Route element={<Contact />} path='contact' />
    </Route>
  )
);
