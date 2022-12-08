/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function TableCell(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1241.73px"
      height="47px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TableCell")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="84px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="1.93%"
        right="91.3%"
        {...getOverrideProps(overrides, "Group 28")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - 11.5px)"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Amy Mathews"
          {...getOverrideProps(overrides, "Amy Mathews")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - -11.5px)"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="11023"
          {...getOverrideProps(overrides, "11023")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="81px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 12px - -0.5px)"
        left="631px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Admin"
        {...getOverrideProps(overrides, "Admin")}
      ></Text>
      <Badge
        width="54.61px"
        position="absolute"
        top="calc(50% - 12px - -0.5px)"
        left="calc(50% - 27.3px - -354.44px)"
        size="small"
        variation="info"
        children="Badge"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <View
        padding="0px 0px 0px 0px"
        width="49.73px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25.53%"
        bottom="23.4%"
        left="92.77%"
        right="3.22%"
        {...getOverrideProps(overrides, "Group 30")}
      >
        <MyIcon
          width="24.73px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 12.36px - -12.5px)"
          padding="0px 0px 0px 0px"
          type="delete"
          {...getOverrideProps(overrides, "MyIcon34493394")}
        ></MyIcon>
        <MyIcon
          width="24.73px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 12.36px - 12.5px)"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "MyIcon34493391")}
        ></MyIcon>
      </View>
    </View>
  );
}
