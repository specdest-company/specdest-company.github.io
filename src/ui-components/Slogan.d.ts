/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SloganOverridesProps = {
    Slogan?: PrimitiveOverrideProps<FlexProps>;
    "\u5411\u4E0A\u5FC3\u3068\u8AA0\u5B9F\u3055\u3001\u4EBA\u3005\u3068\u306E\u7E4B\u304C\u308A\u3092\u5927\u5207\u306B\u3057\u3001 \u559C\u3073\u30FB\u611F\u52D5\u30FB\u5B89\u5FC3\u305D\u3057\u3066\u672A\u6765\u3092\u3001 \u30B7\u30B9\u30C6\u30E0\u3068\u5171\u306B\u63D0\u4F9B\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SloganProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: SloganOverridesProps | undefined | null;
}>;
export default function Slogan(props: SloganProps): React.ReactElement;
