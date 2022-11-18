// export type ContactDetails = {
//   recapchaToken: string
//   customerName: string;
//   emailAddress: string;
//   message: string;
//   companyName?: string;
//   companyUrl?: string;
//   department?: string;
//   phone?: string;
// };

export const sendEmail = async (contactDetail) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(contactDetail);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    // redirect: "follow",
  };
  const url = process.env.REACT_APP_EMAIL_ENDPOIT_URL;
  if (!url) {
    throw new Error("NO_EMAIL_ENDPOINT_URL");
  }
  return fetch(url, requestOptions).then((response) => response.text());
};
