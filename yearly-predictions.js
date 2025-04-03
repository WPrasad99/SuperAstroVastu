/**
 * Yearly Predictions Download Script
 * This script handles the download functionality for yearly prediction files
 */

document.addEventListener("DOMContentLoaded", () => {
    // Get all yearly prediction links
    const yearlyPredictionLinks = document.querySelectorAll(".yearly-prediction")
  
    // Add click event listener to each link
    yearlyPredictionLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Get the year from the data attribute
        const year = this.getAttribute("data-year")
  
        // Define file paths for each year
        const filePaths = {
          2021: "predictions/yearly-prediction-2021.pdf",
          2022: "predictions/yearly-prediction-2022.pdf",
          2023: "predictions/yearly-prediction-2023.pdf",
          2024: "predictions/yearly-prediction-2024.pdf",
        }
  
        // Get the file path for the selected year
        const filePath = filePaths[year]
  
        if (filePath) {
          // Create a temporary link element
          const downloadLink = document.createElement("a")
          downloadLink.href = filePath
          downloadLink.download = `Yearly_Prediction_${year}.pdf`
  
          // Append to the body, click it, and remove it
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
        } else {
          console.error(`No file path defined for year ${year}`)
        }
      })
    })
  })
  
  