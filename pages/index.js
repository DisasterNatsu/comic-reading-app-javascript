import React, { useEffect } from "react";
import Home from "./home";
import { useRouter } from "next/router";

export default function () {
  // Defining Router

  const Router = useRouter();

  useEffect(() => {
    Router.replace("/home");
  }, []);

  return;
}
