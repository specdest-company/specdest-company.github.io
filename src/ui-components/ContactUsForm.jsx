/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function ContactUsForm(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    companyName: "",
    companyUrl: "",
    department: "",
    name: "",
    phoneNumber: "",
    email: "",
    detail: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [companyUrl, setCompanyUrl] = React.useState(initialValues.companyUrl);
  const [department, setDepartment] = React.useState(initialValues.department);
  const [name, setName] = React.useState(initialValues.name);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [detail, setDetail] = React.useState(initialValues.detail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyName(initialValues.companyName);
    setCompanyUrl(initialValues.companyUrl);
    setDepartment(initialValues.department);
    setName(initialValues.name);
    setPhoneNumber(initialValues.phoneNumber);
    setEmail(initialValues.email);
    setDetail(initialValues.detail);
    setErrors({});
  };
  const validations = {
    companyName: [],
    companyUrl: [{ type: "URL" }],
    department: [],
    name: [{ type: "Required" }],
    phoneNumber: [{ type: "Phone" }],
    email: [{ type: "Required" }, { type: "Email" }],
    detail: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          companyName,
          companyUrl,
          department,
          name,
          phoneNumber,
          email,
          detail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "ContactUsForm")}
      {...rest}
    >
      <TextField
        label="会社名"
        isRequired={false}
        placeholder="例）スペックデストカビ式会社式会社"
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              companyUrl,
              department,
              name,
              phoneNumber,
              email,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="会社URL"
        placeholder="例）https://specdest.com"
        value={companyUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl: value,
              department,
              name,
              phoneNumber,
              email,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.companyUrl ?? value;
          }
          if (errors.companyUrl?.hasError) {
            runValidationTasks("companyUrl", value);
          }
          setCompanyUrl(value);
        }}
        onBlur={() => runValidationTasks("companyUrl", companyUrl)}
        errorMessage={errors.companyUrl?.errorMessage}
        hasError={errors.companyUrl?.hasError}
        {...getOverrideProps(overrides, "companyUrl")}
      ></TextField>
      <TextField
        label="役職（部署）"
        placeholder="例）営業部 部長"
        value={department}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl,
              department: value,
              name,
              phoneNumber,
              email,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.department ?? value;
          }
          if (errors.department?.hasError) {
            runValidationTasks("department", value);
          }
          setDepartment(value);
        }}
        onBlur={() => runValidationTasks("department", department)}
        errorMessage={errors.department?.errorMessage}
        hasError={errors.department?.hasError}
        {...getOverrideProps(overrides, "department")}
      ></TextField>
      <TextField
        label="お名前"
        isRequired={true}
        placeholder="例）山田 太郎"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl,
              department,
              name: value,
              phoneNumber,
              email,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="電話番号"
        placeholder="例）000-1234-5678"
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl,
              department,
              name,
              phoneNumber: value,
              email,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="メールアドレス"
        isRequired={true}
        placeholder="例）info@specdest.com"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl,
              department,
              name,
              phoneNumber,
              email: value,
              detail,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextAreaField
        label="お問い合わせ内容"
        isRequired={true}
        placeholder="聞きたいことや、相談したいことをご入力ください。"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              companyUrl,
              department,
              name,
              phoneNumber,
              email,
              detail: value,
            };
            const result = onChange(modelFields);
            value = result?.detail ?? value;
          }
          if (errors.detail?.hasError) {
            runValidationTasks("detail", value);
          }
          setDetail(value);
        }}
        onBlur={() => runValidationTasks("detail", detail)}
        errorMessage={errors.detail?.errorMessage}
        hasError={errors.detail?.hasError}
        {...getOverrideProps(overrides, "detail")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="送信する"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
