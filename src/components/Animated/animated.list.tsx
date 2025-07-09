import React from "react";
import { motion } from 'framer-motion'

const listVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.2, // jeda animasi antar item
            delayChildren: 0.2
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface PropsAnimatedList{
    children?: React.ReactNode;
    className?: string;
}

export const AnimatedList: React.FC<PropsAnimatedList> = ({ children, className }) => {

    return (
        <motion.div
            initial={"hidden"}
            animate={"visible"}
            className={`${className}`}
            variants={listVariants}>
            {
                React.Children.map(children, (child, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
            }
        </motion.div>
    )
}