const cheerio = require("cheerio");
const axios = require("axios");

exports.handler = async () => {
  const response = await axios({
    url: "https://leanpub.com/opinionated-guide-to-react/",
  });
  const body = response.data;
  let $ = cheerio.load(body);

  let number = parseInt(
    $(".stats__list li:first-child .stats__list-item-metric").text()
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      number,
    }),
  };
};
