/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebarOverridesProps = {
    Sidebar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 12"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "material-symbols:close"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    consulting?: PrimitiveOverrideProps<TextProps>;
    developoment?: PrimitiveOverrideProps<TextProps>;
    automation?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SidebarProps = React.PropsWithChildren<Partial<FlexProps> & {
    onCloseClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: SidebarOverridesProps | undefined | null;
}>;
export default function Sidebar(props: SidebarProps): React.ReactElement;
