# srt-csv
quick sketch to transform srt to csv -- with adjustable formatting for the CSV columns


### Installation:

Required dependencies for NodeJS:

    npm install subtitles-parser
    npm install json-2-csv

See https://github.com/bazh/subtitles-parser and https://github.com/mrodrig/json-2-csv


### Use:

Navigate in the terminal to this project folder, and use the path of the file .srt you want to convert as a argument:

    node index.js "/Path/to/Document/file.srt"

The converted file will be saved in the same folder, with the same name - but with an .csv extension. Use "" around the path to ensure spaces work as well.
