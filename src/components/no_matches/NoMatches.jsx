import React from "react";
import noData from "../../assets/images/noData.png";

const NoMatches = () => {
	return (
		<>
			<img src={noData} alt="no data found" 
      style={{margin: "40px auto", display:"block"}}
      />
		</>
	);
};

export default NoMatches;
