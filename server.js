var http = require('http');


const ob_header_configuration = { 
        
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   };

http.createServer(function (req, res) {
    res.writeHead(200, ob_header_configuration);

    if (req.url == '/crazycards/') {

        res.end(JSON.stringify([
            {
                Card_Type: "Student Life Card",
                Apr: 18.9,
                Balance_Transfer_Offer_Duration: 0,
                Purchase_Offer_Duration: 6,
                Credit_Available: 1200,
                availableFor: "student"
            },
            {
                Card_Type: "Anywhere Card",
                Apr: 33.9,
                Balance_Transfer_Offer_Duration: 0,
                Purchase_Offer_Duration: 0,
                Credit_Available: 300,
                availableFor: "anyone",
            },
            {
                Card_Type: "Liquid Card",
                Apr: 33.9,
                Balance_Transfer_Offer_Duration: 12,
                Purchase_Offer_Duration: 6,
                Credit_Available: 3000,
                min_required_income: 16001
            }
        ]));

    }
    else {
        res.end(JSON.stringify('no data'))
    }

}).listen(8080);