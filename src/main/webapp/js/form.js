document.addEventListener("DOMContentLoaded", function () {

    const divStepOne = document.getElementById("stepOne");
    const divStepThree = document.getElementById("stepThree");
    const bags = document.getElementById("bags");
    const bagsSummary = document.getElementById("bagsSummary");
    const goToSummary = document.getElementById("goToSummary");
    const selectInstitution = document.getElementById("selectInstitution");
    let institution = '';
    let institutionId = 0;
    let categoryId = 0;
    const submit = document.getElementById('send');

    const addressInput = document.getElementById("addressInput");
    const cityInput = document.getElementById("cityInput");
    const postcodeInput = document.getElementById("postcodeInput");
    const phoneInput = document.getElementById("phoneInput");
    const dataInput = document.getElementById("dataInput");
    const timeInput = document.getElementById("timeInput");
    const more_infoInput = document.getElementById("more_infoInput");

    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const postcode = document.getElementById("postcode");
    const phone = document.getElementById("phone");
    const data = document.getElementById("data");
    const time = document.getElementById("time");
    const more_info = document.getElementById("more_info");

    function apiListCategories() {
        return fetch(
            'http://localhost:8080/category',
        ).then(resp => {
            return resp.json();
        });
    }

    apiListCategories().then(result => {
            result.forEach(function (el) {
                const div = document.createElement("div");
                div.classList.add("form-group");
                div.classList.add("form-group--checkbox");
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "checkbox";
                const checkbox = document.createElement("span");
                checkbox.classList.add("checkbox");
                checkbox.dataset.id = el.id;
                checkbox.addEventListener('click', function (event) {
                    categoryId = this.dataset.id;
                });
                const description = document.createElement("span");
                description.classList.add("description");
                description.innerText = el.name;
                description.setAttribute('descriptionId', el.id);
                label.appendChild(input);
                label.appendChild(checkbox);
                label.appendChild(description);
                div.appendChild(label);
                divStepOne.insertBefore(div, divStepOne.lastElementChild);
            });
        }
    );

    function apiListInstitution() {
        return fetch(
            'http://localhost:8080/institution',
        ).then(resp => {
            return resp.json();
        });
    }

    apiListInstitution().then(result => {
            result.forEach(function (el) {
                const div = document.createElement("div");
                div.classList.add("form-group");
                div.classList.add("form-group--checkbox");
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = "organization";
                input.value = "old";
                const radio = document.createElement("span");
                radio.classList.add("checkbox");
                radio.classList.add("radio");
                radio.name = el.name;
                radio.dataset.id = el.id;
                radio.addEventListener('click', function (event) {
                    institution = this.name;
                    institutionId = this.dataset.id;
                });
                const description = document.createElement("span");
                description.classList.add("description");
                const title = document.createElement("div");
                title.classList.add("title")
                title.innerText = el.name;
                const subtitle = document.createElement("div");
                subtitle.classList.add("subtitle");
                subtitle.innerText = el.description;
                label.appendChild(input);
                label.appendChild(radio);
                description.appendChild(title);
                description.appendChild(subtitle);
                label.appendChild(description);
                div.appendChild(label);
                divStepThree.insertBefore(div, divStepThree.lastElementChild);
            });
        }
    );

    goToSummary.addEventListener('click', function (event) {
        bagsSummary.innerText = 'Ilo???? work??w: ' + bags.value;
        selectInstitution.innerText = 'Dla fundacji: ' + institution;
        address.innerText = addressInput.value;
        city.innerText = cityInput.value;
        postcode.innerText = postcodeInput.value;
        phone.innerText = phoneInput.value;
        data.innerText = dataInput.value;
        time.innerText = timeInput.value;
        more_info.innerText = more_infoInput.value;
    })

    function apiPostAddDonation() {
        return fetch(
            'http://localhost:8080/donation',
            {
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    quantity: bags.value,
                    categoriesId: categoryId,
                    institutionId: institutionId,
                    street: addressInput.value,
                    city: cityInput.value,
                    zipCode: postcodeInput.value,
                    pickUpDate: dataInput.value,
                    pickUpTime: timeInput.value,
                    pickUpComment: more_infoInput.value
                }),
                method: 'POST'
            }
        ).then(resp => {
            return resp.json();
        });
    }

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        apiPostAddDonation().then(response => {
        });
    })

});