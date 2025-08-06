import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { DashboardPage } from "./Dashboard";
import { RootState } from "../../redux/app/Store";

export const DashboardContainer: React.FC = () => {
  const { registeredData } = useSelector((state: RootState) => state.registerData);
  const { logedData, isAuthenticated } = useSelector((state: RootState) => state.loginData);

  useEffect(() => {
    validUser();
  }, []);

  const validUser = () => {
    const validUserIndex = registeredData.findIndex((item)=>(item.emailId === logedData.userId) || (item.mobNumber === logedData.userId));
    if(validUserIndex >=0 && isAuthenticated){
        console.log("valid user==>",registeredData[validUserIndex]);
        
    }
  };

  return (
    <>
      <DashboardPage />
    </>
  );
};
