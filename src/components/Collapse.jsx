import { useState } from "react";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
            <button
                className="collapse__header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="collapse__title">{title}</h2>
                <img
                    src="/assets/arrow.svg"
                    alt=""
                    className="collapse__icon"
                />
            </button>

            <div className="collapse__content">
                {children}
            </div>
        </div>
    );
}

export default Collapse;