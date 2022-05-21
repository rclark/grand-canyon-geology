## General tileset generation flow

- Upload geodata files to a tileset source.
- Write a recipe that references the source.
- Create a tileset from the recipe.
- Publish the tileset.
- A style that references the tileset makes the map go.

## How to do it

Use [the provided CLI tool].
- The tileset source is `grand-canyon-v2`
- The tileset is `rclark.grand-canyon-dev`
- The style is `ckixofj0b2mbp19ozzcqi78d7`

So the steps:

1. `data-to-ld-json.js` creates 2 line-delimited JSON files. One is polygons, one is lines. It blends the unit descriptions with the geographic shapes.

2. Upload the files into the `grand-canyon-v2` tileset-source, replacing existing files the first time, and appending the second time.

    ```
    > tilesets upload-source rclark grand-canyon-v2 ./mapbox-tileset/geolines.ld.json --replace

    > tilesets upload-source rclark grand-canyon-v2 ./mapbox-tileset/geopolys.ld.json

    > tilesets view-source rclark grand-canyon-v2
    {"id": "mapbox://tileset-source/rclark/grand-canyon-v2", "files": 2, "size": 796643093, "size_nice": "759.74MB"}
    ```

3. Publish the tileset, using the `recipe.json` file in this directory. This launches a job which will update the tileset to a new set of tiles. The command provides instructions for checking on the status of the publish job.

The recipe is already associated with the tileset `rclark.grand-canyon-dev`, but shown below is how to update the tileset's recipe prior to publishing (if needed).

    ```
    > tilesets update-recipe rclark.grand-canyon-dev ./mapbox-tileset/recipe.json

    > tilesets publish rclark.grand-canyon-dev
    {"message": "Processing rclark.grand-canyon-dev", "jobId": "cl3drpjsz003309mf5t7ybc5q"}

    ✔ Tileset job received. Visit https://studio.mapbox.com/tilesets/rclark.grand-canyon-dev or run tilesets job rclark.grand-canyon-dev cl3drpjsz003309mf5t7ybc5q to view the status of your tileset.
    ```

    *Note* the `grand-canyon-mts` tileset can be used to stage and view changes. Style `ckixq3wq716h719rr9smfrkij` points at this tileset.

4. Because the website is wired up to the style `ckixofj0b2mbp19ozzcqi78d7`, and that style is wired up to the tileset `rclark.grand-canyon-dev`, changes will be reflected after the tiling job finishes, and perhaps after some caches clear.


[the provided CLI tool]: https://github.com/mapbox/tilesets-cli
