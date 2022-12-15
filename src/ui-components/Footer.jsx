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
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function Footer(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Logo: {},
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
        Logo: {},
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
        Footer: { direction: "row", justifyContent: "space-between" },
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
  const homeOnClick = useNavigateAction({ anchor: "top", type: "anchor" });
  const serviceOnClick = useNavigateAction({
    anchor: "service",
    type: "anchor",
  });
  const contactOnClick = useNavigateAction({ type: "url", url: "/contact" });
  return (
    <Flex
      gap="30px"
      direction="column"
      width="980px"
      height="unset"
      justifyContent="flex-start"
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
        <Logo
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo")}
        ></Logo>
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
            onClick={() => {
              homeOnClick();
            }}
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
            onClick={() => {
              serviceOnClick();
            }}
            {...getOverrideProps(overrides, "Service")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="15.5px"
            textAlign="left"
            display="none"
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
            onClick={() => {
              contactOnClick();
            }}
            {...getOverrideProps(overrides, "Contact")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
