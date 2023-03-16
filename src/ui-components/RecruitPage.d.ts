/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps } from "@aws-amplify/ui-react";
import { RecruitContentProps } from "./RecruitContent";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecruitPageOverridesProps = {
    RecruitPage?: PrimitiveOverrideProps<FlexProps>;
    RecruitContent?: RecruitContentProps;
    RecruitBottom1?: PrimitiveOverrideProps<ImageProps>;
    RecruitBottom2?: PrimitiveOverrideProps<ImageProps>;
    RecruitLeft?: PrimitiveOverrideProps<ImageProps>;
    RecruitRight?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type RecruitPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: RecruitPageOverridesProps | undefined | null;
}>;
export default function RecruitPage(props: RecruitPageProps): React.ReactElement;
