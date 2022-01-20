import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ImageLoading = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setIsLoading(false);
    };

    return (
        <>
            <img
                src={props.image}
                alt={props.imgAlt}
                className={props.imgClass}
                style={{ display: isLoading ? "none" : "block" }}
                onLoad={handleLoading}
            />
            {isLoading && (
                <FontAwesomeIcon
                    icon={faSpinner}
                    pulse
                    size="4x"
                    style={{ display: isLoading ? "block" : "none" }}
                />
            )}
        </>
    );
};

export default ImageLoading;
