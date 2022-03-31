import { useEffect } from 'react'

export const useDocumentTitle = (count) => {
  useEffect(() => {
      document.title = `Count ${count}`
  }, [count])
}

// Calls useDocumentTitle Hook

// import useDocumentTitle

// useDocumentTitle(count)