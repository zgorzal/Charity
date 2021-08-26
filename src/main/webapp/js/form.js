document.addEventListener("DOMContentLoaded", function () {

    const divStepOne = document.getElementById("stepOne");
    const divStepthree = document.getElementById("stepThree");

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
                const description = document.createElement("span");
                description.classList.add("description");
                description.innerText = el.name;
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
                divStepthree.insertBefore(div, divStepthree.lastElementChild);
            });
        }
    );

});