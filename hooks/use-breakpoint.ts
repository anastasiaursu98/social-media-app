import * as React from "react";

const BREAKPOINTS = {
    mobile: 640,    // sm
    tablet: 1024,   // lg
} as const;

export type DeviceType = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): DeviceType {
    const [deviceType, setDeviceType] = React.useState<DeviceType>("desktop");

    React.useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width < BREAKPOINTS.mobile) {
                setDeviceType("mobile");
            } else if (width <= BREAKPOINTS.tablet) {
                setDeviceType("tablet");
            } else {
                setDeviceType("desktop");
            }
        };

        // Set initial value
        updateDeviceType();

        // Listen for resize events
        window.addEventListener("resize", updateDeviceType);
        return () => window.removeEventListener("resize", updateDeviceType);
    }, []);

    return deviceType;
}
