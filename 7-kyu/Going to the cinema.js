// Going to the cinema

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket),
// perc (fraction of what he paid for the previous ticket) and returns the first n such that
// ceil(price of System B) < price of System A.

function movie(card, ticket, perc) {
    let priceA = 0;
    let priceB = 0;
    let n = 0;

    while (Math.ceil(priceB + card) >= priceA) {
        priceA += ticket;
        priceB = (priceB + ticket) * perc;
        n++
    }
    return n;
};