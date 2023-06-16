function convertFile() {
    const inputFile = document.getElementById('inputFile').files[0];
    const reader = new FileReader();
  
    reader.onload = function () {
      const text = reader.result;
      const csvData = convertTextToCSV(text);
  
      downloadFile(csvData, 'output.csv');
    };
  
    reader.readAsText(inputFile);
  }
  
  function convertTextToCSV(text) {
    // Convert text to CSV format (modify this as per your conversion requirements)
    const csvData = text.replace(/\t/g, ',');
    return csvData;
  }
  
  function downloadFile(content, fileName) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', fileName);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  