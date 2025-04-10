import { FC } from "react";
import { useNavigation } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

type I_Props = {
  text?: string;
  className?: string;
};

export const SubmitBtn: FC<I_Props> = ({ text = "Submit", className }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex">
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
