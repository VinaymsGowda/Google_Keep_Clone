import "./css/App.css";
import { Home } from "./pages/Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/authentication/Login";
import { Register } from "./components/authentication/Register";
import { Notes } from "./components/Notes/Notes";
import { Navbar } from "./components/Navbar/Navbar";
import { Edit } from "./components/EditPage/Edit";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ToDos } from "./components/ToDo/ToDos";
import NewToDo from "./components/ToDo/NewToDo";
import ThemeProvider, { ThemeState } from "./components/ThemeProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  const id = localStorage.getItem("id");
  const { theme } = ThemeState();

  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <hr />

        <main id={theme}>
          {/* <Sidebar /> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/todo" element={<ToDos />}></Route>
            <Route path="/NewToDo" element={<NewToDo />}></Route>
          </Routes>
        </main>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
