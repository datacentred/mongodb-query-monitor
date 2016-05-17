db.currentOp(
   {
     "active" : true,
     "secs_running" : { "$gt" : 3 },
   }
)
