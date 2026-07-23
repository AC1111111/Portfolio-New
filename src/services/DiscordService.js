import axios from "axios";

function DiscordService() {
    const Send = async(data) => {
        const body = {
            content: "New contact attempt",
            tts: false,
            color: "white",
            embeds: [{
                title: "Contact",
                description: data
            }]
        }
        try {
            const data = await axios.post("https://discord.com/api/webhooks/1529497688888967340/JZ6psqZp23fwzX4U1tthD3Hi8wMHdZOgR6AD2Zb1c53TN_wil4N3f8AN2PUW3O_GBRCj", body);
            console.log(data)
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        Send
    )
}

export default DiscordService