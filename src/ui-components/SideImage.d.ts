/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideImageOverridesProps = {
    SideImage?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SideImageProps = React.PropsWithChildren<Partial<FlexProps> & {
    imageName?: "automation" | "consulting" | "development";
} & {
    overrides?: SideImageOverridesProps | undefined | null;
}>;
export default function SideImage(props: SideImageProps): React.ReactElement;
