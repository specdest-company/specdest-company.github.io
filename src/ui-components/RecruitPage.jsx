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
import { Flex, Image, useBreakpointValue } from "@aws-amplify/ui-react";
import RecruitContent from "./RecruitContent";
export default function RecruitPage(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        RecruitContent: {},
        RecruitBottom1: {},
        RecruitBottom2: {},
        RecruitLeft: {},
        RecruitRight: {},
        RecruitPage: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        RecruitContent: { breakpoint: "base" },
        RecruitBottom1: {},
        RecruitBottom2: {},
        RecruitLeft: {},
        RecruitRight: {},
        RecruitPage: {},
      },
      variantValues: { breakpoint: "base" },
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
      gap="10px"
      direction="column"
      width="1200px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 100px 0px 100px"
      backgroundColor="rgba(17,23,39,1)"
      display="flex"
      {...getOverrideProps(overrides, "RecruitPage")}
      {...rest}
    >
      <RecruitContent
        display="flex"
        gap="36px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        breakpoint="medium"
        {...getOverrideProps(overrides, "RecruitContent")}
      ></RecruitContent>
      <Image
        width="1577px"
        height="991px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/assets/images/RecruitBottom1.png"
        {...getOverrideProps(overrides, "RecruitBottom1")}
      ></Image>
      <Image
        width="300px"
        height="232px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/assets/images/RecruitBottom2.png"
        {...getOverrideProps(overrides, "RecruitBottom2")}
      ></Image>
      <Image
        width="423px"
        height="501px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/assets/images/RecruitLeft.png"
        {...getOverrideProps(overrides, "RecruitLeft")}
      ></Image>
      <Image
        width="800px"
        height="709px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/assets/images/RecruitRight.png"
        {...getOverrideProps(overrides, "RecruitRight")}
      ></Image>
    </Flex>
  );
}
