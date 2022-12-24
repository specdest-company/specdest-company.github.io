/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUsFormInputValues = {
    companyName?: string;
    companyUrl?: string;
    department?: string;
    name?: string;
    phoneNumber?: string;
    email?: string;
    detail?: string;
};
export declare type ContactUsFormValidationValues = {
    companyName?: ValidationFunction<string>;
    companyUrl?: ValidationFunction<string>;
    department?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    detail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsFormOverridesProps = {
    ContactUsFormGrid?: FormProps<GridProps>;
    companyName?: FormProps<TextFieldProps>;
    companyUrl?: FormProps<TextFieldProps>;
    department?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    detail?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ContactUsFormProps = React.PropsWithChildren<{
    overrides?: ContactUsFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: ContactUsFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: ContactUsFormInputValues) => ContactUsFormInputValues;
    onValidate?: ContactUsFormValidationValues;
} & React.CSSProperties>;
export default function ContactUsForm(props: ContactUsFormProps): React.ReactElement;
