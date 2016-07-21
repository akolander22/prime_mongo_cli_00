1.> db.bios.find({awards :{$exists : true} }).pretty()

2.> db.bios.find({awards :{$exists :false} }).pretty()

3.> db.bios.find({contribs: {$in: ["OOP", "UNIX"]}}).pretty()

4.> db.bios.find({"awards.award": {$in: ["Turing Award"]}}).pretty()


//will come back to this one
> db.bios.find({_id: {$gte:3,$lte:7}}).pretty()

6.> db.bios.find({"awards.year" : {$lt : 2000}}).pretty()

7.> db.bios.find({$and: [{"birth" : {$exists: true}}, {"death" : {$exists : false}}]}).pretty()
