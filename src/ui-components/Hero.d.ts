/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { ContactUsButtonProps } from "./ContactUsButton";
import { TextWithIconProps } from "./TextWithIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroOverridesProps = {
    "0"?: PrimitiveOverrideProps<ImageProps>;
    Hero?: PrimitiveOverrideProps<FlexProps>;
    HeroLeft?: PrimitiveOverrideProps<FlexProps>;
    "Excellence, Trustworthiness & Consistency"?: PrimitiveOverrideProps<TextProps>;
    ContactUsButton?: ContactUsButtonProps;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    TextWithIcon34991937?: TextWithIconProps;
    TextWithIcon34991938?: TextWithIconProps;
    TextWithIcon34991939?: TextWithIconProps;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type HeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: HeroOverridesProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
