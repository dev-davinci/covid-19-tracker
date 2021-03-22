import axios from "axios";

export const fetchData = async () => {
  try {
    const data = await axios.get("https://covid19.mathdro.id/api");
    return data;
  } catch (error) {
    console.log(error);
  }
};
