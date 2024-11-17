import { Button } from "@mantine/core";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Button type="button" onClick={() => router.push("/components")}>
        Components page
      </Button>
    </>
  );
}
