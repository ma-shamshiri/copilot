import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import YourPackagePage from "./YourPackagePage";
import IdealPackagePage from "./IdealPackagePage";
import AllPackagePage from "./AllPackagePage";

const router = createBrowserRouter(
    [
        { path: "/", element: <HomePage /> },
        { path: "/services/", element: <ServicePage /> },
        { path: "/your-package/", element: <YourPackagePage /> },
        { path: "/ideal-package/", element: <IdealPackagePage /> },
        { path: "/all-packages/", element: <AllPackagePage /> },
    ]);

export default router;
