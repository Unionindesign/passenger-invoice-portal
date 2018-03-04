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

INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, pax_name, payments, balance, due_date, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", "JONES,SUSAN MRS", 550, 4000, "4/21/2018", true, true, false, "1 for 10", 3000);