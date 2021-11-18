import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AppBar from "./Components/AppBar";
import Container from "./Components/Container";
import PhonebookView from "./views/PhonebookView";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback="Wreally?)))">
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/register" element={<RegisterView />} />
          <Route exact path="/login" element={<LoginView />} />
          <Route exact path="/phonebook" element={<PhonebookView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
