/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { TopNavBarProps } from "./TopNavBar";
import { ContactUsButtonProps } from "./ContactUsButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecruitContentOverridesProps = {
    RecruitContent?: PrimitiveOverrideProps<FlexProps>;
    TopNavBar?: TopNavBarProps;
    "Frame 135471866"?: PrimitiveOverrideProps<FlexProps>;
    "WE\u2019RE"?: PrimitiveOverrideProps<TextProps>;
    HIRING?: PrimitiveOverrideProps<TextProps>;
    "Frame 235471869"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 135471870"?: PrimitiveOverrideProps<FlexProps>;
    positionTitle?: PrimitiveOverrideProps<TextProps>;
    "Frame 135471872"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 335472132"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 135472133"?: PrimitiveOverrideProps<FlexProps>;
    "\u5FC5\u9808\u30B9\u30AD\u30EB/\u7D4C\u9A13"?: PrimitiveOverrideProps<TextProps>;
    "\u30FBJavascript\u306B\u304A\u3051\u308B\u8A2D\u8A08/\u958B\u767A/\u904B\u7528\u7D4C\u9A13 \u30FBWeb\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30FB\u904B\u7528\u7D4C\u9A13 \u30FBGit\u3092\u5229\u7528\u3057\u305F\u958B\u767A\u7D4C\u9A13"?: PrimitiveOverrideProps<TextProps>;
    "Frame 235472136"?: PrimitiveOverrideProps<FlexProps>;
    "\u6C42\u3081\u308B\u4EBA\u7269\u50CF"?: PrimitiveOverrideProps<TextProps>;
    "\u30FB\u30B3\u30FC\u30C9\u66F8\u304F\u306E\u304C\u597D\u304D\u306A\u65B9 \u30FB\u30A8\u30F3\u30B8\u30CB\u30A2\u30B9\u30AD\u30EB\u3092\u78E8\u304D\u305F\u3044\u4EBA \u30FB\u524D\u5411\u304D\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u3051\u308B\u65B9"?: PrimitiveOverrideProps<TextProps>;
    "Frame 335472139"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 135472140"?: PrimitiveOverrideProps<FlexProps>;
    "\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB/\u7D4C\u9A13"?: PrimitiveOverrideProps<TextProps>;
    "\u30FBReactJs\u3092\u7528\u3044\u305F\u958B\u767A\u7D4C\u9A13 \u30FB\u5186\u6ED1\u306B\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3068\u3063\u3066\u696D\u52D9\u3092\u63A8\u9032\u3067\u304D\u308B\u3053\u3068"?: PrimitiveOverrideProps<TextProps>;
    "Frame 235472143"?: PrimitiveOverrideProps<FlexProps>;
    "\u30AD\u30E3\u30EA\u30A2\u30B9\u30C6\u30C3\u30D7"?: PrimitiveOverrideProps<TextProps>;
    "\u30FB\u6B21\u671F\u30A8\u30F3\u30B8\u30CB\u30A2\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u5019\u88DC \u30FB\u30BF\u30A4\u30C8\u30EB\u30A8\u30F3\u30B8\u30CB\u30A2\u5019\u88DC \u30FB\u30A2\u30CA\u30EA\u30B7\u30B9\uFF08\u5206\u6790\u30C1\u30FC\u30E0\uFF09\u3084\u30A4\u30F3\u30D5\u30E9\u306A\u3069\u8208\u5473\u5E0C\u671B\u304C\u3042\u308C\u3070\u7570\u52D5\u304C\u53EF\u80FD"?: PrimitiveOverrideProps<TextProps>;
    ContactUsButton?: ContactUsButtonProps;
    Spacer?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type RecruitContentProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: RecruitContentOverridesProps | undefined | null;
}>;
export default function RecruitContent(props: RecruitContentProps): React.ReactElement;
