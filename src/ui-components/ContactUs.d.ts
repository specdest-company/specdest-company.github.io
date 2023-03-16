/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TopNavBarProps } from "./TopNavBar";
import { FooterProps } from "./Footer";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    TopNavBar?: TopNavBarProps;
    ContactUsTop?: PrimitiveOverrideProps<FlexProps>;
    "\u60C5\u5831\u3092\u3054\u5165\u529B\u306E\u4E0A\u3001 \u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"?: PrimitiveOverrideProps<TextProps>;
    ContactRounder?: PrimitiveOverrideProps<FlexProps>;
    ContactWrapper?: PrimitiveOverrideProps<FlexProps>;
    ContactUsHeader?: PrimitiveOverrideProps<FlexProps>;
    "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0"?: PrimitiveOverrideProps<TextProps>;
    ContactUsBody?: PrimitiveOverrideProps<FlexProps>;
    ContactUsFormWrapper?: PrimitiveOverrideProps<FlexProps>;
    Form?: PrimitiveOverrideProps<FlexProps>;
    FormSlot?: PrimitiveOverrideProps<FlexProps>;
    "\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u306B\u3064\u3044\u3066"?: PrimitiveOverrideProps<TextProps>;
    PolicyTextWrapper?: PrimitiveOverrideProps<FlexProps>;
    PolicyText?: PrimitiveOverrideProps<TextProps>;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    form?: React.ReactNode;
} & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
