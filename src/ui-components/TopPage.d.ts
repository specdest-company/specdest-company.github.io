/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
import { TopNavBarProps } from "./TopNavBar";
import { HeroProps } from "./Hero";
import { SloganProps } from "./Slogan";
import { ServicesProps } from "./Services";
import { DevelopmentProps } from "./Development";
import { ConsultingProps } from "./Consulting";
import { AutomationProps } from "./Automation";
import { OurTechnologyProps } from "./OurTechnology";
import { JoinUsProps } from "./JoinUs";
import { FooterProps } from "./Footer";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopPageOverridesProps = {
    TopPage?: PrimitiveOverrideProps<FlexProps>;
    TopNavBar?: TopNavBarProps;
    Hero?: HeroProps;
    Slogan?: SloganProps;
    Services?: ServicesProps;
    Development?: DevelopmentProps;
    Consulting?: ConsultingProps;
    Automation?: AutomationProps;
    OurTechnology?: OurTechnologyProps;
    JoinUs?: JoinUsProps;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type TopPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "base" | "medium";
} & {
    overrides?: TopPageOverridesProps | undefined | null;
}>;
export default function TopPage(props: TopPageProps): React.ReactElement;
