import { trpc } from '@/trpc/server'
import { useSuspenseQuery } from '@tanstack/react-query'

const Client = () => {
  
  const {data:users} = useSuspenseQuery(trpc.getUsers.queryOptions())

  return (
    <div>client</div>
  )
}

export default Client