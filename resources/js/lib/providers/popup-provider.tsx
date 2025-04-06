import { createContext, useState } from "react";

type PopupContextType = {
    isVisible: boolean;
    togglePopup: () => void;
    hidePopup: () => void;
    showPopup: () => void;
};

export const PopupContext = createContext<PopupContextType | null>(null);

export function PopupProvider({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);

    function togglePopup() {
        setIsVisible((o) => !o);
    }

    function hidePopup() {
        setIsVisible(false);
    }

    function showPopup() {
        setIsVisible(true);
    }

    return (
        <PopupContext.Provider value={{ isVisible, togglePopup, hidePopup, showPopup }}>
            {children}
        </PopupContext.Provider>
    );
}
