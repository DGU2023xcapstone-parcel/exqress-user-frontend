import { Outlet } from "react-router-dom";
import Navigation from "@/components/common/navigation";
import * as style from "./Layout.style";
import { useRefreshToken } from "@/hooks/useRefreshToken";

interface LayoutProps {
  isActivate: boolean;
}
const Layout = ({ isActivate }: LayoutProps) => {
  useRefreshToken();

  return (
    <style.Wrapper>
      {/* <style.Box> */}
      <Outlet />
      {/* </style.Box> */}
      {isActivate && <Navigation />}
    </style.Wrapper>
  );
};

export default Layout;
