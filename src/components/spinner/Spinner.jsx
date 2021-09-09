import React from "react";
import RingLoader from "react-spinners/RingLoader";
import PageLayout from '../layout/PageLayout'

const Spinner = () => {
	return (
		<PageLayout >
      <div className="spinnerWrapper">
        <RingLoader className="spinner" color={"#00838f"} size={90} />
      </div>
			
		</PageLayout>
	);
};

export default Spinner;
