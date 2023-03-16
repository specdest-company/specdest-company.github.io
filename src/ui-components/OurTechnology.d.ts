/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TechnologyProps } from "./Technology";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OurTechnologyOverridesProps = {
    OurTechnology?: PrimitiveOverrideProps<FlexProps>;
    "Our Technology"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Group 2"?: TechnologyProps;
    "Group 3"?: TechnologyProps;
    "Group 4"?: TechnologyProps;
} & EscapeHatchProps;
export declare type OurTechnologyProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: OurTechnologyOverridesProps | undefined | null;
}>;
export default function OurTechnology(props: OurTechnologyProps): React.ReactElement;
