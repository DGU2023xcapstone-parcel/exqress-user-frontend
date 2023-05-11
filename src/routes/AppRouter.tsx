import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scan from "@/pages/Scan";
import Info from "@/pages/Info";
import Kakao from "@/pages/KaKao";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ScanResult from "@/pages/ScanResult";
import InfoDetail from "@/pages/InfoDetail";
import Layout from "@/components/common/layout";

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
            <Route path="" element={<Info />} />
            <Route path="detail" element={<InfoDetail />} />
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
