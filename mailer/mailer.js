module.exports = {
    sendInfo: function sendInfo(data) {
        return {
            Subject: "Get One Inquiry",
            Content: `
            <html>
                    <h2>Please find the details below</h2>
                  <table align="center" border=1 width="300" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #ccc;">
                    <tr>
                      <td> Name </td>
                      <td> ${data?.name} </td>
                    </tr>
                    <tr>
                      <td> Mobile </td>
                      <td> ${data?.mobile} </td>
                    </tr>
                    <tr>
                      <td> E-Mail </td>
                      <td> ${data?.email} </td>
                    </tr>
                    <tr>
                      <td> Durations </td>
                      <td> ${data?.durations} </td>
                    </tr>
                    <tr>
                      <td> Date </td>
                      <td> ${data?.date} </td>
                    </tr>
                  </table>
            </html>
            `
        }
    }
}