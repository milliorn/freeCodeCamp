const v1WorkoutRouter = require("./v1/routes/workoutRoutes"); /* Configure Express */
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/Workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
