
import testimonials from "./modules/testimonials";
import team from "./modules/team";
import about from "./modules/about";
import { form, menu } from "./modules/actionsBlocks";


window.addEventListener('DOMContentLoaded', () => {

    about();
    form();
    menu();
    testimonials();
    team();
    
});
