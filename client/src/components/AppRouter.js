import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES, SILENT_ROUTES } from "../utils/const";

const router = createBrowserRouter([
    ...ROUTES.map(el => {
    return {path: el.path, element: el.component}
}),
    ...SILENT_ROUTES.map(el => {
        return {path: el.path, element: el.component}
    })
])

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;
