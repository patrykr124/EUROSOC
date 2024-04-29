import { mailOptions, transporter } from "@/config/nodemailer";

const generateEmailContent = (data) => {
  const { email, quantities, basicQuantities, duration } = data;

  // Interpretacja okresu umowy
  let durationText = '';
  switch (duration) {
    case 1:
      durationText = '12 miesięcy';
      break;
    case 2:
      durationText = '24 miesięce';
      break;
    case 3:
      durationText = '36 miesięcy';
      break;
    default:
      durationText = 'Nieokreślony okres';
  }

  // Tworzenie tekstowej części danych podstawowych
  let basicDataText = "Podstawowe dane:\n";
  for (const [title, value] of Object.entries(basicQuantities)) {
    basicDataText += `${title}: ${value}\n`;
  }

  // Tworzenie HTML dla danych podstawowych
  let basicDataHtml = "<h3 align='left'>Podstawowe dane:</h3>";
  for (const [title, value] of Object.entries(basicQuantities)) {
    basicDataHtml += `<p align='left'><b>${title}</b>: ${value}</p>`;
  }

  // Tworzenie tekstowej części danych produktów
  let productsText = "Produkty:\n";
  for (const [productName, quantity] of Object.entries(quantities)) {
    productsText += `${productName}: ${quantity}\n`;
  }

  // Tworzenie HTML dla danych produktów
  let productsHtml = "<h3 align='left'>Produkty:</h3>";
  for (const [productName, quantity] of Object.entries(quantities)) {
    productsHtml += `<p align='left'><b>${productName}</b>: Quantity: ${quantity}</p>`;
  }

  // Całkowita treść e-maila w formacie tekstowym i HTML
  let stringData = `Email: ${email}\nOkres umowy: ${durationText}\n\n${basicDataText}\n${productsText}`;
  let htmlData = `<h3 align='left'>Email</h3><p align='left'>${email}</p>
                  <h3 align='left'>Okres umowy</h3><p align='left'>${durationText}</p>
                  ${basicDataHtml}
                  ${productsHtml}`;


    return {
       text: textContent,
        html: `<!DOCTYPE html>
        <html>
          <head>
            <title></title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
              body,
              table,
              td,
              a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
              }
              table {
                border-collapse: collapse !important;
              }
              body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
              }
              @media screen and (max-width: 525px) {
                .wrapper {
                  width: 100% !important;
                  max-width: 100% !important;
                }
                .responsive-table {
                  width: 100% !important;
                }
                .padding {
                  padding: 10px 5% 15px 5% !important;
                }
                .section-padding {
                  padding: 0 15px 50px 15px !important;
                }
              }
              .form-container {
                margin-bottom: 24px;
                padding: 20px;
                border: 1px dashed #ccc;
              }
              .form-heading {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 400;
                text-align: left;
                line-height: 20px;
                font-size: 18px;
                margin: 0 0 8px;
                padding: 0;
              }
              .form-answer {
                color: #2a2a2a;
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                font-weight: 300;
                text-align: left;
                line-height: 20px;
                font-size: 16px;
                margin: 0 0 24px;
                padding: 0;
              }
              div[style*="margin: 16px 0;"] {
                margin: 0 !important;
              }
            </style>
          </head>
          <body style="margin: 0 !important; padding: 0 !important; background: #fff">
            <div
              style="
                display: none;
                font-size: 1px;
                color: #fefefe;
                line-height: 1px;
                max-height: 0px;
                max-width: 0px;
                opacity: 0;
                overflow: hidden;
              "
            ></div>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  style="padding: 10px 15px 30px 15px"
                  class="section-padding"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                    style="max-width: 500px"
                    class="responsive-table"
                  >
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td>
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td
                                    style="
                                      padding: 0 0 0 0;
                                      font-size: 16px;
                                      line-height: 25px;
                                      color: #232323;
                                    "
                                    class="padding message-content"
                                  >
                                    <h2>Nowa wiadomość wyceny</h2>
                                    <div class="form-container">${htmlData}</div>
                                  
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
        `
    }
}


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body; // Dane zawierające `email` i `quantities`

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "Nowy email od klienta",
      });
      return res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};

export default handler