import { Route, Routes, useLocation } from "react-router-dom";
import Scan from "@/pages/Scan";
import Info from "@/pages/Info";
import Kakao from "@/pages/KaKao";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ScanResult from "@/pages/ScanResult";
import InfoDetail from "@/pages/InfoDetail";
import Layout from "@/components/common/layout";
import RouteTransition from "./PageTransition";

const AppRouter = () => {
  const location = useLocation();

  return (
    <RouteTransition path={location.pathname}>
      <Routes location={location}>
        <Route element={<Layout />}>
          <Route path="/">
            <Route path="scan">
              <Route path="" element={<Scan />} />
              <Route path="result" element={<ScanResult />} />
            </Route>
            <Route path="" element={<Info />} />
            <Route path="detail" element={<InfoDetail />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="kakao" element={<Kakao />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </RouteTransition>
  );
};

export default AppRouter;
