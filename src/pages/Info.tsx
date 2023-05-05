import { ChangeEvent, useState } from "react";
import InfoTemplate from "@/components/template/info";

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
    invoiceNo: "23412321",
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
  return (
    <InfoTemplate
      infoList={INFO_LIST}
      onClick={() => {
        console.log("send");
      }}
    />
  );
};

export default Info;
