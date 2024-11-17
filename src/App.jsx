import { React, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Recipes from '../components/Recipes'
import Ingredients from '../components/Ingredients'
import AIChef from '../components/AIChef'
import "@fontsource/lexend"
import "@fontsource/kumar-one-outline"
import RecipeDetail from '../components/RecipeDetail'
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from '../components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Ingredients" element={<Ingredients />} />
        <Route path="/AIChef" element={<AIChef />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;