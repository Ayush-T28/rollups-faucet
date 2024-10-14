export const getConfig = () => {
    let parsed = JSON.parse(process.env.REACT_APP_CUSTOMIZATION as string);
    return parsed;
};