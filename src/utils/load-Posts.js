import axios from "axios";

export const getPeriodicTable = async () => {
  const { data } = await axios.get("https://neelpatel05.pythonanywhere.com/");

  return data;
};
