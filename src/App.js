import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from "./components/Uitily/Footer";
import "./App.css";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminaddProdPage from "./pages/Admin/Adminaddprodpage";

// تحميل الصفحات بشكل كسول
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const LoginPage = React.lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/Auth/RegisterPage"));
const ProductDetailsPage = React.lazy(() =>
  import("./pages/Product/ProductDetailsPage")
);
const AllCategoryPage = React.lazy(() =>
  import("./pages/Category/AllCategoryPage")
);
const EssentialPage = React.lazy(() =>
  import("./pages/Essential/EssentialPage")
);
const PrandPage = React.lazy(() => import("./pages/Prand/PrandPage"));
const ProductsPage = React.lazy(() => import("./pages/Product/ProductsPage"));
const CartPage = React.lazy(() => import("./pages/Cart/CartPage"));
const UserWhishlistPage = React.lazy(() =>
  import("./pages/User/UserWhishlistPage")
);
const UserTrackOrderPage = React.lazy(() =>
  import("./pages/User/UserTrackOrderPage")
);

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Suspense لعرض رسالة تحميل أثناء تحميل الصفحات */}
        <Suspense fallback={<div className="spinner"></div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/allcategory" element={<AllCategoryPage />} />
            <Route path="/allessential" element={<EssentialPage />} />
            <Route path="/allprands" element={<PrandPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/user/UserWhishlistPage"
              element={<UserWhishlistPage />}
            />

            <Route path="/user/UserProfilePage" element={<UserProfilePage />} />
            <Route
              path="/user/UserTrackOrderPage"
              element={<UserTrackOrderPage />}
            />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/addproduct" element={<AdminaddProdPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
