import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";


const alanKey = process.env.local.ALAN_AI_KEY;
// If you get error from here just use your api key directly

const AlanAI = () => {
    useEffect(() => {
        alanBtn({
          key: alanKey,
          onCommand: ({ command }) => {
            if (command === "testCommand") {
              alert("This code was executed");
            }
          },
        });
      }, []);
    return (
        <div>
        </div>
    );
};

export default AlanAI;