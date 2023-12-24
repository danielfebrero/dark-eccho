var express = require('express');
var router = express.Router();

const privacyPolicy = '1. Introduction\nThis Privacy Policy governs the use of the Eccho 2.2 ChatGPT Assistant (hereafter referred to as “Assistant”) by the public. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.\n\n2. Scope of Privacy Policy\nThis Privacy Policy applies to all interactions with the Assistant and covers the collection, use, and disclosure of personal information that may be collected anytime you interact with the Assistant.\n\n3. Information Collection and Use\n\n3.1 Types of Information Collected: We may collect various types of personal information, including, but not limited to, your name, contact details, and queries inputted into the Assistant.\n3.2 Purpose of Collection: The information is collected to provide personalized assistance, improve the functionality of the Assistant, and enhance user experience.\n3.3 User Consent: No personal information will be collected without the explicit consent of the user. Users will be clearly informed when their information is being collected, and the purpose of such collection.\n4. Data Storage and Security\n\n4.1 Data Storage: Collected data will be stored securely and will be accessible only to authorized personnel.\n4.2 Security Measures: We employ a variety of security measures to protect against the unauthorized access, alteration, disclosure, or destruction of your personal information.\n5. Data Sharing and Disclosure\n\n5.1 Limited Disclosure: Personal information will not be shared or sold to third parties for their marketing purposes.\n5.2 Legal Compliance: We may disclose personal information if required by law or if such action is necessary to comply with legal processes served on us.\n6. User Rights and Control\n\n6.1 Access and Correction: Users have the right to access their personal information and request correction of any inaccuracies.\n6.2 Opt-Out and Withdrawal of Consent: Users can opt-out of data collection or withdraw their consent at any time. This may, however, affect the functionality of the Assistant.\n7. Data Retention\nWe will retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.\n\n8. Changes to Privacy Policy\nWe reserve the right to modify this Privacy Policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.\n\n9. Contact Us\nIf you have any questions or concerns about this Privacy Policy or your personal information, please contact us at [Insert Contact Information].\n\nBy using the Eccho 2.2 ChatGPT Assistant, you acknowledge that you have read and agree to this Privacy Policy.';
const twitterEmbed = '<a class="twitter-timeline" href="https://twitter.com/APTDarkEccho?ref_src=twsrc%5Etfw">Tweets by APTDarkEccho</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/privacy-policy', function(req, res, next) {
  res.render('index', { title: 'Dark Eccho - Privacy policy', content: privacyPolicy });
});

router.get('/twitter/aptdarkeccho', function(req, res, next) {
  res.render('twitter', { title: 'APTDarkEccho on Twitter', content: twitterEmbed });
});

module.exports = router;
