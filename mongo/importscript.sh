#!/bin/bash

mongoimport --db='whitepeak_db' --collection='main' --file='/tmp/json/main.json' --username='root' --password='HrigHdofkroJndi' --authenticationDatabase=admin
mongoimport --db='whitepeak_db' --collection='price' --file='/tmp/json/price/price.json' --jsonArray --username='root' --password='HrigHdofkroJndi' --authenticationDatabase=admin
mongoimport --db='whitepeak_db' --collection='price' --file='/tmp/json/price/price_preview.json' --username='root' --password='HrigHdofkroJndi' --authenticationDatabase=admin
mongoimport --db='whitepeak_db' --collection='about' --file='/tmp/json/about.json' --username='root' --password='HrigHdofkroJndi' --authenticationDatabase=admin
mongoimport --db='whitepeak_db' --collection='events' --file='/tmp/json/events.json' --username='root' --password='HrigHdofkroJndi' --authenticationDatabase=admin
