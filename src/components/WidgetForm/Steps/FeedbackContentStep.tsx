import Image from "next/image"
import { ArrowLeft } from "phosphor-react"
import { useContext, useRef } from "react"
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading"
import {
  FeedbackContext,
  feedbackTypes,
} from "../../../contexts/FeedbackContext"

export function FeedbackContentStep() {
  const formRef = useRef<HTMLFormElement>(null)

  const {
    comment,
    feedbackType,
    isSendingFeedback,
    handleSubmitFeedback,
    handleSubmitFromTextarea,
    handleSetComment,
    handleRestartFeedback,
  } = useContext(FeedbackContext)

  const feedbackTypeInfo = feedbackTypes[feedbackType!]

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
          title="Voltar"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            width={24}
            height={24}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form
        ref={formRef}
        className="my-4 w-full"
        onSubmit={handleSubmitFeedback}
      >
        <textarea
          className="min-w-[304px] w-full min-h-[95px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onKeyPress={handleSubmitFromTextarea}
          onChange={(event) => handleSetComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  )
}
