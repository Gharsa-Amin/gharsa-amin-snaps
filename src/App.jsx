import React, { useState } from "react";
// import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/photos/:id" element={<AboutPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
