import { useNavigate } from "react-router-dom";

import { InfoType } from "@/types/info";
import InfoTemplate from "@/components/template/info";
import { useScroll } from "@/hooks/useScroll";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useRefreshToken } from "@/hooks/useRefreshToken";

const Info = () => {
  useRefreshToken();

  const navigate = useNavigate();
  const { data } = useGetInfoList();
  const { isScrollable, contentRef } = useScroll();

  const handleNaviate = (infoData: InfoType) => {
    navigate("/detail", {
      state: {
        infoData: infoData,
      },
    });
  };

  return (
    <InfoTemplate
      contentRef={contentRef}
      isScroll={isScrollable}
      infoList={data}
      onClick={handleNaviate}
    />
  );
};

export default Info;
