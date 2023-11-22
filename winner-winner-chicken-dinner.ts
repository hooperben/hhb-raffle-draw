import fs from "fs";

// Thank you sponsors!!
const prizes = [
  "1. Ze pickle $100 voucher",
  "2. Ze pickle $75 voucher",
  "3. Ze pickle $50 voucher",
  "4. Lulu Lemon Indooroopilly Seeding Session",
  "5. Lulu Lemon Indooroopilly Seeding Session",
  "6. Lulu Lemon Queen Street Voucher",
  "7. Science of Fitness",
  "8. Iron Hides Tattoo",
  "9. All Sports Physiotherapy Kangaroo Point",
  "10. Hawthorne Coffee Voucher",
  "11. Yilay Tie",
  "12. Go-to Skin Care Package",
  "13. Suit Society Tailored Suit",
  "14. Voco Hotel (1 Night Stay)",
  "15. Hotel Indigo (1 Night Stay)",
  "16. Broncos Signed Footy",
  "17. Titans Signed Footy",
  "18. Freds Forge Knife Set",
  "19. City Cave",
];

const runTheRaffle = () => {
  // load in the raffle entries
  const raffle = JSON.parse(
    fs.readFileSync("./raffle-entries.json").toString()
  ) as { name: string; ticketCount: number }[];

  // get the total amount of tickets
  const totalTickets = raffle.reduce((acc, cur) => acc + cur.ticketCount, 0);
  console.log(`In total, we sold ${totalTickets} tickets`);

  // we need to create a new array of names based on how many tickets there are
  const ticketArray = raffle.reduce<string[]>(
    (acc, cur) => [...acc, ...Array(cur.ticketCount).fill(cur.name)],
    []
  );

  if (ticketArray.length !== totalTickets) {
    throw new Error("We messed up the ticket pool"); // this shouldn't happen, but QA I guess
  }

  // we then jumble up our ticket pool
  const jumbledArray = ticketArray.sort(() => Math.random() - 0.5);

  // this is where our winners are written to (exciting!!)
  // now for each prize - we pick a winner (a random number between 1 and the amount of tickets sold)
  // we then remove the winner from the jumbled array so they can't win again
  const winners = prizes.map((prize) => {
    const winningTicketNumber = Math.floor(Math.random() * totalTickets);
    const winner = jumbledArray[winningTicketNumber];
    jumbledArray.splice(winningTicketNumber, 1);
    return { prize, winner };
  });

  // output our winners, thanks for playing!!
  winners.map((winner) =>
    console.log(`${winner.prize} - was won by ${winner.winner}`)
  );
};

try {
  runTheRaffle();
  process.exit(0);
} catch (err) {
  console.log(err);
  process.exit(1);
}
