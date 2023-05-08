import { Outlet } from "react-router-dom";
import Navigation from "@/components/common/navigation";
import * as style from "./Layout.style";

interface LayoutProps {
  isActivate: boolean;
}
const Layout = ({ isActivate }: LayoutProps) => {
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
