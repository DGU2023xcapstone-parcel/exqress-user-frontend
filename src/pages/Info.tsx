import { ChangeEvent, useState } from "react";
import InfoTemplate from "@/components/template/info";
import { useNavigate } from "react-router-dom";

const INFO_LIST: InfoType[] = [
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412321",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412322",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412323",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412324",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412325",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412326",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412327",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412328",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "23412329",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
  {
    date: "2023-03-17 금요일",
    productName: "피피티 만능사냥꾼",
    invoiceNo: "234123210",
    name: "이규호",
    receiver: "김재한",
    deliver: "신현식",
    state: "ready",
    company: "CJ대한통운 (민락동)",
  },
];

export interface InfoType {
  date: string;
  productName: string;
  invoiceNo: string;
  name: string;
  company: string;
  receiver: string;
  deliver: string;
  state: string;
}
const Info = () => {
  const navigate = useNavigate();
  const handleNaviate = (invoiceNo: string) => {
    navigate({
      pathname: "/info/detail",
      search: `?invoiceNo=${invoiceNo}`,
    });
  };
  return <InfoTemplate infoList={INFO_LIST} onClick={handleNaviate} />;
};

export default Info;
