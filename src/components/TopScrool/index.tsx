import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { variantOption } from "./options";
import Button from "../Button";
import { BsArrowUpCircle } from "react-icons/bs";

const TopScrool : React.FC<{}> = ({}) => {

    const[visible, setVisible] = React.useState<boolean>(false);

    const handleScrool = () => {
        if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
            setVisible(true);
        }else{
            setVisible(false);
        }
    };

    const topScroolClick = async() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScrool);
        return () => window.removeEventListener("scroll", handleScrool);
    }, [visible]);

    return(
        <AnimatePresence>
            <motion.div 
                className="fixed z-[1000]"
                initial="hidde"
                animate={visible ? "show" : "hidde"}
                variants={variantOption}
                exit={"exit"}>
                <Button 
                    size="sm"
                    optionTheme="auto"
                    className="px-2 py-2"
                    onClick={topScroolClick}
                    label={<BsArrowUpCircle color="white" size={25}/>}
                    rounded/>
            </motion.div>
        </AnimatePresence>
    )
};

export default TopScrool;