function doGet(e) 
{
  var mo = e.parameter.func;
  if(mo == "addData")
  {
    var stat = add_data(e);
    if(stat == 1)
    {
      var result = 
      {
        status : true
      };
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }
  }
}
function add_data(e)
{
  var sheet_id = 'Your SpreadSheet Here'; // Spreadsheet ID
  var sheet = SpreadsheetApp.openById(sheet_id).getActiveSheet();
  var lastVal = sheet.getRange("A1:A").getValues();

  var CurrentDate = new Date();
  var Date_ = Utilities.formatDate(CurrentDate, "GMT+0100", "dd/MM/YYYY");
  var Time_ = Utilities.formatDate(CurrentDate, "GMT+0100", "HH:mm:ss");

  sheet.appendRow([Date_, Time_, e.parameter.val]);
  return 1;
}
