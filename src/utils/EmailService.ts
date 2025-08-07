import emailjs from "emailjs-com";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

export const sendCraftRequest = async (
    userName: string,
    cartItems: Record<string, { item: any; quantity: number }>
) => {
    const itemList = Object.values(cartItems)
        .map(({ item, quantity }) => `${item.name} x${quantity}`)
        .join("\n");

    const message = `Запрос на крафт следующих предметов:\n${itemList}\n\nОт игрока: ${userName}`;

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        message,
        user_name: userName
    }, USER_ID);
};