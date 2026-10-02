// Google Apps Script - handles form submissions
// Deploy as a web app: New -> Project -> ... (top right) -> Deploy as web app
// Set "Execute the app as" to your account
// Set "Who has access" to "Anyone"

function doGet(e) {
  return handleFormSubmission(e);
}

function doPost(e) {
  return handleFormSubmission(e);
}

function handleFormSubmission(e) {
  try {
    // Get parameters from request
    const name = e.parameter.name;
    const email = e.parameter.email;
    const phone = e.parameter.phone;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return ContentService.createTextOutput(
        JSON.stringify({success: false, message: 'Missing required fields'})
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create the spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Responses');
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Responses');
      
      // Add headers with bold formatting
      const headerRange = sheet.getRange('A1:D1');
      headerRange.setValues([['Timestamp', 'Name', 'Email', 'Phone']]);
      
      // Make headers bold
      const richTextValues = [];
      for (let i = 0; i < 4; i++) {
        richTextValues[i] = SpreadsheetApp.newRichTextValue()
          .setText(['Timestamp', 'Name', 'Email', 'Phone'][i])
          .setBold(0, -1, true)
          .build();
      }
      headerRange.setRichTextValues([richTextValues]);
      
      // Set header background color (light blue)
      headerRange.setBackground('#E8F4F8');
    }
    
    // Add new row
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    sheet.appendRow([timestamp, name, email, phone]);
    
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Response recorded successfully'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, message: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
