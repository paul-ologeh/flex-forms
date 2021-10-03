import axios from "axios";

const BACK_END_URI = process.env.REACT_APP_BACK_END_URI;

export const addFormResponse = async (uuid, body) => {
  const response = await axios.post(
    `${BACK_END_URI}/api/v1/filledforms?uuid=${uuid}`,
    body
  );
  console.log("addFormResponse: Response is ", response);
  return response;
};

export const getFormResponse = async (uuid) => {
  const response = await axios.get(
    `${BACK_END_URI}/api/v1/filledforms?uuid=${uuid}`
  );
  console.log("getFormResponse: Response is ", response);
  return response;
};
