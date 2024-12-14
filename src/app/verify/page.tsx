import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

const Verify = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-[390px] px-5">
        <CardHeader className="text-center">
          <div className="flex mx-auto size-20 items-center justify-center rounded-full bg-blue-100">
            <Mail className="size-10 text-blue-500" />
          </div>

          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription className="text-md text-muted-foreground">
            We have sent a verification link to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mt-4 rounded-md bg-yellow-50 p-4">
            <AlertCircle className="size-5 text-yellow-400" />
            <p className="text-sm font-medium text-yellow-700 ml-2">
              Be sure to check your spam folder!
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href="/"
            className={buttonVariants({
              className: "w-full",
            })}
          >
            <ArrowLeft /> Back to Homepage
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Verify;
