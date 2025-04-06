import { useContext } from "react";
import { PopupContext } from "../providers/popup-provider";


export function usePopupContext() {
    const popupContext = useContext(PopupContext);

    if (popupContext == null) {
        throw new Error('Must be within provider');
    }

    return popupContext;
}
