
export interface PropsComponent extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode | string;
    classNameLabel ?: string;
    invalid  ?: boolean;
    register ?: any;
    sizeType     ?: "sm" | "lg" | "xl"
};