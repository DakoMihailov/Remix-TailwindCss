// import { Landing } from "~/components/landing"

// const Index = () => {
//   return (
//     <>
//       <Landing></Landing>
//     </>
//   )
// }

// export default Index



import type { LoaderFunction } from "remix";
import { redirect } from "remix";
import { session } from "../server/sessions/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const { email } = (await session.parse(cookieHeader)) || {};

  if (email) {
    return redirect("/login");
  } else {
    return redirect("/landing");
  }
};