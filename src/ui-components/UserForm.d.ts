/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserFormInputValues = {
    username?: string;
    email?: string;
    password?: string;
    Field0?: string;
    phoneNumber?: string;
    roleId?: string;
    userTags?: string;
};
export declare type UserFormValidationValues = {
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    roleId?: ValidationFunction<string>;
    userTags?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserFormOverridesProps = {
    UserFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
    Field0?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
    roleId?: FormProps<TextFieldProps>;
    userTags?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserFormProps = React.PropsWithChildren<{
    overrides?: UserFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: UserFormInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: UserFormInputValues) => UserFormInputValues;
    onValidate?: UserFormValidationValues;
} & React.CSSProperties>;
export default function UserForm(props: UserFormProps): React.ReactElement;
