import React from 'react'
import {useParams} from 'react-router-dom'

import PageLayout from '../../components/layout/PageLayout'

const staff = () => {
  const {staff_id} = useParams()
  return (
    <PageLayout>
      <h1>This is staff page with id {staff_id}</h1>
    </PageLayout>
  )
}

export default staff
