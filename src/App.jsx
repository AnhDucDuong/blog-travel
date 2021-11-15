import React from "react";
import "./Assets/css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SiteLayout from "./Layout/SiteLayout";
import AdminLayout from "./Layout/AdminLayout";
import HomePage from "./Pages/SitePages/HomePage";
import PostDetail from "./Pages/SitePages/PostDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Layout Website */}
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="postDetail" element={<PostDetail />} />
            <Route path="article" element={<div>Article</div>} />
            <Route path="area" element={<div>Area</div>} />
            <Route path="about" element={<div>About Us</div>} />
          </Route>

          {/* Layout Admin */}
          <Route path="admin/*" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<div>Dashboard</div>} />
            <Route path="product" element={<div>Product Manager</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App