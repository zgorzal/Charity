document.addEventListener("DOMContentLoaded", function () {

    const divStepOne = document.getElementById("stepOne");

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

});