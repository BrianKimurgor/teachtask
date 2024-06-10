import express from "express";
import router from "../routes/routes.mjs"; // Ensure the correct path to your routes file
import { loggingMiddleware } from "../middlewares/loggingMiddleware.mjs";

const app = express();
app.use(express.json());
app.use('/api', router);
app.use(loggingMiddleware);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
