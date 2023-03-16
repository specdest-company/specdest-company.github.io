/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechnologyOverridesProps = {
    Technology?: PrimitiveOverrideProps<ViewProps>;
    "We use Javascript as it is used by all web browsers and smoothly paired with many modern frameworks and libraries that can perfectly fit with technology solutions to modern business challenges."?: PrimitiveOverrideProps<TextProps>;
    Javascript?: PrimitiveOverrideProps<TextProps>;
    "1_1 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TechnologyProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TechnologyOverridesProps | undefined | null;
}>;
export default function Technology(props: TechnologyProps): React.ReactElement;
