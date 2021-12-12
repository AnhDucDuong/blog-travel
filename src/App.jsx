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
import ArticlePage from "./Pages/SitePages/ArticlePage";
import AboutUsPage from "./Pages/SitePages/AboutUsPage";
import MediaPage from "./Pages/SitePages/MediaPage";
import Dashboard from "./Pages/AdminPages/Dashboard";
import Posts from "./Pages/AdminPages/Posts";
import Countries from "./Pages/AdminPages/Countries";
import AddPost from "./Pages/AdminPages/Posts/AddPost";
import AddCountry from "./Pages/AdminPages/Countries/AddCountry";
import Signin from "./Components/Signin";
import CountryDetail from "./Pages/SitePages/CountryDetail";
import EditCountry from "./Pages/AdminPages/Countries/EditCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Layout Website */}
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="postDetail/:id" element={<PostDetail />} />
            <Route path="countryDetail/:id" element={<CountryDetail />} />
            <Route path="articles" element={<ArticlePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="media" element={<MediaPage />} />
          </Route>

          {/* Layout Admin */}
          <Route path="admin/*" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/add-post" element={<AddPost />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/add-country" element={<AddCountry />} />
            <Route path="countries/edit-country/:id" element={<EditCountry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App