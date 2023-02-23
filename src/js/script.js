
import testimonials from "./modules/testimonials";
import team from "./modules/team";
import about from "./modules/about";
import { form, menu } from "./modules/actionsBlocks";
import consultation from "./modules/consultation";
import promo from "./modules/promo";


window.addEventListener('DOMContentLoaded', () => {

    about();
    form();
    menu();
    testimonials();
    team();
    consultation();
    promo();
    
});