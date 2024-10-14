import { getConfig } from "./config";

const config = getConfig();
const root = document.documentElement;

root.style.setProperty('--primary-color', config.brand.theme.primary || '#000000');
root.style.setProperty('--banner-dark-logo', `url(${config.brand.logo.dark})`);
root.style.setProperty('--secondary-color', config.brand.theme.secondary || 'rgb(2, 3, 129)');