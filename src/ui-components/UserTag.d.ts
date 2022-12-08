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
export declare type UserTagInputValues = {
    name?: string;
    detail?: string;
};
export declare type UserTagValidationValues = {
    name?: ValidationFunction<string>;
    detail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTagOverridesProps = {
    UserTagGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    detail?: FormProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type UserTagProps = React.PropsWithChildren<{
    overrides?: UserTagOverridesProps | undefined | null;
} & {
    onSubmit: (fields: UserTagInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: UserTagInputValues) => UserTagInputValues;
    onValidate?: UserTagValidationValues;
} & React.CSSProperties>;
export default function UserTag(props: UserTagProps): React.ReactElement;
