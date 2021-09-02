const prayerPointList = document.querySelector(".prayer-point-list");
const prayerPoint = document.querySelector("input");

const modal = document.querySelectorAll(".modal-wrapper")[0];

const areYouSureModal = document.querySelectorAll(".modal-wrapper")[1];
const okayBTN = document.querySelector(".okay-button");
const cancelBTN = document.querySelector(".cancel-button");

prayerPoint.addEventListener("key", function (event) {
	if (event.keyCode === 13) {
		addPrayerPoint();
	}
});

document.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		addPrayerPoint();
	}
});

const addPrayerPoint = () => {
	var a = document.createElement("LI");
	a.textContent = prayerPoint.value;

	a.addEventListener("click", () => {
		areYouSureModal.style.display = "block";

		okayBTN.addEventListener("click", () => {
			areYouSureModal.style.display = "none";
			prayerPointList.removeChild(a);
		});

		cancelBTN.addEventListener("click", () => {
			areYouSureModal.style.display = "none";
			return;
		});
	});

	if (prayerPoint.value === "") {
		modal.style.display = "block";
		return;
	}

	prayerPointList.appendChild(a);
	prayerPoint.value = "";

	window.addEventListener("beforeunload", function (e) {
		e.preventDefault();
		e.returnValue = "";
	});
};

const closer = () => {
	modal.style.display = "none";
};

