/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { ContactUsButtonProps } from "./ContactUsButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JoinUsOverridesProps = {
    JoinUs?: PrimitiveOverrideProps<FlexProps>;
    "Frame 11"?: PrimitiveOverrideProps<FlexProps>;
    "\u30C1\u30FC\u30E0\u3078\u306E\u53C2\u52A0"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "\u7D20\u6674\u3089\u3057\u3044\u4F1A\u793E\u304A\u3088\u3073\u6587\u5316\u3092\u69CB\u7BC9\u3057\u3066\u3044\u308B\u3053\u3068\u3092\u8A87\u308A\u306B\u601D\u3063\u3066\u3044\u307E\u3059\u3002\u610F\u6B32\u3092\u63BB\u304D\u7ACB\u3066\u3001\u7D20\u65E9\u3044\u6210\u9577\u3092\u4FC3\u3057\u3001\u5909\u5316\u3092\u3082\u305F\u3089\u3057\u3066\u304F\u308C\u308B\u3002\u305D\u3093\u306A\u30C1\u30FC\u30E0\u306B\u3042\u306A\u305F\u3082\u53C2\u52A0\u3057\u3066\u307F\u307E\u305B\u3093\u304B\uFF1F"?: PrimitiveOverrideProps<TextProps>;
    ContactUsButton?: ContactUsButtonProps;
} & EscapeHatchProps;
export declare type JoinUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: JoinUsOverridesProps | undefined | null;
}>;
export default function JoinUs(props: JoinUsProps): React.ReactElement;
