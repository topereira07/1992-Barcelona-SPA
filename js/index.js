import router from './router.js';


addEventListener('DOMContentLoaded', () => {
    sessionStorage.setItem("country", "Portugal");
    router.init();
});
