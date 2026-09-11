import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const { sessionClaims } = await auth();

    const role = (sessionClaims?.metadata as { role?: string })?.role;
    console.log(role);
    if (role) {
        redirect(`/${role}`);
    }

    redirect("/sign-in");
}