import {
  ReactNode,
  createContext,
  useState,
  useRef,
  FormEvent,
  KeyboardEvent,
} from "react";
import { trpc } from "../utils/trpc";
import * as z from "zod";

interface FeedbackContextType {
  isSendingFeedback: boolean;
  comment: string;
  feedbackSent: boolean;
  feedbackType: FeedbackType | null;
  handleSetComment: (data: string) => void;
  handleSubmitFeedback: (event: FormEvent) => void;
  handleSubmitFromTextarea: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSetFeedBackType: (type: FeedbackType) => void;
  handleRestartFeedback: () => void;
}

interface FeedbackContextProviderProps {
  children: ReactNode;
}

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/bug.svg",
      alt: "Ilustração de um inseto roxo",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "/idea.svg",
      alt: "Lâmpada acesa",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: "/thought.svg",
      alt: "Nuvem de pensamento",
    },
  },
} as const;

export type FeedbackType = keyof typeof feedbackTypes;

const feedbackFormSchema = z.object({
  type: z.enum(["BUG", "IDEA", "OTHER"]),
  comment: z.string(),
});

export type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;

export const FeedbackContext = createContext({} as FeedbackContextType);

export function FeedbackContextProvider({
  children,
}: FeedbackContextProviderProps) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const { mutateAsync: createFeedback } = trpc.createFeedback.useMutation();

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  function handleSetFeedBackType(data: FeedbackType) {
    setFeedbackType(data);
  }

  async function handleFeedbackSubmitted(data: FeedbackFormSchema) {
    try {
      const { type, comment } = data;

      await createFeedback({
        type,
        content: comment,
      });
    } catch (err) {
      alert("Erro ao enviar o feedback, tente novamente!");
    }

    setFeedbackSent(true);
  }

  function handleSubmitFromTextarea(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      formRef.current?.requestSubmit();
    }
  }

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    const data = feedbackFormSchema.parse({
      type: feedbackType,
      comment,
    });

    await handleFeedbackSubmitted(data);

    setIsSendingFeedback(false);
  }

  function handleSetComment(data: string) {
    setComment(data);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackType,
        isSendingFeedback,
        comment,
        feedbackSent,
        handleSubmitFeedback,
        handleSubmitFromTextarea,
        handleSetFeedBackType,
        handleRestartFeedback,
        handleSetComment,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
