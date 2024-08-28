"use client";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}&apiKey=${API_KEY}`);
    console.log(response.data); // handle success
    return response.data; // return the data to be used elsewhere
  } catch (error) {
    console.error('Error fetching news:', error); // handle error
    throw error; // rethrow the error if needed for further handling
  } finally {
    // always executed, if you need to perform cleanup or logging
  }
};
