/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, useBreakpointValue } from "@aws-amplify/ui-react";
import TopNavBar from "./TopNavBar";
import Hero from "./Hero";
import Slogan from "./Slogan";
import Services from "./Services";
import Development from "./Development";
import Consulting from "./Consulting";
import Automation from "./Automation";
import OurTechnology from "./OurTechnology";
import JoinUs from "./JoinUs";
import Footer from "./Footer";
export default function TopPage(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        TopNavBar: {},
        Hero: {},
        Slogan: {},
        Services: {},
        Development: {},
        Consulting: {},
        Automation: {},
        OurTechnology: {},
        JoinUs: {},
        Footer: {},
        TopPage: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        TopNavBar: { breakpoint: "medium" },
        Hero: { breakpoint: "medium" },
        Slogan: { breakpoint: "medium" },
        Services: { breakpoint: "medium" },
        Development: { breakpoint: "medium" },
        Consulting: { breakpoint: "medium" },
        Automation: { breakpoint: "medium" },
        OurTechnology: { breakpoint: "medium" },
        JoinUs: {},
        Footer: { breakpoint: "medium" },
        TopPage: {},
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "base",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "TopPage")}
      {...rest}
    >
      <TopNavBar
        display="none"
        gap="20px"
        direction="row"
        width="unset"
        height="64px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 32px 24px 32px"
        breakpoint="base"
        id="top"
        {...getOverrideProps(overrides, "TopNavBar")}
      ></TopNavBar>
      <Hero
        display="flex"
        gap="250px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="80px 32px 80px 32px"
        breakpoint="base"
        {...getOverrideProps(overrides, "Hero")}
      ></Hero>
      <Slogan
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="34px 0px 34px 0px"
        breakpoint="base"
        {...getOverrideProps(overrides, "Slogan")}
      ></Slogan>
      <Services
        display="flex"
        gap="1px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="35px 32px 35px 32px"
        breakpoint="base"
        id="services"
        {...getOverrideProps(overrides, "Services")}
      ></Services>
      <Development
        display="flex"
        gap="32px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        breakpoint="base"
        id="development"
        {...getOverrideProps(overrides, "Development")}
      ></Development>
      <Consulting
        display="flex"
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="39px 32px 39px 32px"
        breakpoint="base"
        id="consulting"
        {...getOverrideProps(overrides, "Consulting")}
      ></Consulting>
      <Automation
        display="flex"
        gap="48px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="39px 32px 39px 32px"
        breakpoint="base"
        id="automation"
        {...getOverrideProps(overrides, "Automation")}
      ></Automation>
      <OurTechnology
        display="none"
        gap="30px"
        direction="column"
        width="unset"
        height="406px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="43px 101px 43px 101px"
        breakpoint="base"
        {...getOverrideProps(overrides, "OurTechnology")}
      ></OurTechnology>
      <JoinUs
        display="flex"
        gap="59px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        breakpoint="base"
        {...getOverrideProps(overrides, "JoinUs")}
      ></JoinUs>
      <Footer
        display="flex"
        gap="30px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        breakpoint="base"
        {...getOverrideProps(overrides, "Footer")}
      ></Footer>
    </Flex>
  );
}
