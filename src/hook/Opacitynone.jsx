import { useEffect, useState } from "react";

const useOpacityNone = () => {
    const [scrollNone, setScrollNone] = useState(false)
    
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScrollNone("0")
            } else {
                setScrollNone("1");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollNone
};



export default useOpacityNone ;


