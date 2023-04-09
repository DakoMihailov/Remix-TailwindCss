import { useEffect, useRef } from 'react'
import { useFetcher } from 'remix'
import { motion } from 'framer-motion'
import { ConvertKitSubscriptionResponse } from '~/types'
import { Input } from '~/components/input'



export const ConvertKitInputForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const convertKit = useFetcher<ConvertKitSubscriptionResponse>()

  const state: 'idle' | 'success' | 'error' | 'submitting' =
    (!convertKit.data || convertKit.data?.status === 'error') &&
    convertKit.submission
      ? 'submitting'
      : convertKit.data?.status === 'error'
      ? 'error'
      : convertKit.data?.status === 'success'
      ? 'success'
      : 'idle'

  useEffect(() => {
    if (state === 'error') {
      inputRef.current?.focus()
    }
  }, [state])

  return (
    <convertKit.Form
      method="post"
      action="/action/convert-kit"
      className="relative"
    >
      <Input name="email"
        placeholder="E-mail"
        type="email"
        ref={inputRef}
        autoComplete="off"
        disabled={state === 'submitting' || state === 'success'}
        errorMessage={convertKit.data?.error}
      />
      <button
        type="submit"
        disabled={state === 'submitting' || state === 'success'}
        className="mt-8 w-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
        {state === 'submitting' ? 'submitting' : 'Submit'}
      </button>
    </convertKit.Form>
  )
}
