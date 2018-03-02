SELECT * FROM house
INNER JOIN HouserUsers ON house.userid = HouserUsers.userid
WHERE house.userid = $1