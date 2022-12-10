import { useContext } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import { FeedbackContext } from "../../contexts/FeedbackContext";

export function WidgetForm() {
  const { feedbackType, feedbackSent } = useContext(FeedbackContext);

  return (
    <div className="bg-zinc-900 text-zinc-100 p-4 relative rounded-2xl flex flex-col items-center h-[224px]">
      {feedbackSent ? (
        <FeedbackSuccessStep />
      ) : (
        <>{!feedbackType ? <FeedbackTypeStep /> : <FeedbackContentStep />}</>
      )}
    </div>
  );
}
