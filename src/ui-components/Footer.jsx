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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "screen shot 2022-11-07 at 21.08 1": {},
        "logo specdest white 1": {},
        "\u3012106-0031, \u6771\u4EAC\u90FD\u6E2F\u533A4-11-2, 606 Tel: 080-8495-6224":
          {},
        "Frame 6": {},
        Company: {},
        Home: {},
        Service: {},
        Technology: {},
        Contact: {},
        "Frame 7": {},
        "Frame 5": {},
        Footer: {},
      },
      variantValues: { breakpoint: "base" },
    },
    {
      overrides: {
        "screen shot 2022-11-07 at 21.08 1": {},
        "logo specdest white 1": {},
        "\u3012106-0031, \u6771\u4EAC\u90FD\u6E2F\u533A4-11-2, 606 Tel: 080-8495-6224":
          {},
        "Frame 6": {},
        Company: {},
        Home: {},
        Service: {},
        Technology: {},
        Contact: {},
        "Frame 7": {},
        "Frame 5": {},
        Footer: {},
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
      gap="30px"
      direction="row"
      width="980px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="32px 32px 32px 32px"
      display="flex"
      {...rest}
      {...getOverrideProps(overrides, "Footer")}
    >
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <Image
          width="64px"
          height="64px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "screen shot 2022-11-07 at 21.08 1")}
        ></Image>
        <Image
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logo specdest white 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="15.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="〒106-0031,&#xA;東京都港区4-11-2, 606&#xA;&#xA;Tel: 080-8495-6224"
          {...getOverrideProps(
            overrides,
            "\u3012106-0031, \u6771\u4EAC\u90FD\u6E2F\u533A4-11-2, 606 Tel: 080-8495-6224"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="42px"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="15.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Company"
          {...getOverrideProps(overrides, "Company")}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 7")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="15.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="15.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Service"
            {...getOverrideProps(overrides, "Service")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="15.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Technology"
            {...getOverrideProps(overrides, "Technology")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="15.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact"
            {...getOverrideProps(overrides, "Contact")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
