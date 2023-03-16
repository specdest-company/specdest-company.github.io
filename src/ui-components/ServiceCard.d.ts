/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceIconProps } from "./ServiceIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceCardOverridesProps = {
    ServiceCard?: PrimitiveOverrideProps<FlexProps>;
    ServiceIcon?: ServiceIconProps;
    title?: PrimitiveOverrideProps<TextProps>;
    detail?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ServiceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    type?: "automation" | "consulting" | "development";
} & {
    overrides?: ServiceCardOverridesProps | undefined | null;
}>;
export default function ServiceCard(props: ServiceCardProps): React.ReactElement;
