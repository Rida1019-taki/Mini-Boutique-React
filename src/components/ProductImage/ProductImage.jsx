import { useState } from "react";
import "./ProductImage.css"

function ProductImage({ src, alt }) {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div className="placeholder" style={{ background: "#999" }}>
                Image
            </div>
        );
    }

    return (
        <img src={src} alt={alt} onError={() => setError(true)} />
    );
}

export default ProductImage;
