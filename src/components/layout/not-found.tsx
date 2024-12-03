'use client'
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/public/notfound.json";

const LottieAnimation: React.FC = () => {
    const animationContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationInstance: any;

        if (animationContainer.current) {
            animationInstance = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData, // Use the imported JSON data directly
            });
        }

        // Cleanup function
        return () => {
            if (animationInstance) {
                animationInstance.destroy();
            }
        };
    }, []);

    return <div ref={animationContainer} style={{ width: '500px', height: '500px' }}></div>;
};

export default LottieAnimation;