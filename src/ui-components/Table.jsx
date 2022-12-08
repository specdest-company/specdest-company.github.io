/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, TableCell, Text, View } from "@aws-amplify/ui-react";
export default function Table(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1241.73px"
      height="228px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="40px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Table")}
    >
      <View
        width="unset"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "TableHeader")}
      >
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="24px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Name"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="631px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Role"
          {...getOverrideProps(overrides, "Role")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 18.5px - -353.64px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Status"
          {...getOverrideProps(overrides, "Status")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 18.5px - -556.64px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Action"
          {...getOverrideProps(overrides, "Action")}
        ></Text>
      </View>
      <Flex
        padding="0px 0px 0px 0px"
        width="unset"
        height="191px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Group 32")}
      >
        <TableCell
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "TableCell34493420")}
        ></TableCell>
        <Divider
          width="1241.73px"
          position="absolute"
          top="47px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider34493742")}
        ></Divider>
        <TableCell
          position="absolute"
          top="48px"
          left="0px"
          {...getOverrideProps(overrides, "TableCell34493433")}
        ></TableCell>
        <Divider
          width="1241.73px"
          position="absolute"
          top="95px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider34494039")}
        ></Divider>
        <TableCell
          position="absolute"
          top="96px"
          left="0px"
          {...getOverrideProps(overrides, "TableCell34493446")}
        ></TableCell>
        <Divider
          width="1241.73px"
          position="absolute"
          top="143px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider34494102")}
        ></Divider>
        <TableCell
          position="absolute"
          top="144px"
          left="0px"
          {...getOverrideProps(overrides, "TableCell34493459")}
        ></TableCell>
      </Flex>
    </Flex>
  );
}
