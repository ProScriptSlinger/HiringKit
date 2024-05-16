import React, { useEffect, useState } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref, callback]);
};

export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 767) {
                setScreenSize("sm");
            } else if (width >= 768 && width <= 991) {
                setScreenSize("md");
            } else {
                setScreenSize("lg");
            }
        };

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenSize;
};