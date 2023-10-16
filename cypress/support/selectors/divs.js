export const divs = {
    divTextValue: (textValue) => {
        return `div:contains('${textValue}')`;
    },
    inventoryItem: "div.inventory_item",
    inventoryItemPrice: "div.inventory_item_price",
    checkoutCompleteContainer : "div#checkout_complete_container",
    inventoryItemDetails: "div.inventory_details_desc_container",
    summarySubtotalPrice: "div.summary_subtotal_label",
    errorMissingUserInformation: "div.error-message-container > h3",

}