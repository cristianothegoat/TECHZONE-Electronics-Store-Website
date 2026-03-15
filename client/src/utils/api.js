import axios from "axios";

const params = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

const getAuthorizationHeader = () => {
    const apiKey = process.env.REACT_APP_STRIPE_APP_KEY;
    if (!apiKey) {
        console.error("Stripe API key not set in environment variables");
    }
    return {
        Authorization: `Bearer ${apiKey}`,
    };
};

export const makePaymentRequest = async (url, data) => {
    try {
        const response = await axios.post(
            process.env.REACT_APP_DEV_URL + url,
            data,
            { headers: getAuthorizationHeader() }
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
