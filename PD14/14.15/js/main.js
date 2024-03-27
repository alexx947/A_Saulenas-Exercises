let s1 = 222;
let s2 = 245;

for (let ticket = s1; ticket <= s2; ticket++) {
    if (ticket % 3 === 0) {
        let ticketText = ticket.toString();
        if (ticketText.includes('3') || ticketText.includes('6') || ticketText.includes('9')) {
            console.log(ticket);
        }
    };
};