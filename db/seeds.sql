USE passengerInvoicePortal_db;

-- User story 1 - a group of 10 gets 1 free for 10 group credit 
-- the credit can be kept by the group leader, or split evenly for all 10
-- Burgundy and Provence cruise: Base price 3000
INSERT INTO Groups (group_name, tour_name, tour_code, departure_date)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "5/20/2018");

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018");

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date)
VALUES ("Western Travel", "The Greek Marathon", "EGM", "7/13/2018");

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date)
VALUES ("Ooh La La group", "Splendors of the French Riviera", "EFR", "8/24/2018");

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date)
VALUES ("James and Jim's Adventures", "Tanzania", "ATZ", "9/08/2018");

-- Wine Lovers group of 10 passengers, 1 for 10 group credit

-- Pax 1
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "JONES,SUSAN MRS", 550, 4000, "4/21/2018", 3000, true, true, true, "1 for 10", 300);

-- Pax 2
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "JONES,MICHAEL MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 3
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "JONES,WILMAJEAN MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 4
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "JONES,JACKSON MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 5
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "PUMPHREY,LAURA MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 6
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "PUMPHREY,MICHAEL MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 7
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "WILLOCK,ABRAHAM MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 8
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "WILLOCK,JUDY MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 9
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "DEBOUDOIR,BABETTE MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 10
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "DEBOUDOIR,GILES MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- END OF WINE LOVERS GROUP