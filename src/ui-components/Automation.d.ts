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
export declare type AutomationOverridesProps = {
    Automation?: PrimitiveOverrideProps<FlexProps>;
    SideImage?: SideImageProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "\u60C5\u5831\u30B7\u30B9\u30C6\u30E0\u81EA\u52D5\u5316"?: PrimitiveOverrideProps<TextProps>;
    "Detect, Diagnose & Save Time."?: PrimitiveOverrideProps<TextProps>;
    "\u6280\u8853\u3092\u4F7F\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u4F5C\u696D\u3084\u5B9A\u578B\u696D\u52D9\u3092\u3001100%\u5B8C\u5168\u306B\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002\u30D1\u30BD\u30B3\u30F3\u3092\u4F7F\u3063\u305F\u30C7\u30FC\u30BF\u306E\u53CE\u96C6\u3001\u7BA1\u7406\u8868\u3084\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u4F5C\u6210\u306A\u3069\u3092\u3001\u30D5\u30EB\u30AA\u30FC\u30C0\u30FC\u3067\u5168\u3066\u4EE3\u884C\u3057\u3066\u51E6\u7406\u3057\u307E\u3059\u3002\u7169\u96D1\u306A\u696D\u52D9\u3001\u30A2\u30D7\u30EA\u30FB\u30B7\u30B9\u30C6\u30E0\u3068\u9023\u643A\u3057\u305F\u96E3\u6613\u5EA6\u304C\u9AD8\u3044\u4F5C\u696D\u3082\u3001\u3059\u3079\u3066\u81EA\u52D5\u5316\u3067\u304D\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AutomationProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: AutomationOverridesProps | undefined | null;
}>;
export default function Automation(props: AutomationProps): React.ReactElement;
