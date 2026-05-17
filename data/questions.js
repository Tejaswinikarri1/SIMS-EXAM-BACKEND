const questions = [
  {
    id: 1,
    topic: "Digital Marketing",
    question: "What is digital marketing?",
    options: [
      "Marketing done online",
      "Using only Facebook to market products",
      "The process of promoting products and services using the internet",
      "Marketing using only Instagram",
    ],
    correct: 2,
  },

  {
    id: 2,
    topic: "HTML",
    question: "What is an HTML tag?",
    options: [
      "A keyword enclosed in angle brackets",
      "A tool used to style text",
      "A method to change webpage colors",
      "A type of browser setting",
    ],
    correct: 0,
  },

  {
    id: 3,
    topic: "HTML",
    question: "What is the correct format to start an HTML document?",
    options: ["</html>", "<html>", "<Doctype!>", "<!DOCTYPE html>"],
    correct: 3,
  },

  {
    id: 4,
    topic: "HTML",
    question: "What is an HTML element?",
    options: [
      "A complete structure consisting of a start tag, content, and an end tag",
      "A tool used to change text color",
      "A browser setting",
      "A CSS selector",
    ],
    correct: 0,
  },

  {
    id: 5,
    topic: "Digital Marketing",
    question: "Which Google tool helps businesses advertise online?",
    options: ["Google Ads", "Google Maps", "YouTube", "Chrome"],
    correct: 0,
  },

  {
    id: 6,
    topic: "CSS",
    question: "What is inline CSS?",
    options: [
      "A style used to create borders",
      "CSS applied directly to a single HTML element",
      "A style used to create tables",
      "A line drawn around elements",
    ],
    correct: 1,
  },

  {
    id: 7,
    topic: "Digital Marketing",
    question: "What is a Professional Account on Instagram?",
    options: [
      "An Instagram account designed for businesses and creators",
      "An account with a private profile",
      "An Instagram shopping website",
      "A gaming account",
    ],
    correct: 0,
  },

  {
    id: 8,
    topic: "Digital Marketing",
    question: "What is a Google Business Profile?",
    options: [
      "A business listing on Google showing details like address, reviews, and website",
      "A social media account",
      "A coding platform",
      "A website theme",
    ],
    correct: 0,
  },

  {
    id: 9,
    topic: "CSS",
    question: "Which is the correct CSS format to change paragraph text color?",
    options: [
      '<p style="color:DodgerBlue;">HELLO</p>',
      '<p style="border:2px solid Tomato;">HELLO</p>',
      '<p style="text-color:yellow;">HELLO</p>',
      '<p style="background-color:yellow;">HELLO</p>',
    ],
    correct: 0,
  },

  {
    id: 10,
    topic: "Digital Marketing",
    question: "What is a keyword in digital marketing?",
    options: [
      "A password used to access websites",
      "A hashtag on social media",
      "Words or phrases used to help target the correct audience online",
      "A browser shortcut",
    ],
    correct: 2,
  },

  {
    id: 11,
    topic: "HTML",
    question: "What does the <td> tag do in HTML?",
    options: [
      "Creates a heading",
      "Defines a table row",
      "Defines a data cell in a table",
      "Creates a hyperlink",
    ],
    correct: 2,
  },

  {
    id: 12,
    topic: "Digital Marketing",
    question: "What is Google Analytics?",
    options: [
      "A platform for creating logos",
      "A Google tool used to monitor website traffic and audience interaction",
      "A coding software",
      "A social media app",
    ],
    correct: 1,
  },

  {
    id: 13,
    topic: "Digital Marketing",
    question: "Which platform helps create a Google Business Profile?",
    options: ["Google Docs", "Google Ads", "JustDial", "Google Maps"],
    correct: 3,
  },

  {
    id: 14,
    topic: "HTML",
    question: "Combining two or more table cells in a row is called?",
    options: ["Colgroup", "Rowspan", "Colspan", "Merging"],
    correct: 2,
  },

  {
    id: 15,
    topic: "Digital Marketing",
    question: "Which is a major advantage of using Facebook for digital marketing?",
    options: [
      "Large audience reach",
      "Difficult to use",
      "Requires coding knowledge",
      "Only works for large companies",
    ],
    correct: 0,
  },

  {
    id: 16,
    topic: "Digital Marketing",
    question: "What is video marketing?",
    options: [
      "Using videos to promote products or services",
      "Watching YouTube videos",
      "Creating movies",
      "Uploading random videos online",
    ],
    correct: 0,
  },

  {
    id: 17,
    topic: "Digital Marketing",
    question: "What is the difference between a vlog and a blog?",
    options: [
      "A vlog mainly uses video content, while a blog mainly uses written content",
      "Blogs only contain images",
      "Vlogs are always live videos",
      "Blogs are only used for business",
    ],
    correct: 0,
  },

  {
    id: 18,
    topic: "HTML",
    question: "Which HTML tag is used to create a list item?",
    options: ["<tr>", "<li>", "<th>", "<ul>"],
    correct: 1,
  },

  {
    id: 19,
    topic: "HTML",
    question: "A clickable element used to perform an action on a webpage is called a?",
    options: ["Link", "Button", "URL", "Tag"],
    correct: 1,
  },

  {
    id: 20,
    topic: "Digital Marketing",
    question: "What is an Instagram Shop?",
    options: [
      "An Instagram feature that allows businesses to sell products directly",
      "A paid Instagram game",
      "An app used to edit videos",
      "A browser extension",
    ],
    correct: 0,
  },

  {
    id: 21,
    topic: "HTML",
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
  },

  {
    id: 22,
    topic: "HTML",
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<picture>", "<img>", "<src>"],
    correct: 2,
  },

  {
    id: 23,
    topic: "HTML",
    question: "What does the <br> tag do?",
    options: [
      "Creates bold text",
      "Inserts a line break",
      "Creates a border",
      "Starts a table",
    ],
    correct: 1,
  },

  {
    id: 24,
    topic: "HTML",
    question: "Which HTML tag defines a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correct: 2,
  },

  {
    id: 25,
    topic: "HTML",
    question: "Which HTML tag creates an ordered list?",
    options: ["<ul>", "<li>", "<dl>", "<ol>"],
    correct: 3,
  },

  {
    id: 26,
    topic: "CSS",
    question: "Which CSS property changes the background color?",
    options: ["color", "bg-color", "background-color", "fill"],
    correct: 2,
  },

  {
    id: 27,
    topic: "CSS",
    question: "Which CSS property controls text size?",
    options: ["text-size", "font-size", "font-style", "text-style"],
    correct: 1,
  },

  {
    id: 28,
    topic: "CSS",
    question: "How do you write a comment in CSS?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "# This is a comment",
    ],
    correct: 2,
  },

  {
    id: 29,
    topic: "CSS",
    question: "Which CSS property makes text bold?",
    options: [
      "font-weight: bold",
      "text-bold: true",
      "font-style: bold",
      "text-weight: bold",
    ],
    correct: 0,
  },

  {
    id: 30,
    topic: "CSS",
    question: "Which CSS property controls space outside an element’s border?",
    options: ["padding", "spacing", "margin", "border-spacing"],
    correct: 2,
  },

  {
    id: 31,
    topic: "Digital Marketing",
    question: "What does SEO stand for?",
    options: [
      "Social Engagement Optimization",
      "Search Engine Optimization",
      "Sponsored Email Outreach",
      "Search Engine Operations",
    ],
    correct: 1,
  },

  {
    id: 32,
    topic: "Digital Marketing",
    question: "What is a Call to Action (CTA)?",
    options: [
      "A customer support call",
      "A prompt encouraging users to take a specific action",
      "A marketing report",
      "A sales meeting",
    ],
    correct: 1,
  },

  {
    id: 33,
    topic: "Digital Marketing",
    question: "What does engagement rate measure on social media?",
    options: [
      "Number of followers",
      "Advertising budget",
      "Level of interaction such as likes, comments, and shares",
      "Number of posts",
    ],
    correct: 2,
  },

  {
    id: 34,
    topic: "Digital Marketing",
    question: "Why are hashtags used on social media?",
    options: [
      "To decorate posts",
      "To categorize content and improve discoverability",
      "To create websites",
      "To edit videos",
    ],
    correct: 1,
  },

  {
    id: 35,
    topic: "Digital Marketing",
    question: "What is email marketing?",
    options: [
      "Sending emails within a company",
      "Using email to send promotional messages to customers",
      "Creating email accounts",
      "Blocking spam emails",
    ],
    correct: 1,
  },

  {
    id: 36,
    topic: "Digital Marketing",
    question: "What does reach mean in social media marketing?",
    options: [
      "Number of posts created",
      "Number of unique users who saw the content",
      "Distance between customer and business",
      "Advertising budget",
    ],
    correct: 1,
  },

  {
    id: 37,
    topic: "Digital Marketing",
    question: "Which is an example of paid digital advertising?",
    options: [
      "Writing a blog post",
      "Posting on Instagram for free",
      "Running a Google Ads campaign",
      "Creating a Facebook page",
    ],
    correct: 2,
  },

  {
    id: 38,
    topic: "Digital Marketing",
    question: "What is content marketing?",
    options: [
      "Paying celebrities for advertisements",
      "Creating and sharing valuable content to attract customers",
      "Printing newspapers",
      "Sending SMS messages",
    ],
    correct: 1,
  },

  {
    id: 39,
    topic: "Digital Marketing",
    question: "What is an impression in digital advertising?",
    options: [
      "When a user clicks an ad",
      "When a product is purchased",
      "Each time an ad is displayed to a user",
      "The design style of an ad",
    ],
    correct: 2,
  },

  {
    id: 40,
    topic: "Digital Marketing",
    question: "What is influencer marketing?",
    options: [
      "Hiring TV actors for movies",
      "Collaborating with popular social media creators to promote products",
      "Sending emails to influencers",
      "Creating memes online",
    ],
    correct: 1,
  },
];

module.exports = questions;
