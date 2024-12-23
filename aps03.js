function calculateDosage() {
    // Get input values
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const medicine = document.getElementById("medicine").value;

    // Validate inputs
    if (isNaN(age) || isNaN(weight) || age <= 0 || weight <= 0) {
        document.getElementById("dosageResult").textContent = "Please enter valid age and weight values.";
        document.getElementById("effectResult").textContent = "";
        document.getElementById("aiInsights").textContent = "AI is unable to process incomplete data.";
        return;
    }

    // Define the dosage per kg for each medicine (in grams)
    let dosagePerKg;
    let overdoseEffect;

    if (medicine === "paracetamol") {
        dosagePerKg = 0.01; // 10 mg per kg = 0.01 g per kg
        overdoseEffect = "Overdose can cause severe liver damage!";
    } else if (medicine === "ibuprofen") {
        dosagePerKg = 0.005; // 5 mg per kg = 0.005 g per kg
        overdoseEffect = "Overdose can cause stomach issues and kidney damage!";
    } else if (medicine === "aspirin") {
        dosagePerKg = 0.015; // 15 mg per kg = 0.015 g per kg
        overdoseEffect = "Overdose can cause bleeding and gastrointestinal issues!";
    }

    // Calculate dosage in grams
    let dosageInGrams = weight * dosagePerKg;

    // Adjust dosage based on age (e.g., reduce for children under 18)
    if (age < 18) {
        dosageInGrams *= 0.5; // Reduce dosage by 50% for children
    }

    // Display the result
    document.getElementById("dosageResult").textContent = `Recommended dosage of ${medicine} is: ${dosageInGrams.toFixed(2)} grams.`;
    document.getElementById("effectResult").textContent = `Effect of consuming more than the recommended dosage: ${overdoseEffect}`;

    // AI-like feedback
    generateAIFeedback(dosageInGrams, overdoseEffect);
}

function generateAIFeedback(dosage, overdoseEffect) {
    let aiResponse = "AI is processing your information...";
    
    if (dosage > 5) {
        aiResponse = `Alert: Your dosage seems unusually high. Always consult a doctor before proceeding. ${overdoseEffect}`;
    } else if (dosage > 1) {
        aiResponse = "The dosage looks appropriate based on your weight and age, but be cautious.";
    } else {
        aiResponse = `For a low dosage, you might not be getting enough of the active ingredient. Consult a doctor to adjust your dosage if needed.`;
    }
    
    document.getElementById("aiInsights").textContent = aiResponse;
}