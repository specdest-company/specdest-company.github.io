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
export declare type DevelopmentOverridesProps = {
    Development?: PrimitiveOverrideProps<FlexProps>;
    SideImage?: SideImageProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3"?: PrimitiveOverrideProps<TextProps>;
    "Let us hear your needs."?: PrimitiveOverrideProps<TextProps>;
    "\u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u30CB\u30FC\u30BA\u306B\u5408\u308F\u305B\u3066\u3001\u9AD8\u54C1\u8CEA\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u958B\u767A\u3059\u308B\u306E\u304C\u3001\u30A4\u30F3\u30D5\u30A9\u30C6\u30C3\u30AF\u306E\u30AB\u30B9\u30BF\u30E0\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002 \u521D\u671F\u306E\u30D2\u30A2\u30EA\u30F3\u30B0\u304B\u3089\u7D0D\u54C1\u5F8C\u306E\u4FDD\u5B88\u307E\u3067\u5168\u3066\u306E\u958B\u767A\u30D5\u30A7\u30A4\u30BA\u3092\u5C02\u4EFB\u306E\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u8CAC\u4EFB\u3092\u6301\u3063\u3066\u62C5\u5F53\u3057\u307E\u3059\u3002\u4E00\u822C\u7684\u306B\u5916\u6CE8\u3059\u308B\u3053\u3068\u304C\u591A\u3044\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3082\u62C5\u5F53\u30A8\u30F3\u30B8\u30CB\u30A2\u304C\u5B9F\u65BD\u3057\u307E\u3059\u3002 \u3053\u306E\u305F\u3081\u7BA1\u7406\u3084\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u4F34\u306A\u3046\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u304C\u5927\u5E45\u306B\u6E1B\u308A\u3001\u6975\u3081\u3066\u52B9\u7387\u7684\u306A\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002\u30C8\u30EC\u30FC\u30C9\u30AA\u30D5\u306B\u306A\u308B\u3053\u3068\u304C\u591A\u3044\u30B3\u30B9\u30C8\u306E\u4F4E\u6E1B\u3068\u77ED\u7D0D\u671F\u3001\u3055\u3089\u306B\u54C1\u8CEA\u306E\u7DAD\u6301\u304C\u7121\u7406\u306A\u304F\u5B9F\u73FE\u3057\u307E\u3059\u3002\u304A\u5BA2\u69D8\u306E\u6A5F\u5BC6\u4FDD\u6301\u306E\u89B3\u70B9\u304B\u3089\u3082\u3054\u5B89\u5FC3\u3044\u305F\u3060\u3051\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DevelopmentProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: DevelopmentOverridesProps | undefined | null;
}>;
export default function Development(props: DevelopmentProps): React.ReactElement;
