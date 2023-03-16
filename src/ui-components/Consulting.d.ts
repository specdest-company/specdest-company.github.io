/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SideImageProps } from "./SideImage";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConsultingOverridesProps = {
    Consulting?: PrimitiveOverrideProps<FlexProps>;
    SideImage1?: SideImageProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u30B5\u30FC\u30D3\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "Consult with us anytime."?: PrimitiveOverrideProps<TextProps>;
    "\u30D3\u30B8\u30CD\u30B9\u306E\u5909\u9769\u306F\u56F0\u96E3\u3067\u3059\u3002\u3057\u304B\u3057\u305D\u3053\u304B\u3089\u5F15\u304D\u51FA\u3055\u308C\u308B\u4FA1\u5024\u3092\u7BA1\u7406\u3057\u3001\u5B9F\u73FE\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u3059\u3002Professional Services\u306E\u30B5\u30DD\u30FC\u30C8\u306B\u3088\u3063\u3066\u3001\u30EA\u30B9\u30AF\u3092\u524A\u6E1B\u3057\u3001\u6210\u679C\u3092\u6700\u5927\u5316\u3057\u3001\u30E6\u30FC\u30B6\u30FC\u30A2\u30C0\u30D7\u30B7\u30E7\u30F3\u3092\u4FC3\u9032\u3067\u304D\u307E\u3059\u3002 \u5909\u9769\u306E\u6210\u529F\u3068\u306F\u3001\u5B9F\u88C5\u3060\u3051\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30AD\u30CA\u30AF\u30B7\u30B9\u306F\u3001\u3042\u3089\u3086\u308B\u30EC\u30D9\u30EB\u306E\u4F01\u696D\u3092\u5BFE\u8C61\u3068\u3057\u305F\u5F37\u56FA\u306A\u30A8\u30F3\u30B2\u30FC\u30B8\u30E1\u30F3\u30C8\u6226\u7565\u306B\u3088\u3063\u3066\u3001\u304A\u5BA2\u69D8\u304C\u6BB5\u968E\u7684\u306B\u6210\u529F\u3092\u304A\u3055\u3081\u3001\u30B5\u30D7\u30E9\u30A4\u30C1\u30A7\u30FC\u30F3\u3078\u306E\u6295\u8CC7\u304B\u3089\u6700\u5927\u306E\u53CE\u76CA\u3092\u5F97\u3089\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    SideImage2?: SideImageProps;
} & EscapeHatchProps;
export declare type ConsultingProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: ConsultingOverridesProps | undefined | null;
}>;
export default function Consulting(props: ConsultingProps): React.ReactElement;
