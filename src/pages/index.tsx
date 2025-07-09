import LoadingV2 from "@/components/Loading/loadingv2";
import React from "react";
import { useNavigate } from "react-router-dom";

export const IndexPage : React.FC = () => {

    const navigate = useNavigate();
    
    React.useEffect(() => {
        navigate("/dasboard")
    }, []);

    return <LoadingV2/>
}