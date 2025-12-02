export declare module "./chats.js" {
    function log(chats: Chats): void;
    const chats: Chats;
    type Chats = {
	time: string;
	message: string;
    };
}
