/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
export default function UserForm(props) {
  const { onSubmit, onCancel, onValidate, onChange, overrides, ...rest } =
    props;
  const initialValues = {
    username: undefined,
    email: undefined,
    password: undefined,
    Field0: undefined,
    phoneNumber: undefined,
    roleId: undefined,
    userTags: undefined,
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [email, setEmail] = React.useState(initialValues.email);
  const [password, setPassword] = React.useState(initialValues.password);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [roleId, setRoleId] = React.useState(initialValues.roleId);
  const [userTags, setUserTags] = React.useState(initialValues.userTags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setEmail(initialValues.email);
    setPassword(initialValues.password);
    setField0(initialValues.Field0);
    setPhoneNumber(initialValues.phoneNumber);
    setRoleId(initialValues.roleId);
    setUserTags(initialValues.userTags);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    password: [{ type: "Required" }],
    Field0: [{ type: "Required" }],
    phoneNumber: [{ type: "Phone" }],
    roleId: [{ type: "Required" }],
    userTags: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          username,
          email,
          password,
          Field0,
          phoneNumber,
          roleId,
          userTags,
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
      {...rest}
      {...getOverrideProps(overrides, "UserForm")}
    >
      <TextField
        label="Username"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              email,
              password,
              Field0,
              phoneNumber,
              roleId,
              userTags,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email: value,
              password,
              Field0,
              phoneNumber,
              roleId,
              userTags,
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
      <TextField
        label="Password"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password: value,
              Field0,
              phoneNumber,
              roleId,
              userTags,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="ConfirmPassword"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              Field0: value,
              phoneNumber,
              roleId,
              userTags,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <TextField
        label="Phone number"
        type="tel"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              Field0,
              phoneNumber: value,
              roleId,
              userTags,
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
        label="Role id"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              Field0,
              phoneNumber,
              roleId: value,
              userTags,
            };
            const result = onChange(modelFields);
            value = result?.roleId ?? value;
          }
          if (errors.roleId?.hasError) {
            runValidationTasks("roleId", value);
          }
          setRoleId(value);
        }}
        onBlur={() => runValidationTasks("roleId", roleId)}
        errorMessage={errors.roleId?.errorMessage}
        hasError={errors.roleId?.hasError}
        {...getOverrideProps(overrides, "roleId")}
      ></TextField>
      <TextField
        label="User tags"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              email,
              password,
              Field0,
              phoneNumber,
              roleId,
              userTags: value,
            };
            const result = onChange(modelFields);
            value = result?.userTags ?? value;
          }
          if (errors.userTags?.hasError) {
            runValidationTasks("userTags", value);
          }
          setUserTags(value);
        }}
        onBlur={() => runValidationTasks("userTags", userTags)}
        errorMessage={errors.userTags?.errorMessage}
        hasError={errors.userTags?.hasError}
        {...getOverrideProps(overrides, "userTags")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
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
