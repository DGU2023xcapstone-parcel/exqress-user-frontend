import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { navState } from "@/recoil/nav";

export const useSetNavInvisible = () => {
  const setNavAtom = useSetRecoilState(navState);

  useEffect(() => {
    setNavAtom(false);
  }, [setNavAtom]);
};

export const useSetNavVisible = () => {
  const setNavAtom = useSetRecoilState(navState);

  useEffect(() => {
    setNavAtom(true);
  }, [setNavAtom]);
};
