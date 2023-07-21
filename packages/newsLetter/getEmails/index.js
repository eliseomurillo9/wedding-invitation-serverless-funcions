require("dotenv").config();

const url = process.env.SHEET_API_URL;
const token = process.env.SHEET_API_KEY;

const getEmails = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

getEmails();
