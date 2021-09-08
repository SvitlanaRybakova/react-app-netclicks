import React from 'react'
import {Alert} from 'react-bootstrap'
import PageLayout from '../layout/PageLayout'

const CustomErrorMessage = ({error}) => {
  return (
		<PageLayout>
			<Alert variant="warning" className="my-3">
				<strong>Error:</strong> {error.message}
			</Alert>
		</PageLayout>
  );
}

export default CustomErrorMessage
