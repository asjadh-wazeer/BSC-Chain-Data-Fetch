export function contributeAmountReducer(state = contrbuteAmount, action) {
  switch (action.type) {
    case "CONTRIBUTE__AMOUNT":
      return state;

    default:
      return state;
  }
}

export function contributePriceReducer(state = contrbutePrice, action) {
  switch (action.type) {
    case "CONTRIBUTE__PRICE":
      return state;

    default:
      return state;
  }
}

const contrbuteAmount = {
  cbvBalance: "0 CBV",
  availableContributeBalance: "0 BNB",
  yourContributeAmount: "0 BNB",
  totalContributeAmount: "2,420542 BNB",
  totalTokenSoldAmount: "30,256,775,303 CBV",
};
const contrbutePrice = {
  hardCap: "4,000 BNB",
  preSalePrice: "12,500 CBV/1BNB",
  launchPrice: "5,500 CBV/1BNB",
  minContribute: "0.05 BNB/WALLET",
  maxContribute: "10 BNB/WALLET",
};
