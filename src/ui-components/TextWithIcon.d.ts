/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextWithIconOverridesProps = {
    TextWithIcon?: PrimitiveOverrideProps<FlexProps>;
    "material-symbols:check-circle"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Team of experts in software development"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TextWithIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TextWithIconOverridesProps | undefined | null;
}>;
export default function TextWithIcon(props: TextWithIconProps): React.ReactElement;
