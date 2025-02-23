import React from "react";

type PropsUseLoad = {
    interval ?: number
}
export default function useLoad({ interval } : PropsUseLoad) {

    const timeInterval = interval ?? 2000;
    const [ loading, setLoading ] = React.useState<boolean>(true);

    React.useEffect(() => {
        const intervalSet = setInterval(() => {
            setLoading(false)
        }, timeInterval);

        return () => clearInterval(intervalSet);

    }, [loading]);

    return loading;
}