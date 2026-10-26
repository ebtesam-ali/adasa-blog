import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import BlogDetails from './Pages/BlogDetails';
import NotFound from './NotFound/NotFound'; 
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;