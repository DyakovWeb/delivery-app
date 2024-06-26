import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg";
import ToggleIcon from "@/assets/img/toggleTheme.svg";
import CartIcon from "@/assets/img/cart.svg";
import { Button } from "@/ui/button";
import { Icon } from "@/ui/Icon";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
   const navigate = useNavigate();
   const onClick = () => navigate("/");
   

   const {toggleTheme} = useTheme();

   const toggleThemeHandler = () => toggleTheme();
   

   return (
      <header className={cls.header}>
         <div className={cls.container}>
            <div className={cls.content}>
               <div className={cls.logo}>
                  <Icon Svg={PizzaIcon} clickable onClick={onClick} />
                  <p>Delivery пицца</p>
               </div>
               <div className={cls.buttons}>
                  <Icon Svg={ToggleIcon} clickable onClick={toggleThemeHandler} />
                  <Button border className={cls.button}>
                     <Icon Svg={CartIcon} />
                     <span>0 &#8381;</span>
                  </Button>
               </div>
            </div>
         </div>
      </header>
   );
};

export { Header };
