import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet
} from "react-router-dom";
import Home from "../pages/home/Home";
import Portal from "../pages/portal/Portal";
import Rent from "../pages/rent/Rent";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Footer from "../components/header footer/Footer";
import Header from "../components/header footer/Header";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import EmptyDevPage from "../pages/emptyDevPage/emptyDevPage";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={"/"} element={<Root/>}>
    <Route index element={<Navigate to={"/home"} replace/>}/>
    <Route path={"home"} element={<Home/>}/>
    <Route path={"portal"} element={<Portal/>}/>
    <Route path={"rent/:id"} element={<Rent/>}/>
    <Route path={"about"} element={<About/>}/>
    <Route path={"contact"} element={<Contact/>}/>
    <Route path={"sign-in"} element={<SignIn/>}/>
    <Route path={"sign-up"} element={<SignUp/>}/>
    <Route path={"dashboard"} element={<Dashboard/>}/>
    <Route path={"dev"} element={<EmptyDevPage/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

function Root() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App;
