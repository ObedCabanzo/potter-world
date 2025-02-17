"use client"; 

import { useEffect } from "react";
import { initializeAmplitude } from "./amplitude";

const ClientInitializer = () => {
  useEffect(() => {
    initializeAmplitude();
  }, []);

  return null; 
};

export default ClientInitializer;
