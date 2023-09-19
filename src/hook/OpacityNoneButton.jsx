import { useEffect, useState } from "react";

const ButtonNone = () => {
    const [buttonlNone, setButtonlNone] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 1500) {
                setButtonlNone("1")

            } else {
                setButtonlNone("0");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return buttonlNone
};



export default ButtonNone;


