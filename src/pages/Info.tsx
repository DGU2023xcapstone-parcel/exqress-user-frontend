import { useNavigate } from "react-router-dom";
import { InfoType } from "@/types/info";
import InfoTemplate from "@/components/template/info";
import { useGetInfoList } from "@/hooks/useGetInfoList";

const Info = () => {
  const navigate = useNavigate();
  const { data } = useGetInfoList();

  const handleNaviate = (infoData: InfoType) => {
    navigate("/detail", {
      state: {
        infoData: infoData,
      },
    });
  };

  return <InfoTemplate infoList={data} onClick={handleNaviate} />;
};

export default Info;
