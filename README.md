# HHB 2023 Raffle Draw

The program we used to draw the raffle for the HHB 2023 Raffle Draw.

Works by taking an input in the form of:

```
name, amount_of_tickets
```

We then create an array of names, with each name appearing the amount of times they bought tickets.

We then shuffle the array, and then for the 18 prizes:

1. Ze pickle $100
2. Ze pickle $75
3. Ze pickle $50
4. Lulu Lemon Indooroopilly
5. Lulu Lemon Queen Street
6. Science of Fitness
7. Iron Hides Tattoo
8. All Sports Physiotherapy Kangaroo Point
9. Hawthorne Coffee
10. Yilay
11. Go-to Skin Care
12. Suit Society
13. Voco Hotel (1 Night Stay)
14. Hotel Indigo (1 Night Stay)
15. Broncos Signed Footy
16. Titans Signed Footy
17. Freds Forge Custom Knife
18. City Cave

We generate another random number, which is then used to pick a name from the array.

We then remove this number from the array, so that it cannot be picked again.

Once this is done, we print out our prizes and their winners.

Thanks for playing and supporting mens health!!
