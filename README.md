# game-collection

to run the phpunit with npm watch, I had to  
to change the default from 300 to a large number  
`export COMPOSER_PROCESS_TIMEOUT=50000`

TODO:

Gc: how to migrate the sheets data to the db?

Use thoughts field for more context on tag dlhigh
Front end read list and have buttons to add/ subtract from textarea

Set a boundary of 20gb for too big;configurable
Function that takes two games return Boolean if first is older than second
Color code: red is high size calculated,
Status: on_bluray, on_harddrive, to_download. Skip
Larger than 20gb. Is auto assigned skip

feat: View duplicates,with button to remove them
feat:View by date desc, so know where last parsed

Keep list of tags in table
Use tags: installed, to-download, to-install, uninstalled, to-review, no-play, dl-high-priority
Prioritize by lowest top, table UI to input priorities

## fix: title parsing

https://fitgirl-repacks.site/halo-the-master-chief-collection/
https://fitgirl-repacks.site/hackg-u-last-recode/
https://fitgirl-repacks.site/observer/
https://fitgirl-repacks.site/112-operator/

----

handle category: SWITCH EMULATED

## SQL

```sql
# find duplicates
SELECT  id, fg_id, title
FROM gc_games
GROUP BY fg_url
HAVING COUNT(id) > 1
```

```sql
# delete duplicates
DELETE t1 FROM gc_games t1
INNER JOIN gc_games t2 
WHERE 
    t1.id > t2.id AND 
    t1.fg_url = t2.fg_url;
    
```
