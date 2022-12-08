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
export declare type UserGroupInputValues = {
    name?: string;
    details?: string;
};
export declare type UserGroupValidationValues = {
    name?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserGroupOverridesProps = {
    UserGroupGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    details?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UserGroupProps = React.PropsWithChildren<{
    overrides?: UserGroupOverridesProps | undefined | null;
} & {
    onSubmit: (fields: UserGroupInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: UserGroupInputValues) => UserGroupInputValues;
    onValidate?: UserGroupValidationValues;
} & React.CSSProperties>;
export default function UserGroup(props: UserGroupProps): React.ReactElement;
