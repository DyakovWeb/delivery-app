import { Icon } from "@/ui/Icon";
import cls from "./Footer.module.scss";
import PizzaLogo from "@/assets/img/logoPizza.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate();
   const onClick = () => navigate("/");
   return ( 
         <footer className={cls.footer}>
            <div className={cls.container}>
               <div className={cls.content}>
                  <div className={cls.logo}>
                     <Icon Svg={PizzaLogo} clickable onClick={onClick} />
                     <p>Delivery пицца</p>
                  </div>
                  <div className={cls.copyright}>
                     <p>&#169; Copyright 2023 — Delivery пицца</p>
                  </div>
               </div>
            </div>
         </footer>
         );  
};

export { Footer };
