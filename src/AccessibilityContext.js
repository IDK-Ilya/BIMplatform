import React, { createContext, useContext, useState } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [isAccessible, setIsAccessible] = useState(false); // Initial state set to 'false'

    const toggleAccessibility = () => {
        setIsAccessible(!isAccessible); // Toggle the state
    };

    return (
        <AccessibilityContext.Provider value={{ isAccessible, toggleAccessibility }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => useContext(AccessibilityContext);
