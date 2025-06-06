import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
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
import {AuthProvider} from "../context/AuthContext"
import Order from '../pages/order/Order';
import Page404 from "../pages/404/Page404";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import DetailsSection from "../components/DashboardComponents/User/DetailsSection";
import UserRentals from "../components/DashboardComponents/User/UserRentals";
import UserFavorites from "../components/DashboardComponents/User/UserFavorites";
import UsersSection from "../components/DashboardComponents/Admin/UsersSection";
import CompaniesSection from "../components/DashboardComponents/Admin/CompaniesSection";
import Company from "../components/DashboardComponents/Company/Company";
import CompanyCars from "../components/DashboardComponents/Company/CompanyCars";
import CompanyCarsHistory from "../components/DashboardComponents/Company/CompanyCarsHistory";
import Constants from '../Constants';

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
    <Route path={"dashboard"} element={<Dashboard/>}>
        <Route path={"user/details"} element={<DetailsSection />} />
        <Route path={"user/rentals"} element={<UserRentals />} />
        <Route path={"user/favorites"} element={<UserFavorites />} />
        <Route path={"admin/users"} element={<UsersSection />} />
        <Route path={"admin/companies"} element={<CompaniesSection />}/>
        <Route path={"company/:id"} element={<Company />}>
            <Route path={"cars"} element={<CompanyCars />}/>
            <Route path={"history"} element={<CompanyCarsHistory />}/>
        </Route>
    </Route>
    <Route path={"dev"} element={<EmptyDevPage/>}/>
    <Route path={"order/:id"} element={<Order/>}/>
      <Route path={"*"} element={<Page404 />} />
  </Route>
))

function App() {
  return (
      <AuthProvider>
          <RouterProvider router={router}/>
      </AuthProvider>
  );
}

function Root() {
  console.log("API_URL: ", Constants.API_URL);
  console.log("NODE_ENV: ", process.env.NODE_ENV);

  return (
    <>
      <ScrollToTop/>
      <div className={"ContentWrapper"}>
      <Header/>
      <main className={"AppMain"}>
        <Outlet/>
      </main>
      </div>
      <Footer/>
    </>
  )
}

export default App;
