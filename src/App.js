import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// lazy loading
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
const UserProfilePage = React.lazy(() =>
  import("./pages/User/UserProfilePage")
);

// (Admin)
const AdminDashboard = React.lazy(() => import("./pages/Admin/AdminDashboard"));
const AdminaddProdPage = React.lazy(() =>
  import("./pages/Admin/Adminaddprodpage")
);
const AdminEditProdPage = React.lazy(() =>
  import("./pages/Admin/AdminEditprodpage")
);
const Adminviewinventory = React.lazy(() =>
  import("./pages/Admin/Adminviewinventory")
);
const Adminviewvendors = React.lazy(() =>
  import("./pages/Admin/Adminviewvendors")
);
const AdminviewItem = React.lazy(() => import("./pages/Admin/AdminviewItem"));
const Adminvieworders = React.lazy(() =>
  import("./pages/Admin/Adminvieworders")
);

//  (Vendor)
const Vendorviewinventory = React.lazy(() =>
  import("./pages/Vendor/Vendorviewinventory")
);
const Vendorvieworders = React.lazy(() =>
  import("./pages/Vendor/Vendorsvieworders")
);
const VendorAddProdPage = React.lazy(() =>
  import("./pages/Vendor/Vendoraddprodpage")
);
const VendorviewItem = React.lazy(() =>
  import("./pages/Vendor/VendorviewItem")
);
const VendorEditProdPage = React.lazy(() =>
  import("./pages/Vendor/VendorEditProdPage")
);

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Suspense */}
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
            <Route path="/editproduct/:id" element={<AdminEditProdPage />} />
            <Route path="/inventory" element={<Adminviewinventory />} />
            <Route path="/viewvendors" element={<Adminviewvendors />} />
            <Route path="/items/:id" element={<AdminviewItem />} />
            <Route path="/admin/orders" element={<Adminvieworders />} />

            <Route path="/vendor/inventory" element={<Vendorviewinventory />} />
            <Route path="/vendor/orders" element={<Vendorvieworders />} />
            <Route path="/vendor/addProduct" element={<VendorAddProdPage />} />
            <Route
              path="/vendor/editProduct/:id"
              element={<VendorEditProdPage />}
            />
            <Route path="/vendor/items/:id" element={<VendorviewItem />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
