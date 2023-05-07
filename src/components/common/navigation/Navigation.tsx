import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Truck from "@/assets/truck.svg";
import QrCode from "@/assets/qrCode.svg";
import SignOut from "@/assets/signOut.svg";
import { useSignOut } from "@/hooks/useSignOut";
import * as style from "./Navigation.style";

const Navigation = () => {
  const navigate = useNavigate();
  const { handleSignOut, isSuccess, isLoading } = useSignOut();

  // todo isLoading 변경
  useEffect(() => {
    if (isLoading) {
      navigate({
        pathname: "/signin",
      });
    }
  }, [isLoading]);

  return (
    <style.Wrapper>
      <Link to="/info">
        <style.Img src={Truck} />
      </Link>
      <Link to="/scan">
        <style.Img src={QrCode} />
      </Link>
      <div onClick={handleSignOut}>
        <style.Img src={SignOut} />
      </div>
    </style.Wrapper>
  );
};

export default Navigation;
