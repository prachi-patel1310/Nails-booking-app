let selectedService = "";
function selectService(service) {
    selectedService = service;
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(c => c.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    document.getElementById("next-btn").disabled = false;
}
function goToAddons() {
    localStorage.setItem("selectedService", selectedService);
    window.location.href = "addons.html";
}

let addons = [];
function toggleAddon(addon) {
    const element = event.currentTarget;
    if (addons.includes(addon)) {
        addons = addons.filter(a => a !== addon);
        element.classList.remove('selected');
    } else {
        addons.push(addon);
        element.classList.add('selected');
    }
}
function goToConfirm() {
    localStorage.setItem("selectedAddons", JSON.stringify(addons));
    window.location.href = "confirm.html";
}

window.onload = function() {
    const summary = document.getElementById("summary");
    if(summary){
        const service = localStorage.getItem("selectedService") || "None";
        const addonsList = JSON.parse(localStorage.getItem("selectedAddons") || "[]");
        let html = `<p><strong>Service:</strong> ${service}</p>`;
        html += `<p><strong>Add-Ons:</strong> ${addonsList.length>0 ? addonsList.join(', ') : 'None'}</p>`;
        summary.innerHTML = html;
    }
}
function finishBooking() {
    alert("Booking Confirmed! Thank you.");
    localStorage.clear();
    window.location.href = "index.html";
}