import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";

const alanKey = '1eec7d2b946eac4abc00aabb130c988c2e956eca572e1d8b807a3e2338fdd0dc/stage';

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