import Twig from 'twig';
// import fs from 'fs';

// require.extensions['.twig'] = function (module, filename) {
// 	module.exports = fs.readFileSync(filename, 'utf8');
// };

// // @ts-ignore
// import en from './en/forgot-password.html.twig';
// // @ts-ignore
// import fr from './fr/forgot-password.html.twig';

// @temporarily keeping the twigfiles here due to build issues,
// @todo: find a way to get the templates dir in build

const en = `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>OTP Verification for Roomaster - IIIT-BH</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 20px;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      padding-bottom: 20px;
    }

    .header img {
      max-width: 100px;
    }

    .content {
      text-align: center;
    }

    .otp {
      font-size: 24px;
      font-weight: bold;
      margin: 20px 0;
    }

    .footer {
      text-align: center;
      color: #888;
      font-size: 12px;
      margin-top: 20px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>OTP Verification</h1>
    </div>
    <div class="content">
      <p>Hi {{ firstName }},</p>
      <p>Thank you for signing up with Room Master - IIIT-BH. To complete your registration, please use the following OTP:</p>
      <div class="otp">{{ otp }}</div>
      <p>This OTP is valid for the next {{ expiration }} minutes. Please do not share this OTP with anyone.</p>
      <p>If you did not request this OTP, please ignore this email or contact our support team for assistance.</p>
    </div>
    <div class="footer">
      <p>Best regards,<br>Room Master Team</p>
      <p>Note: This is an automated email. Please do not reply to this email.</p>
    </div>
  </div>
</body>

</html>
`;

export default {
  en: Twig.twig({
    data: en,
  }),
};
