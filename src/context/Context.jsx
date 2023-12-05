import { createContext, useContext } from "react";
import { useState } from "react";

export const formDataContext = createContext();

export function useFormDataContext() {
    return useContext(formDataContext);
}

export function FormData({children}) {
    const [formData, setFormData] = useState({});
    return (
        <formDataContext.Provider value={{formData, setFormData}}>
            {children}
        </formDataContext.Provider>
    )
    
}