module.exports = {
    sendTestEmail: async ({
        client_name = " ",
        client_email = " ",
        client_phone = " ",
        client_reference = " ",
        client_message = " ",
        page_url = " ",
        client_ip = " ",
    }) => {
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Email Sender</title>
            <style>
                li {
                    list-style: none;
                }
        
                .other-details {
                    margin: 50px 0px 35px;
                }
        
                .main span {
                    width: 50%;
                    display: inline-block;
                    font-size: 19px;
                }
        
                .main span:nth-child(2) {
                    font-weight: bold;
                }
        
                .main p {
                    display: flex;
                }
        
                .main {
                    width: 40%;
                }
            </style>
        </head>
        
        <body>
            <div class="main">
                <h3>Hi sir/Ma'am,</h3>
                <div>
                    <h3>Enquire details</h3>
                    <div class="enquire-details">
                        <p><span>Name :</span> <span>${client_name}</span></p>
                        <p><span>Email :</span> <span>${client_email}]</span></p>
                        <p><span>phone No:</span> <span>${client_phone}</span></p>
                        <p><span>How did you hear about us:</span> <span>${client_reference}</span></p>
                        <p><span>message :</span> <span>${client_message}</span></p>
                    </div>
                    <div class="other-details">
                        <h3>Other Details</h3>
                        <div>
                            <p><span>Page url :</span> <span>${page_url}</span></p>
                            <p><span>IP address :</span> <span>${client_ip}</span></p>
                        </div>
                    </div>
                    <div>
                        <h3>Regards,</h3>
                        <h3>The future Tech</h3>
                    </div>
                </div>
            </div>
        </body>
        
        </html>`
    }
}