# HHB 2023 Raffle Draw

The program we used to draw the raffle for the HHB 2023 Raffle Draw.

Works by taking an input in the form of:

```
[
  {
    "name": "Ticket Buyer"
    "ticketCount": X
  },
]
```

where X is the amount of tickets bought by the person.

We then create an array of names, with each name appearing the amount of times they bought tickets.

We then shuffle the array to a random order, and then for the 18 prizes:

1. Ze pickle $100
2. Ze pickle $75
3. Ze pickle $50
4. Lulu Lemon Indooroopilly Seeding Session
5. Lulu Lemon Indooroopilly Seeding Session
6. Lulu Lemon Queen Street
7. Science of Fitness
8. Iron Hides Tattoo
9. All Sports Physiotherapy Kangaroo Point
10. Hawthorne Coffee
11. Yilay Tie
12. Go-to Skin Care
13. Suit Society Tailored Suit
14. Voco Hotel (1 Night Stay)
15. Hotel Indigo (1 Night Stay)
16. Broncos Signed Footy
17. Titans Signed Footy
18. Freds Forge Knife Set
19. City Cave

We generate another random number, which is then used to pick a name from the array. This random person is the winner of that given prize.

We then remove this number from the array, so that it cannot be picked again.

Once this is done, we print out our prizes and their winners.

Thanks for playing and supporting mens health!!

### How to run

Assumes that you have a file `raffle-entries.json` which contains an array like above of all ticket purchases and the amount they purchased.

From root, then run (assuming you have bun installed):

```
bun winner-winner-chicken-dinner.ts
```
