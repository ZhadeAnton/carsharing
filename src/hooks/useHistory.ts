import { useHistory } from 'react-router-dom'

export default function useHistoryPush() {
  const history = useHistory()

  const handleHistoryPush = (path: string) => {
    history.push({
      pathname: `${path}`
    })
  }

  return (
    handleHistoryPush
  )
}
