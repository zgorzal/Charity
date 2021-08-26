document.addEventListener("DOMContentLoaded", function () {

    const institutionsList = document.querySelector(".help--slides-items");
    const donations = document.getElementById("donations");

    function apiListInstitution() {
        return fetch(
            'http://localhost:8080/institution',
        ).then(resp => {
            return resp.json();
        });
    }

    apiListInstitution().then(result => {
            let count = 0;
            result.forEach(function (el) {
                count++;
                const divCol = document.createElement("div");
                divCol.classList.add("col");
                const divTitle = document.createElement("div");
                divTitle.innerText = el.name;
                divTitle.classList.add("title");
                const divSubtitle = document.createElement("div");
                divSubtitle.innerText = el.description;
                divSubtitle.classList.add("subtitle");
                divCol.appendChild(divTitle);
                divCol.appendChild(divSubtitle);
                if (count % 2 === 1) {
                    const newLi = document.createElement("li");
                    newLi.appendChild(divCol);
                    institutionsList.appendChild(newLi);
                } else {
                    const oldLi = institutionsList.lastElementChild;
                    oldLi.appendChild(divCol);
                    institutionsList.appendChild(oldLi);
                }
            });
        }
    );

    function apiDonationsList() {
        return fetch(
            'http://localhost:8080/donation',
        ).then(resp => {
            return resp.json();
        });
    }

    apiDonationsList().then(result => {
        let count = 0;
        result.forEach(function (el) {
            count = count + el.quantity;
            donations.innerText = count;
        })
    })

});