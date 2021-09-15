export const getAge = (dateString) => {
	const today = new Date();
	const birthDate = new Date(dateString);
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
};

// show budget in friendly set
export const showBudget = (budget) => {
	const price = String(budget);
	if (price.length % 3 == 0) {
		return price
			.split(/(\d{3})/)
			.join(" ")
			.trim();
	} else {
		//add a space as a separator in integers
		return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
	}
};
