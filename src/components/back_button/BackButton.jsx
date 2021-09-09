import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackButton = () => {
	const history = useHistory();

	return (
		<Button
			variant="outline-secondary"
			onClick={() => history.goBack()}
			style={{ marginTop: "30px" }}
		>
			Back
		</Button>
	);
};

export default BackButton;
