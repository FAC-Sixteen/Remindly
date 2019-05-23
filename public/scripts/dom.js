const groupModal = document.querySelector('.addcontact-customgroup-modal');
const groupModalBtn = document.querySelector('#customgroupbtn');
const groupModalClose = document.querySelector('.addcontact-customgroup-modal-close');

groupModalBtn.addEventListener("click", () => {
    groupModal.style.display = "block";
})

groupModalClose.addEventListener("click", () => {
    groupModal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target == groupModal) {
        groupModal.style.display = "none";
    }
})