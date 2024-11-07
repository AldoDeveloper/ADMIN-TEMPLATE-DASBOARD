import classNames from "classnames";
import React from "react";

interface PropsComponent {
    text?: string;
    space?: "sm" | "lg" | "md" | "xl"
};

const Divider: React.FC<PropsComponent> = ({ text, space }: PropsComponent) => {

    const spaceClassName = classNames({
        "mx-2" : space === undefined || space === "lg",
        "mx-1" : space === "sm",
        "mx-3" : space == "xl",
    });

    return (
        <div className="flex items-center my-4">
            <div className="flex-grow border-t-[0.1px] border-gray-300 dark:border-gray-100" />
            {
                text && (
                    <span className={`${spaceClassName} text-gray-400 text-sm`}>
                        { text }
                    </span>
                )
            }
            <div className="flex-grow border-t-[0.1px] border-gray-300 dark:border-gray-100" />
        </div>
    )
}
export default Divider;