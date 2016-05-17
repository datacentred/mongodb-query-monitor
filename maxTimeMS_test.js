cursor=db.slaves.find( { $where: "sleep(100000)" } )
cursor.maxTimeMS(1000);
cursor.explain("executionStats")
