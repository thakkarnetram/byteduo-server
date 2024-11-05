const axios = require("axios");

exports.signupRedirect = (req, res) => {
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user`;
    return res.status(200).json({ url: redirectUri })
}

exports.signupCallback = async (req, res) => {
    const { code } = req.query;
    try {
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token", {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        },
            {
                headers: { Accept: "application/json" }
            }
        )
        const accessToken = tokenResponse.data.access_token;
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        req.session.user = userResponse.data;
        console.log(userResponse.data);
        return res.status(200).json(userResponse.data)
    } catch (error) {
        console.error("Error during GitHub OAuth:", error);
    }
}