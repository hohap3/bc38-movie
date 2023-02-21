import Home from "../features/Booking/Home";
import Detail from "../features/Booking/Detail";
import Seats from "../features/Booking/Seats";
import SignIn from "../features/Auth/SignIn";
import SignUp from "../features/Auth/SignUp";

export const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },
  { path: "/seats", component: Seats },
  { path: "/signIn", component: SignIn },
  { path: "/signUp", component: SignUp },
];
