import { Button } from "@/components/ui/button";
import { signOut } from "@/utils/auth";
import { requiredUser } from "@/utils/hooks";

export default async function DashboardRoute() {
  const session = await requiredUser();
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Signout</Button>
      </form>

      <div>
        <h1>hello from the dashboard</h1>
      </div>
    </>
  );
}
