export const cssColorHex = (classColor: string) : string => {
    const rgb = window.getComputedStyle(document.body).getPropertyValue(classColor);
    return rgb;
};
