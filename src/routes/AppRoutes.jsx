import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import BookDetails from "../pages/BookDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BorrowRecord from "../pages/BorrowRecord";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="shop/:bookId" element={<BookDetails />} />
                <Route path="/borrowrecord" element={<BorrowRecord />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;