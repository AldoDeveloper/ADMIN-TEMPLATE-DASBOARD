import { ILogin } from "@/interfaces/auth.interface";
import { REG_NUMBER_PHONE, REG_PASSWORD } from "@/utilities/pattern";
import { TFunction } from "i18next";
import Joi from "joi";

export default function ValidationLogin(t: TFunction) {

    return(
        Joi.object<ILogin>({
            username: Joi.alternatives().try(
                Joi.string().email({ tlds: { allow: ["com", "co", "id"] }}).required(),
                Joi.string().pattern(REG_NUMBER_PHONE)).required(),
            password: Joi.string().pattern(REG_PASSWORD).required()
        })
        .messages({
        'alternatives.match'  : t("errors.alternatives.match"),
            'string.empty'        : t("errors.required"),
        })
        .required()
    )
}