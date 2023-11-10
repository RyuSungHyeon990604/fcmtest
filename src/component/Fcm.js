import { getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from "firebase/app";
import { useState,useEffect } from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyDeAsYWbQzPIaKMg4DQcv7tAIcvWdOaxxQ",
    authDomain: "eco-flat.firebaseapp.com",
    projectId: "eco-flat",
    storageBucket: "eco-flat.appspot.com",
    messagingSenderId: "59570023918",
    appId: "1:59570023918:web:381f5f2e7776a4fdef32ff"
};
export function Fcm(){
    const app=initializeApp(firebaseConfig);
    const m = getMessaging(app);
    function requestPermission() {
        console.log("권한 요청 중...");
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("알림 권한이 허용됨");
      
            // FCM 메세지 처리
          } else {
            console.log("알림 권한 허용 안됨");
          }
        });
      }
    const [deviceToken, setDeviceToken] = useState({
        token: "",
      });
    async function getDeviceToken() {
    const token = await getToken(m, {
        vapidKey:"BGudwTdszgtCd_6O--5-au-bf3UOQwD_rL7sAOvx3GD323FwPnwewXi_KM-RHIVbsjTKt9PpH_PybwSHqI1Zuss"
    });
    
    setDeviceToken({    
        token: token,
    });
    }
    const init=async ()=>{
        await requestPermission();
        getDeviceToken();
    }
    useEffect(()=>{
        init();
    },[])
    return (
        <div>
            <p>device token</p>
            <div>{deviceToken.token}</div>
        </div>
    );
}