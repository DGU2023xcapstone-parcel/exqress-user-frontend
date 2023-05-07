import { useRecoilState } from "recoil";
import { Outlet } from "react-router-dom";
import { navState } from "@/recoil/nav";
import Navigation from "@/components/common/navigation";
import * as style from "./Layout.style";

const Layout = () => {
  const [isActivate] = useRecoilState(navState);

  return (
    <style.Wrapper>
      <style.Box>
        <Outlet />
      </style.Box>
      {isActivate && <Navigation />}
    </style.Wrapper>
  );
};

export default Layout;
