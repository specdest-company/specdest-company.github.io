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
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import ServiceCard from "./ServiceCard";
export default function Services(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "and we will make them into reality": {},
        "Tell us what you imagine": {},
        "Group 11": {},
        ServiceCard34992084: {},
        ServiceCard34992085: {},
        ServiceCard34992086: {},
        "Frame 1": {},
        Services: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "and we will make them into reality": {
          fontSize: "36px",
          letterSpacing: "0.21px",
          width: "600px",
          left: "68px",
          children:
            "                                                    and we will make them into reality",
        },
        "Tell us what you imagine": {
          fontSize: "36px",
          letterSpacing: "0.21px",
          width: "600px",
        },
        "Group 11": { width: "668px" },
        ServiceCard34992084: { shrink: "1", grow: "1", basis: "0" },
        ServiceCard34992085: { shrink: "1", grow: "1", basis: "0" },
        ServiceCard34992086: { shrink: "1", grow: "1", basis: "0" },
        "Frame 1": { direction: "row" },
        Services: {},
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
      gap="1px"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="35px 32px 35px 32px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "Services")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="451px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 11")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="55px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="400px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="51px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="                                                   and we will make them into reality"
          {...getOverrideProps(overrides, "and we will make them into reality")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(30,184,190,1)"
          lineHeight="55px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.09px"
          width="400px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tell us what you imagine"
          {...getOverrideProps(overrides, "Tell us what you imagine")}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <ServiceCard
          display="flex"
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          type="development"
          {...getOverrideProps(overrides, "ServiceCard34992084")}
        ></ServiceCard>
        <ServiceCard
          display="flex"
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          type="consulting"
          {...getOverrideProps(overrides, "ServiceCard34992085")}
        ></ServiceCard>
        <ServiceCard
          display="flex"
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          type="automation"
          {...getOverrideProps(overrides, "ServiceCard34992086")}
        ></ServiceCard>
      </Flex>
    </Flex>
  );
}
