
export declare global{
    
    interface TreeNodeProps{
        id        : string | number;
        name      ?: string;
        to        ?: string;
        space     ?: "1" | "2" | "3" | "3" | "4" | "5" | "6" | "7" | "8" | "8" |"10";
        icon      ?: React.ReactNode | (() => React.ReactNode) | string;
        className ?: string;
        style     ?: React.CSSProperties;
        children  ?: Array<TreeNodeProps>;
    }

    interface TableDataProps {
        order_id     : number;
        product_name : string;
        price        : number;
        quantity     : number;
        image_url    : string;
        customer_name: string;
    }

    interface Product {
        id: number;
        name: string;
        category: string;
        price: number;
        stock: number;
        description: string;
        brand: string;
        rating: number;
      }

    type TypeOptions<TYPE> = {
        [key in typeof TYPE] : boolean
    }
}