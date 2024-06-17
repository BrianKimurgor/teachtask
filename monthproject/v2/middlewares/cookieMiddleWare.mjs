

const cookieMiddleware = (req, res, next) => {
    console.log("cookie", req.cookies);

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.cookie("cookie_name", "cookie_value", { maxAge: 30000, signed: true });
    res.sendStatus(200);
}

export default cookieMiddleware
