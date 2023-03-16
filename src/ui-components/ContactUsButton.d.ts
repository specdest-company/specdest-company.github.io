/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsButtonOverridesProps = {
    ContactUsButton?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<FlexProps>;
    "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactUsButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    type?: "big" | "small";
} & {
    overrides?: ContactUsButtonOverridesProps | undefined | null;
}>;
export default function ContactUsButton(props: ContactUsButtonProps): React.ReactElement;
