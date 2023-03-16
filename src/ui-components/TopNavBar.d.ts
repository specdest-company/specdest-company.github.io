/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { LogoProps } from "./Logo";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopNavBarOverridesProps = {
    TopNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "ci:hamburger"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    consulting?: PrimitiveOverrideProps<TextProps>;
    developoment?: PrimitiveOverrideProps<TextProps>;
    automation?: PrimitiveOverrideProps<TextProps>;
    "\u6280\u8853"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    onHamburgerClick?: (event: SyntheticEvent) => void;
} & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: TopNavBarOverridesProps | undefined | null;
}>;
export default function TopNavBar(props: TopNavBarProps): React.ReactElement;
