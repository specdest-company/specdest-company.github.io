/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { ServiceCardProps } from "./ServiceCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesOverridesProps = {
    Services?: PrimitiveOverrideProps<FlexProps>;
    "Group 11"?: PrimitiveOverrideProps<FlexProps>;
    "and we will make them into reality"?: PrimitiveOverrideProps<TextProps>;
    "Tell us what you imagine"?: PrimitiveOverrideProps<TextProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    ServiceCard34992084?: ServiceCardProps;
    ServiceCard34992085?: ServiceCardProps;
    ServiceCard34992086?: ServiceCardProps;
} & EscapeHatchProps;
export declare type ServicesProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: ServicesOverridesProps | undefined | null;
}>;
export default function Services(props: ServicesProps): React.ReactElement;
