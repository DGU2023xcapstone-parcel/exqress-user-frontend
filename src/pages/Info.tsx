import { useNavigate } from "react-router-dom";
import { InfoType } from "@/types/info";
import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";
import { useSetNavVisible } from "@/hooks/useSetNavState";

const Info = () => {
  const navigate = useNavigate();
  const { data } = useGetInfoList();

  const handleNaviate = (infoData: InfoType) => {
    navigate("/info/detail", {
      state: {
        infoData: infoData,
      },
    });
  };

  useSetNavVisible();

  return <InfoTemplate infoList={data} onClick={handleNaviate} />;
};

export default Info;
