import { useContext } from "react";
import { UserContext, TokenContext } from "../context";
function useUserToken () {
  const token = useContext(TokenContext)
  const user = useContext(UserContext)
  return [user, token]
  
}

export default useUserToken