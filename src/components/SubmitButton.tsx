"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button ><Loader2 className="size-4 mr-2 animate-spin"/> Please wait...</Button>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
};

export default SubmitButton;
