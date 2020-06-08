## General tileset generation flow

1. Upload geodata files to a tileset source.
2. Write a recipe that references the source.
3. Create a tileset from the recipe.
4. Publish the tileset.

## How to do it

Use [the provided CLI tool]. The source is `grand-canyon-v2` and the tileset is `rclark.grand-canyon-mts`.

_Note:_ `tileset_id` always starts with `rclark.` but source ids don't.

[the provided CLI tool]: https://github.com/mapbox/tilesets-cli
