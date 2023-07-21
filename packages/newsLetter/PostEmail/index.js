require("dotenv").config();

const url = process.env.SHEET_API_URL;
const token = process.env.SHEET_API_KEY;

const registerEmail = async (arg) => {
  const email = arg;
  const data = new URLSearchParams();
  data.append("email", email);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dataParsed = await response.json();
    return dataParsed;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(error);
    } else {
      throw new Error(error);
    }
  }
};

registerEmail("eliseomurillo@test2.com");
