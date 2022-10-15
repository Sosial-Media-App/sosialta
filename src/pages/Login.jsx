import React from 'react'
import { WithRouter } from "utils/Navigation";

const Login = () => {
  return (
    <>
      <div className="font-semibold text-xl m-12">
        Login Page
      </div>
    </>
  )
}

export default WithRouter(Login);