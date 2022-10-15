import React from 'react'
import { WithRouter } from "utils/Navigation";

const NotFound = () => {
  return (
    <div className="text-xl font-semibold text-center">NotFound</div>
  )
}

export default WithRouter(NotFound);