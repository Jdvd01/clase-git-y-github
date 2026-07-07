document.addEventListener("DOMContentLoaded", () => {
	const yearNode = document.querySelector("#current-year");

	if (yearNode) {
		yearNode.textContent = new Date().getFullYear();
	}
});
