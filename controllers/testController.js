let testControllerLogic = (req, res) => {
  function getRandomDateBetween(start, end) {
    var date1 = new Date();
    var start = date1.setDate(date1.getDate() - 7);

    //console.log(start)
    const date2 = new Date();
    var start = date2.setDate(date2.getDate() + 7);
    //console.log(start)
    let date3 = new Date(Math.floor(Math.random() * (end - start + 1) + start));
    //const unixTimetamp=Math.floor(date.getTime()/100)
    const unixTT = Math.floor(date3);
    return unixTT;
  }
  //Controller Logic Function
  if (Math.random() > 0.5 ? true : false) {
    //True

    //Psudo code

    //syntax
    /* for(initialization;condition;inc/dec){

    } */
    var ordersArray = [];
    let rn = Math.ceil(Math.random() * 20);
    for (var i = 1; i < Math.ceil(Math.random() * 20); i++) {
      let orders = {
        order_id: Math.ceil(Math.random() * (99999 - 1000) + 1000),
        arrives_at_utc: getRandomDateBetween(),
        paid_with: Math.random() < 0.5 ? "cash" : "wallet",
        total_paid: parseFloat((Math.random() * (99.0 - 10.0)).toFixed(2)),
        test: rn,
      };
      //Save in some variable
      ordersArray = [...ordersArray, orders];
    }
    res.status(200).json({
      orders: [ordersArray],
    });
  } else {
    //False
    res.status(503).send();
  }
};

//Named Exports
exports.testControllerLogic = testControllerLogic;
