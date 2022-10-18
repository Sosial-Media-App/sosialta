import React from 'react'
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { WithRouter } from "utils/Navigation";

const ProfilePage = () => {
  return (
    <Layout>
      <Navbar>
      </Navbar>
      <div>ProfilePage</div>
    </Layout>
  )
}

export default WithRouter(ProfilePage);