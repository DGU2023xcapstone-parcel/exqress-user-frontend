import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scan from "@/pages/Scan";
import ScanResult from "@/pages/ScanResult";
import Layout from "@/components/common/layout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Info from "@/pages/Info";
import InfoDetail from "@/pages/InfoDetail";
import Kakao from "@/pages/KaKao";

const AppRouter = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Layout isActivate />}>
            <Route path="scan">
              <Route path="" element={<Scan />} />
              <Route path="result" element={<ScanResult />} />
            </Route>
            <Route path="info">
              <Route path="" element={<Info />} />
              <Route path="detail" element={<InfoDetail />} />
            </Route>
          </Route>
          <Route element={<Layout isActivate={false} />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="kakao" element={<Kakao />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRouter;
